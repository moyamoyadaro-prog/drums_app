# jazz — フレーズ・ライブラリ

`/gen-solo` の recall（組み立て前）で参照し、検証後の capture / `/study-reference` で育てる
ジャズの分類済みフレーズ集。書式・タグ正規値は `README.md`、忠実度の扱いは
`../REFERENCE_STUDY.md` を参照。個人名（`drummer`）はここのタグと `<slug>.refs.json` のみに置き、
生成 `.alphatex` 本体には出さない。

## jazz-trade4-01 — アップビート始まりの三連連結句（Roach の手癖）
- genre: jazz
- scene: trade-4
- feel: swing
- tempo: 180-280
- difficulty: 中
- bars: 1
- drummer: Max Roach
- source: reference:max-roach-trading
- fidelity: paraphrase
- refs: https://www.learnjazzstandards.com/blog/learning-jazz/drums/learning-solo-style-max-roach/
- added: 2026-06-16

Roach が 4 小節トレードの随所で連結句に使う「アップビートから始まる小さな三連アイデア」を
再構成。スネアの三連が拍裏（"a"）から立ち上がり、次拍へ食い込む。ライドは標準スイング、
ハイハットは 2・4 でフット。具体音は近似（解説からの再構成）。

```
Ride:  Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3} Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3}
HiHat: r.4 HH.4 r.4 HH.4
Snare: r.8{tu 3} r.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} r.8{tu 3} Snare.8{tu 3} r.4 r.4
```

## jazz-trade4-02 — シングルストロークのメロディックなキット降下（Roach 一般語法）
- genre: jazz
- scene: trade-4
- feel: swing
- tempo: 200-300
- difficulty: 難
- bars: 2
- drummer: Max Roach
- source: reference:max-roach-trading
- fidelity: idiom
- refs: https://pas.org/max-roach/ https://www.learnjazzstandards.com/blog/learning-jazz/drums/learning-solo-style-max-roach/
- added: 2026-06-16

リバウンド主体ではなく単打を並べ、スネア→ハイ/ミッド/フロアタムへ「歌う」ように降下し、
最後にスネアへ戻って受ける、Roach に典型的な 4 小節応答の語法。特定ソロの写しではない一般手癖
なので idiom。再利用側でトラックへ振り分ける（ここでは 1 ボイスの旋律線として記述）。

```
Kit:   Snare.8 Snare.8 HiTom.8 HiTom.8 MidTom.8 MidTom.8 FloorTom.8 FloorTom.8 | FloorTom.8 MidTom.8 HiTom.8 Snare.8 Snare.4 r.4
HiHat: r.4 HH.4 r.4 HH.4 | r.4 HH.4 r.4 HH.4
```

## jazz-trade8-01 — モチーフ提示→拍をずらして再帰（変位の手法）
- genre: jazz
- scene: trade-8
- feel: swing
- tempo: 180-280
- difficulty: 中
- bars: 2
- drummer: Max Roach
- source: reference:max-roach-trading
- fidelity: paraphrase
- refs: https://www.learnjazzstandards.com/blog/learning-jazz/drums/learning-solo-style-max-roach/
- added: 2026-06-16

短いモチーフ（スネア＋ハイタム）を 1 小節目で提示し、2 小節目で 1 拍うしろへ変位させて再帰させる、
Roach のモチーフ展開（displacement）を再構成。長め（8 小節）トレードの起点に向く。具体音は近似。

```
Lead:  Snare.8 r.8 Snare.8 Snare.8 HiTom.4 r.4 | r.4 Snare.8 r.8 Snare.8 Snare.8 HiTom.4
HiHat: r.4 HH.4 r.4 HH.4 | r.4 HH.4 r.4 HH.4
```
