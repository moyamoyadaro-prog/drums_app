# alphaTex 記法規約（Drum Solo Studio）

ドラムソロ `.alphatex` を生成するときの、この repo 固有の取り決め。
`/gen-solo` スキルとテンプレート群はすべてこの規約に従う。検証は
`npm run data:validate`（`scripts/validate-data.mjs`）が機械的に行う。

## 1. 出力先・命名

- 生成物は `public/data/<slug>.alphatex` に置く。`<slug>` は半角小文字・ハイフン区切り（例 `funk-solo-16bars`）。
- `manifest.json` は **手で書かない**。`npm run data:manifest`（`scripts/build-manifest.mjs`）が
  各ファイルの `\title` とファイル更新時刻から自動生成する。

## 2. ファイル骨格

```
\title "曲名（日本語可）"
\subtitle "任意の補足"
\tempo 120
.                 ← メタデータ終端。これ以降がトラック定義
\track "Kick"
\instrument percussion
\clef neutral
\articulation Kick 36
... 小節 ...
\track "Snare"
...
```

- メタデータブロックは必ず `.` 行で終える。
- 各トラックは `\track "名前"` → `\instrument percussion` → `\clef neutral` →
  そのトラックで使う `\articulation` のみ宣言、の順。

## 3. パーツ別トラック分割（既定）

CLAUDE.md L25 準拠。**楽器ごとに別トラック**に分け、トラック単位の音量/ミュート/ソロ
（＝アプリの楽器調整 UI）が効くようにする。既定のトラック構成:

| トラック名 | 含める音 |
|---|---|
| `Kick` | Kick |
| `Snare` | Snare（必要なら Rimshot/Ghost も） |
| `HiHat` | HH / OpenHH |
| `Toms` | HiTom / MidTom / FloorTom |
| `Cymbals` | Crash / Ride |

- 各トラックには **そのトラックが使う articulation だけ** を宣言する。
- 単純な動作確認用に1本の "Drums" トラックにまとめるのは**例外**（既存 `sample-solo.alphatex` がそれ）。
  生成物は原則この多トラック構成にする。

## 4. articulation 番号表（GM パーカッション、`sample-solo.alphatex` 準拠）

| 名前 | 番号 | | 名前 | 番号 |
|---|---|---|---|---|
| Kick | 36 | | Crash | 49 |
| Snare | 38 | | Ride | 51 |
| HH（closed） | 42 | | HiTom | 48 |
| OpenHH | 46 | | MidTom | 45 |
| | | | FloorTom | 41 |

新しい音を足すときは GM ドラムマップの番号を使い、この表に追記する。

## 5. 音価・記譜

- 音価は音名のあとに `.数字`：`.4`=4分、`.8`=8分、`.16`=16分、`.2`=2分、`.1`=全。
- 付点は `{d}`：`Snare.8{d}`（付点8分）。**`.8.` のように末尾に点を打つのは不可**（小節が分割される）。
- 同時打ち（重ね）は丸括弧：`(Crash Kick).4`。
- 休符は `r`：`r.8`。**各トラックは小節を休符で必ず埋める**（鳴らないトラックも `r` で長さを合わせる）。
- 小節区切りは `|`。連符は `{tu N}`：`Snare.8{tu 3}`（8分3連）。
- 行コメントは `//`（生成意図のメモ等に使える）。

### 5.1 強弱（velocity）— **グルーヴ再現に必須**

アプリの alphaSynth は velocity 対応。**強弱を書かないと全打が同音量**になり、ゴースト／アクセント／
クレッシェンドが再生に出ない（＝「再現できない」の主因）。グルーヴ物・煽り・ゴースト主体の語法では必ず付ける。

- **強弱（dynamics）= beat 効果（音価の"後"）**：`Snare.16{dy ppp}` … `{dy pp}` `{dy p}` `{dy mp}`
  `{dy mf}` `{dy f}` `{dy ff}` `{dy fff}`。既定は `f` 相当。
- **ゴースト = ノート効果（音価の"前"・音名直後）**：`Snare{g}.16`（譜面で括弧表示＋velocity −1）。
- **アクセント = ノート効果**：`Snare{ac}.4`（+1）、強アクセント `Snare{hac}.4`（+2）。
- **併用可**：`Snare{g}.16{dy ppp}`（ノート効果→音価→beat効果 の順）。
- 位置を誤ると ERROR：`Snare.16{ac}` は不可（`ac` はノート効果なので音価の前）。`Snare.16{dy ppp}` は可。

目安：バックビート/アクセント `{ac}{dy ff}`、ゴースト絨毯 `{g}{dy ppp}`、刻みの表 `{dy f}`・裏 `{dy p}`、
クレッシェンドは音価を保ったまま `{dy pp}`→`{dy mf}`→`{dy ff}` と段階を上げる。

### 5.2 装飾音・ロール・ヘアピン — 表現記法（実機 importer で検証済み）

ニュアンスを底上げする記法。すべて `AlphaTexImporter` でパースとモデル反映を確認済み（`LEARNING_BACKLOG` G）。
**複数のビート効果は 1 ブレースに併記**（§5.1 と同じ。2ブレースに割ると parse error）。

- **フラム／装飾音 = `{gr}`（ノート効果・音名直後）**：装飾音ビートを**本体音の直前**に置く。
  - 例（同じ太鼓のフラム）：`Snare{gr}.8 Snare.4`（装飾の `.8` は表示上の見た目だけ）。
  - 位置指定：`{gr}`/`{gr b}` = ビート前（before-beat）、`{gr ob}` = ビート上（on-beat）。`{gr on}` は**不可**。
  - 他のノート効果と併記可：`Snare{gr ac}.8`（フラムアクセント）。強弱は本体側に：`Snare{gr}.8 Snare.4{dy ff}`。
  - **重要（小節長）**：装飾音は**記譜音価ゼロ**（displayDuration=0）。本体音＋休符だけで拍子を満たすこと。
    装飾音のぶんを足して数えない。フラム自体は小節長にカウントされない（検証は記譜音価で行う＝§6）。
- **ロール／トレモロ = `{tp N}`（ビート効果・音価の後）**：その音を N 分音符で刻む（バズ/プレスロール近似）。
  - `{tp 8}`/`{tp 16}`/`{tp 32}`（32 が最も細かい）。例：`Snare.2{tp 32}`（2分音符ぶんのロール）。
- **ヘアピン = `{cre}`（クレッシェンド）/ `{dec}`（デクレッシェンド）（ビート効果・音価の後）**。
  - 単独の段階クレッシェンド（§5.1）と違い、1音を伸ばしながら煽る。ロールと相性が良い：
    `Snare.2{tp 16 cre} Snare{ac}.4{dy ff}`（クレッシェンドロール → アクセント着地）。
- 未対応（parse error）：`{lr}`（let ring）/ `{st}`（staccato）/ 音名 `x`（dead note は articulation 譜に混ぜられない）。
  シンバルのサスティンやチョークは GM 音源の制約もあり、当面は近似/設計のみ。

## 6. 不変則（検証が機械チェックする）

1. **小節長**：各小節の**記譜音価**（displayDuration）の合計が拍子（既定 4/4 = 全音符相当）に一致すること。
   過不足は小節番号付きで ERROR。装飾音 `{gr}` は記譜音価ゼロなので、本体音＋休符だけで拍子を満たす。
   （※再生音価ではなく記譜音価で判定する。フラムは再生上 前後の音から約120 ticks を盗み、再生音価合計が
   位置依存で ±120 ズレるため。`scripts/validate-data.mjs` の `notatedDuration` がこれを担う。）
2. **トラック整列**：1ファイル内の全トラックは**同じ小節数**であること。
3. **manifest 整合**：`manifest.json` の各 `file` が実在し、全 `.alphatex` が manifest に載っていること。

生成後は必ず `npm run data:validate` を通す。1件でも ERROR があれば未完成とみなす。
`public/data/demo-expressivity-4bars.alphatex` は §5.2 の記法を実証する生きたフィクスチャ（1拍目フラムを含み、
記譜音価で判定しないと落ちる）。

## 7. 出典メタデータ（reference 由来フレーズの帰属）

既存ソロを「人が聴いて分かる程度に形を残して」流用したときは、**誰の何のソロか**をアプリの
備考に出せるよう帰属情報を残す。名前を notation 本体（`.alphatex`）に出してよいのは
**`\title` の「<ドラマー>風」表記のみ**（fidelity と整合する控えめな帰属。例 `\title "Max Roach 風 …"`）。
それ以外（譜面コメント・トラック名など本体の他の場所）に名前を書かないのは従来どおりの不変則。
詳細な帰属（曲名・小節範囲・出典 URL）は **provenance メタデータ**として、楽譜と 1:1 のサイドカーに置く:

- 置き場所: `public/data/<slug>.refs.json`（`<slug>` は対応する `.alphatex` と同じ）。
- 形式: オブジェクトの JSON 配列。各要素のフィールド:

  | フィールド | 必須 | 内容 |
  |---|---|---|
  | `bars` | ○ | `[開始, 終了]`（1始まり・両端含む小節範囲） |
  | `drummer` | ○ | 帰属ドラマー名 |
  | `song` | ○ | 曲/ソロ名 |
  | `fidelity` | ○ | `transcribed` / `paraphrase` / `idiom`（REFERENCE_STUDY.md 参照） |
  | `refs` | 任意 | 裏取りに使った出典 URL の配列 |
  | `libraryId` | 任意 | 由来の phrase-library エントリ id |
  | `note` | 任意 | 借用したデバイスの短い補足 |

- `npm run data:manifest` がこのサイドカーを読み、`manifest.json` の該当 item の `references[]`
  へ畳み込む（アプリは manifest のみを読む）。手で manifest を編集しない。
- `npm run data:validate` がサイドカーの構造・小節範囲（譜面の総小節数内）・`fidelity` 値を検証する。
- 形が溶けて原曲が認知できない一般語法（純 idiom）は載せない。**“真似と分かる”ものだけ**記録する。
