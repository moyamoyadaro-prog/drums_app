# fusion — フレーズ・ライブラリ（育てる語彙）

`/gen-solo` の recall（組み立て前）で参照し、検証後の capture / `/study-reference` で育てる
フュージョンの分類済みフレーズ集。書式・タグ正規値は `README.md`、忠実度の扱いは
`../REFERENCE_STUDY.md` を参照。個人名（`drummer`）はここのタグと `<slug>.refs.json` のみに置き、
生成 `.alphatex` 本体には出さない（`\title` の「〜風」表記のみ可）。

## fusion-fill-01 — トム周回の高速シングルストローク＋ダブルバス（Billy Cobham）
- genre: fusion
- scene: fill
- feel: straight-16
- tempo: 160-260
- difficulty: 難
- bars: 4
- drummer: Billy Cobham
- source: reference:billy-cobham-idiom
- fidelity: idiom
- refs: https://pas.org/billy-cobham/ https://www.moderndrummer.com/article/august-september-1979-billy-cobham/
- added: 2026-06-18

連続16分のバスドラ（ダブルバスを単一Kickで近似）の上で、稲妻のようなシングルストローク／単手ダブルを
タム周りに走らせる Cobham の語法。オープンハンド／China／奇数拍子の開拓者。一般語法なので idiom。

```
Kick:  Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16
Snare: Snare.16 Snare.16 Snare.16 Snare.16 Snare.16 Snare.16 Snare.16 Snare.16 Snare.16 Snare.16 Snare.16 Snare.16 Snare.16 Snare.16 Snare.16 Snare.16
Toms:  HiTom.16 HiTom.16 HiTom.16 HiTom.16 MidTom.16 MidTom.16 MidTom.16 MidTom.16 FloorTom.16 FloorTom.16 FloorTom.16 FloorTom.16 FloorTom.16 FloorTom.16 FloorTom.16 FloorTom.16
```

## fusion-groove-01 — ファンクとジャズを橋渡すシンコペ・グルーヴ（Lenny White）
- genre: fusion
- scene: groove
- feel: straight-16
- tempo: 100-160
- difficulty: 中
- bars: 1
- drummer: Lenny White
- source: reference:lenny-white-idiom
- fidelity: idiom
- refs: https://en.wikipedia.org/wiki/Lenny_White https://www.funkretrospect.com/1975/lenny-white-drumming-through-jazzfunk-fusion-in-1975
- added: 2026-06-18

ファンク／ジャズ／ロック／ソウルを一体に溶かし、ゴースト混じりのシンコペートしたキック＆バックビートに
8分ハットを重ねる Lenny White のジャズファンク・グルーヴ（RTF）。一般語法なので idiom。

```
HiHat: HH.8 HH.8 HH.8 HH.8 HH.8 HH.8 HH.8 HH.8
Snare: r.8 Snare{g}.8 Snare{ac}.4 r.8 Snare{g}.8 Snare{ac}.4
Kick:  Kick.8 r.8 r.8 Kick.8 Kick.8 r.8 r.4
```

## fusion-groove-02 — リニア（手足が重ならない）16分グルーヴ＋ゴースト（Steve Gadd）
- genre: fusion
- scene: groove
- feel: straight-16
- tempo: 90-130
- difficulty: 難
- bars: 1
- drummer: Steve Gadd
- source: reference:steve-gadd-idiom
- fidelity: idiom
- refs: https://www.musicradar.com/news/drums/5-reasons-steve-gadd-is-a-drum-legend-597947 https://drummercafe.com/education/lessons/steve-gadd-50-ways-drum-groove
- added: 2026-06-18

各16分を別々の手足に振り分け、二つの肢が同時に当たらない**リニア**な流れを作る Gadd の語法
（「50 Ways」型）。スネアのゴーストが隙間を埋め推進する。一般語法なので idiom。各拍 = スネアG／キック／ハット／スネアG。

```
Snare: Snare{g}.16 r.16 r.16 Snare{g}.16 Snare{ac}.16 r.16 r.16 Snare{g}.16 Snare{g}.16 r.16 r.16 Snare{g}.16 Snare{ac}.16 r.16 r.16 Snare{g}.16
Kick:  r.16 Kick.16 r.16 r.16 r.16 Kick.16 r.16 r.16 r.16 Kick.16 r.16 r.16 r.16 Kick.16 r.16 r.16
HiHat: r.16 r.16 HH.16 r.16 r.16 r.16 HH.16 r.16 r.16 r.16 HH.16 r.16 r.16 r.16 HH.16 r.16
```

## fusion-groove-03 — 叙情的なフュージョン・ライドと旋律タム（Peter Erskine）
- genre: fusion
- scene: groove
- feel: straight-8
- tempo: 100-160
- difficulty: 中
- bars: 4
- drummer: Peter Erskine
- source: reference:peter-erskine-idiom
- fidelity: idiom
- refs: https://en.wikipedia.org/wiki/Peter_Erskine http://www.drummerworld.com/drummers/Peter_Erskine.html
- added: 2026-06-18

洗練されたポリリズムと旋律性、ダイナミクスへの繊細さで「歌う」Erskine（Weather Report）。8分ライドの
土台に控えめなバックビートと、終盤の旋律的タム・フレーズを乗せる。一般語法なので idiom。

```
Cymbals: Ride.8 Ride.8 Ride.8 Ride.8 Ride.8 Ride.8 Ride.8 Ride.8
HiHat:   r.4 HH.4 r.4 HH.4
Snare:   r.2 r.4 Snare.4
Kick:    Kick.4 r.4 r.8 Kick.8 r.4
```
（4小節目はタムへ：`Toms: HiTom.8 MidTom.8 FloorTom.8 MidTom.8 HiTom.4 r.4`）
