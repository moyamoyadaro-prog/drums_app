# funk — フレーズ・ライブラリ

`/gen-solo` の recall（組み立て前）で参照し、検証後の capture / `/study-reference` で育てる
ファンクの分類済みフレーズ集。書式・タグ正規値は `README.md`、忠実度の扱いは
`../REFERENCE_STUDY.md` を参照。個人名（`drummer`）はここのタグと `<slug>.refs.json` のみに置き、
生成 `.alphatex` 本体には出さない。

ハイハットは時間軸トラックとして使う（16分＋オープン）。拍子変更は各トラックで `\ts 4 4` /
`\ts 9 8` を同じ位置に宣言する（検証は masterbar の拍子で小節長を判定する）。

## funk-groove-01 — 4/4↔9/8 のメトリック・スキップ（Skip Step 系）
- genre: funk
- scene: groove
- feel: straight-16
- tempo: 100-120
- difficulty: 難
- bars: 2
- drummer: Nate Smith
- source: reference:nate-smith-skip-step
- fidelity: paraphrase
- refs: https://www.drum-hub.com/blog/2021/5/18/nate-smith-skip-step-beat-breakdown https://www.scribd.com/document/364235852/nate-smith-skip-step-pdf https://downbeat.com/news/detail/nate-smiths-universe-of-beats
- added: 2026-06-16

4/4 の16分ファンク1小節に 9/8 を継ぎ足して「つまずく（skip）」変拍子を作る Nate Smith の手法。
16分ハイハットにオープンを散らし、スネアはゴーストで早れたバックビート、キックはシンコペート。
公開採譜で拍子(4/4↔9/8)・テンポ(112)・細分(16分)・ゴースト/ディスプレイスの性格を裏取りしたが、
具体音は原譜の複製ではなく再構成なので paraphrase。再利用時は `\ts` を同位置に宣言する。

```
HiHat: HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 OpenHH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 OpenHH.16 HH.16 | HH.8 HH.8 OpenHH.8 HH.8 HH.8 HH.8 HH.8 OpenHH.8 HH.8
Snare: r.16 Snare.16 r.16 r.16 Snare.16 r.16 r.16 Snare.16 r.16 r.16 r.16 Snare.16 r.16 r.16 Snare.16 r.16 | r.8 Snare.8 r.8 Snare.8 r.8 r.8 Snare.8 r.8 Snare.8
Kick:  Kick.16 r.16 r.16 Kick.16 r.16 r.16 Kick.16 r.16 r.16 r.16 Kick.16 r.16 r.16 r.16 r.16 Kick.16 | Kick.8 r.8 r.8 Kick.8 r.8 r.8 Kick.8 r.8 r.8
```

## funk-groove-02 — Dilla 由来のディスプレイス＋ゴースト絨毯（4/4）
- genre: funk
- scene: groove
- feel: straight-16
- tempo: 80-120
- difficulty: 難
- bars: 1
- drummer: Nate Smith
- source: reference:nate-smith-idiom
- fidelity: paraphrase
- refs: https://ezrasear.wordpress.com/2017/12/14/nate-smith-intergenerational-music-professional-and-master-of-groove/ https://downbeat.com/news/detail/nate-smiths-universe-of-beats
- added: 2026-06-16

J Dilla 由来の「早れたスネア＋"酔った"ハイハット」を、絶え間ない16分ゴーストの絨毯の上に置く Nate の核。
バックビートは 2・4 をわずかに前へずらし、隙間をゴーストで埋める。具体音は近似なので paraphrase。

```
HiHat: HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16
Snare: Snare.16 Snare.16 r.16 Snare.16 r.16 Snare.16 Snare.16 r.16 Snare.16 r.16 Snare.16 Snare.16 r.16 Snare.16 r.16 Snare.16
Kick:  Kick.16 r.16 r.16 Kick.16 r.16 r.16 Kick.16 r.16 r.16 r.16 Kick.16 r.16 r.16 Kick.16 r.16 r.16
```

## funk-fill-01 — 6連のゴースト・バースト（sextuplet feel）（4/4）
- genre: funk
- scene: fill
- feel: straight-16
- tempo: 90-130
- difficulty: 難
- bars: 1
- drummer: Nate Smith
- source: reference:nate-smith-idiom
- fidelity: idiom
- refs: https://ezrasear.wordpress.com/2017/12/14/nate-smith-intergenerational-music-professional-and-master-of-groove/ https://downbeat.com/news/detail/nate-smiths-universe-of-beats
- added: 2026-06-16

グルーヴの中へ不意に滑り込ませる16分6連のゴースト・バースト（"sextuplet feel"）。
特定曲の写しではない一般手癖なので idiom。再利用側でスネア⇄タムへ振り分けてよい。

```
Snare: Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6} Snare.16{tu 6}
```
