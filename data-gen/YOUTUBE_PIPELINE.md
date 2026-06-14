# YouTube ドラム解析パイプライン（後フェーズ・設計のみ）

**現状: 未実装。** テキスト指示での生成（`/gen-solo`）が先行フェーズ。ここは将来実装する
「YouTube の指定時間のドラムを解析して alphaTex 化する」自動音声パイプラインの設計メモ。

## 背景・制約

- Claude（モデル）は**音声を直接聴けない**。よって「この動画の 1:23〜1:45 を採譜して」は、
  音声解析ツールで打点・テンポを数値化し、その結果を Claude が alphaTex へ整形する、という分業になる。
- ドラムの自動採譜は精度が不完全。**最終的に人間が原曲と聴き比べて検証・修正する**ループ前提。
- 取得は個人の学習用途を前提とする。

## パイプライン

```
YouTube URL + 時間レンジ
  └─[1] yt-dlp で当該レンジの音声だけ抽出
        └─[2] Python(librosa) でテンポ/ビートグリッド/オンセット検出 + 帯域で粗分類
              └─[3] 中間 JSON 出力（detected_tempo, onsets[time,band]）
                    └─[4] /gen-solo の組立工程に投入（グリッド量子化 → articulation マップ → alphaTex）
                          └─[5] アプリ再生で原曲と聴き比べ → 人間が修正
```

### [1] 音声抽出（yt-dlp）

```
yt-dlp -x --audio-format wav \
  --download-sections "*1:23-1:45" \
  -o "segment.%(ext)s" "<URL>"
```

### [2] 解析（librosa、最小構成）

- `librosa.beat.beat_track` → テンポ・拍位置。
- `librosa.onset.onset_detect` → 打点時刻。
- スペクトル帯域で粗分類：低=Kick / 中=Snare・Tom / 高=HiHat・Cymbal。
- （任意・高精度化）`madmom` の drum/onset モデル。**Windows では madmom 導入が難しい**ことがあるため、
  まず librosa 単体で開始し、必要になったら madmom を足す。

### [3] 中間 JSON（同じ組立工程に渡す入口）

```json
{
  "source": "<URL> 1:23-1:45",
  "detected_tempo": 96,
  "time": "4/4",
  "onsets": [{ "time": 0.00, "band": "low" }, { "time": 0.24, "band": "high" }]
}
```

### [4] alphaTex 化

- テンポとビートグリッドで onset 時刻を最寄りの音価（8分/16分/3連）へ量子化。
- band → articulation へマップ（low→Kick, mid→Snare/Tom, high→HH/Cymbal。曖昧な所は人間が後で確定）。
- 以降は **テキスト生成と完全に同じ** `/gen-solo` の組立・検証工程（CONVENTIONS.md／`data:validate`）に乗る。

## 実装時の TODO（このフェーズを着手するとき）

- [ ] `scripts/yt-analyze.mjs`（or `.py`）: 上記 [1]〜[3] を実行し中間 JSON を出力。
- [ ] Python 依存（librosa）と yt-dlp の導入手順を README 化。
- [ ] `/gen-solo` に「brief の source が解析 JSON のときは onset を取り込む」分岐を追加。
- [ ] 量子化の精度と人間検証ステップの運用を固める。
