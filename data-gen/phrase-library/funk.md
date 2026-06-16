# funk — フレーズ・ライブラリ

`/gen-solo` の recall（組み立て前）で参照し、検証後の capture / `/study-reference` で育てる
ファンクの分類済みフレーズ集。書式・タグ正規値は `README.md`、忠実度の扱いは
`../REFERENCE_STUDY.md` を参照。個人名（`drummer`）はここのタグと `<slug>.refs.json` のみに置き、
生成 `.alphatex` 本体には出さない。

**強弱は必須**（`CONVENTIONS.md §5.1`）。ファンクはゴースト（弱打）とバックビート（強打）の差で
グルーヴが立つので、ゴースト=`{g}{dy ppp}`、バックビート=`{ac}{dy ff}`、刻みの表/裏=`{dy f}`/`{dy p}`
を必ず付ける。付けないと全打同音量になり再生で再現されない。ハイハットは時間軸トラック（16分＋オープン）。
拍子変更は各トラックで `\ts 4 4` / `\ts 9 8` を同じ位置に宣言する。

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
16分ハイハットにオープンを散らし（表アクセント/裏弱）、スネアはゴーストの絨毯の上でバックビートを強打、
キックはシンコペート。公開採譜で拍子(4/4↔9/8)・テンポ(112)・細分(16分)を裏取り、具体音は再構成なので paraphrase。

```
HiHat: HH.16{dy f} HH.16{dy p} HH.16{dy p} HH.16{dy p} HH.16{dy f} HH.16{dy p} OpenHH.16{dy f} HH.16{dy p} HH.16{dy f} HH.16{dy p} HH.16{dy p} HH.16{dy p} HH.16{dy f} HH.16{dy p} OpenHH.16{dy f} HH.16{dy p} | HH.8{dy f} HH.8{dy p} OpenHH.8{dy f} HH.8{dy f} HH.8{dy p} HH.8{dy p} HH.8{dy f} OpenHH.8{dy f} HH.8{dy p}
Snare: Snare{g}.16{dy ppp} Snare{g}.16{dy ppp} r.16 Snare{g}.16{dy ppp} Snare{ac}.16{dy ff} r.16 Snare{g}.16{dy ppp} r.16 r.16 Snare{g}.16{dy ppp} r.16 Snare{g}.16{dy ppp} Snare{ac}.16{dy ff} r.16 Snare{g}.16{dy ppp} Snare{g}.16{dy ppp} | Snare{g}.8{dy ppp} Snare{ac}.8{dy ff} r.8 Snare{g}.8{dy ppp} Snare{ac}.8{dy ff} r.8 Snare{g}.8{dy ppp} Snare{ac}.8{dy ff} r.8
Kick:  Kick.16{dy f} r.16 r.16 Kick.16{dy f} r.16 r.16 Kick.16{dy f} r.16 r.16 r.16 Kick.16{dy f} r.16 r.16 Kick.16{dy f} r.16 r.16 | Kick.8{dy f} r.8 r.8 Kick.8{dy f} r.8 r.8 Kick.8{dy f} r.8 r.8
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
バックビートを 16分1つぶん前へ（"e"へ）ずらして置くのが displaced のキモ。具体音は近似なので paraphrase。

```
HiHat: HH.16{dy f} HH.16{dy p} HH.16{dy p} HH.16{dy p} HH.16{dy f} HH.16{dy p} HH.16{dy p} HH.16{dy p} HH.16{dy f} HH.16{dy p} HH.16{dy p} HH.16{dy p} HH.16{dy f} HH.16{dy p} HH.16{dy p} HH.16{dy p}
Snare: Snare{g}.16{dy ppp} Snare{g}.16{dy pp} r.16 Snare{g}.16{dy ppp} Snare{ac}.16{dy ff} Snare{g}.16{dy ppp} Snare{g}.16{dy pp} r.16 Snare{g}.16{dy ppp} r.16 Snare{g}.16{dy pp} Snare{ac}.16{dy ff} r.16 Snare{g}.16{dy ppp} r.16 Snare{g}.16{dy pp}
Kick:  Kick.16{dy f} r.16 r.16 Kick.16{dy f} r.16 r.16 Kick.16{dy f} r.16 r.16 r.16 Kick.16{dy f} r.16 r.16 Kick.16{dy f} r.16 r.16
```

## funk-fill-01 — 6連のゴースト・バーストからのクレッシェンド（sextuplet feel）（4/4）
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

グルーヴの中へ滑り込ませる16分6連を、`{dy}` を段階的に上げてクレッシェンドさせるバースト（"sextuplet feel"）。
弱→強の velocity 推移が肝。特定曲の写しではない一般手癖なので idiom。再利用側でスネア⇄タムへ振り分けてよい。

```
Snare: Snare.16{tu 6 dy pp} Snare.16{tu 6 dy pp} Snare.16{tu 6 dy pp} Snare.16{tu 6 dy pp} Snare.16{tu 6 dy pp} Snare.16{tu 6 dy pp} Snare.16{tu 6 dy p} Snare.16{tu 6 dy p} Snare.16{tu 6 dy p} Snare.16{tu 6 dy p} Snare.16{tu 6 dy p} Snare.16{tu 6 dy p} Snare.16{tu 6 dy mf} Snare.16{tu 6 dy mf} Snare.16{tu 6 dy mf} Snare.16{tu 6 dy mf} Snare.16{tu 6 dy mf} Snare.16{tu 6 dy mf} Snare.16{tu 6 dy ff} Snare.16{tu 6 dy ff} Snare.16{tu 6 dy ff} Snare.16{tu 6 dy ff} Snare.16{tu 6 dy ff} Snare.16{tu 6 dy ff}
```
