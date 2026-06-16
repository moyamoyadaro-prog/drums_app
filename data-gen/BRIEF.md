# 生成 brief フォーマット

`/gen-solo` に渡す依頼の型。freeform でも生成できるが、この型に沿うと再現性が上がる。
未記入の項目はスキルが既定値で補完してから確認する。

これらの項目は通常 `INTERVIEW.md` の対話式ヒアリングで埋める。freeform でも生成できる。

## テンプレ（コピーして記入）

```
title:              例) ファンク・ソロ 16小節
genre:              例) funk    # jazz/funk/fusion/rock/metal/latin/pop/other（想起の軸）
tempo:              例) 100        # BPM
bars:               例) 16         # 総小節数
time:               例) 4/4        # 拍子（省略時 4/4）
style/feel:         例) ファンク、16分ゴースト多め
feel:               例) straight-16  # リズムの土台（INTERVIEW/phrase-library のタグ正規値）
time_feel:          例) just       # ノリ/置きどころ: just / ahead(前ノリ) / behind(後ノリ)
scene:              例) trade-4    # 使用シーン（intro/groove/fill/build/trade-4/climax/ending 等）
difficulty:         例) 中         # 易 / 中 / 難
sections:           例) A:4小節グルーヴ → フィル2小節 → B:8小節展開 → 締めフィル2小節
dynamics:           例) Bで盛り上げ、最後の1小節は decrescendo
reference_drummer:  例) なし / あり: <個人名>（手癖を notes に言語化。本体データには出さない）
sticking:           例) リニア中心 / 伝統的 / ゴースト多用 / こだわらない
avoid:              例) ツーバス控えめ, 複雑な連符は避ける（複数可。無ければ「特になし」）
parts:              例) 全部位（既定）/ もしくは kick,snare,hihat のみ 等
source:             例) 自作 / 参考: <YouTube URL> 1:23-1:45（将来の音声解析用メモ）
notes:              例) ライドのベルを多用、フロアタム強め
```

## 各項目メモ

- **bars / sections** は合計が一致するように。sections は「何小節で何をするか」を並べる。
- **genre / scene / feel** は `phrase-library/` での想起・記録の軸。正規値は `phrase-library/README.md`。
- **time_feel** は BPM とは別軸の置きどころ（just/ahead/behind）。譜面では近似しきれないので意図は `notes` へ。
- **sticking / avoid** は生成時の表現指針。`avoid` は守るべき制約として扱う（該当フレーズを使わない）。
- **reference_drummer** が「あり＋名前」のときは手癖を `notes` に言語化し、想起時の `drummer:` タグに使う。名前は生成 `.alphatex` 本体には出さない。
- **parts** を絞ると生成トラックもそれだけになる（既定は全部位＝多トラック構成、CONVENTIONS.md §3）。
- **source** に YouTube の URL＋時間を書いておくと、後の音声解析フェーズ（YOUTUBE_PIPELINE.md）でそのまま使える。
- 難易度の目安：易=8分中心 / 中=16分・簡単なフィル / 難=連符・パラディドル・速いフィル。
