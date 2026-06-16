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

## jazz-groove-01 — ライド時間＋ドロッピング・ボム（Klook の基礎革新）
- genre: jazz
- scene: groove
- feel: swing
- tempo: 160-260
- difficulty: 中
- bars: 1
- drummer: Kenny Clarke
- source: reference:kenny-clarke-idiom
- fidelity: idiom
- refs: https://www.npr.org/2014/01/09/261051016/kenny-clarke-inventor-of-modern-jazz-drumming-at-100 https://en.wikipedia.org/wiki/Kenny_Clarke
- added: 2026-06-16

タイムをライドへ移し（ching-chinga-ching）、ハイハットを 2・4 で踏みつつ、バスドラとスネアで
不意の「爆弾（dropping bombs）」を落とす Clarke の基礎語法。特定ソロの写しではない一般手癖なので idiom。
ライドはトラック分割の都合で Cymbals に置く。

```
Cymbals: Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3} Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3}
HiHat:   r.4 HH.4 r.4 HH.4
Snare:   r.4 r.8 Snare.8 r.4 r.4
Kick:    r.4 r.4 Kick.8 r.8 Kick.4
```

## jazz-build-01 — クレッシェンド・プレスロール（Blakey の代名詞）
- genre: jazz
- scene: build
- feel: swing
- tempo: 160-260
- difficulty: 中
- bars: 2
- drummer: Art Blakey
- source: reference:art-blakey-pressroll
- fidelity: paraphrase
- refs: https://www.moderndrummer.com/2009/12/art-blakey/ https://scottkfish.com/2016/04/24/art-blakeys-press-roll-its-the-way-i-feel/
- added: 2026-06-16

静かな震えから始まり爆発へ育つ Blakey のプレスロールを、8分3連ロール→16分3連ロールの密度増加で近似。
2・4ハイハットは途切れず鳴らし続ける（彼の常套）。ロールの粒は近似なので paraphrase。

```
Snare: Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} | Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3}
HiHat: r.4 HH.4 r.4 HH.4 | r.4 HH.4 r.4 HH.4
```

## jazz-trade4-03 — 2・4ハイハット上を移動する三連アクセント（Blakey のソロ）
- genre: jazz
- scene: trade-4
- feel: swing
- tempo: 180-260
- difficulty: 中
- bars: 1
- drummer: Art Blakey
- source: reference:art-blakey-pressroll
- fidelity: idiom
- refs: https://www.drumeo.com/beat/art-blakey-drum-grooves/
- added: 2026-06-16

スネアの三連を敷き、アクセント位置を拍ごとにずらして（休符で粒を抜いて）動かす Blakey のソロ語法。
土台の 2・4ハイハットは不変。具体アクセントは一般化なので idiom。

```
Snare: Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} r.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} r.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} r.8{tu 3}
HiHat: r.4 HH.4 r.4 HH.4
```

## jazz-groove-02 — スナップ＆クラックル（ブロークンタイム）（Haynes）
- genre: jazz
- scene: groove
- feel: swing
- tempo: 180-280
- difficulty: 難
- bars: 1
- drummer: Roy Haynes
- source: reference:roy-haynes-idiom
- fidelity: idiom
- refs: https://www.moderndrummer.com/2009/12/roy-haynes-2/ https://www.jazzdergisi.com/en/roy-haynes-snap-crackle-lakaptan-tiniya/
- added: 2026-06-16

ライドの時間を割って（ブロークンタイム）、ゴーストの「クラックル」とリム/スネアの「スナップ」、
不意のバスドラ punctuation を散らす Haynes の手癖。スナップはサイドスティック(37)で近似。
特定ソロの写しではないので idiom。

```
Cymbals:   Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3} r.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3}
HiHat:     r.4 HH.4 r.4 HH.4
Snare:     r.8 Snare.8 r.8 Snare.8 SideStick.4 r.4
Kick:      r.4 r.4 r.4 Kick.4
```

## jazz-fill-01 — 3拍三連フレーズ（ヘミオラ）（Philly Joe の十八番）
- genre: jazz
- scene: fill
- feel: swing
- tempo: 180-260
- difficulty: 難
- bars: 2
- drummer: Philly Joe Jones
- source: reference:philly-joe-three-beat-triplet
- fidelity: paraphrase
- refs: https://www.learnjazzstandards.com/blog/learning-jazz/drums/awesome-philly-jo-jones-lick-solo-analysis/ http://thatdrumblog.blogspot.com/2022/11/philly-joe-jones-three-beat-triplet.html
- added: 2026-06-16

連続8分3連を流し、9音ごと（=3拍ごと）の頭にアクセントを置くことで 4/4 上に 3拍周期のヘミオラを作る
Philly Joe の名物句。アクセントをハイタムへ振って可聴化。スティッキング由来の細部は近似なので paraphrase。

```
Snare: r.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} r.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} | Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} r.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3}
Toms:  HiTom.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} HiTom.8{tu 3} r.8{tu 3} r.8{tu 3} | r.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} HiTom.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3}
```

## jazz-turnaround-01 — 4拍目クロススティック（Philly lick）
- genre: jazz
- scene: turnaround
- feel: swing
- tempo: 160-260
- difficulty: 易
- bars: 1
- drummer: Philly Joe Jones
- source: reference:philly-joe-cross-stick
- fidelity: paraphrase
- refs: https://www.learnjazzstandards.com/blog/learning-jazz/drums/awesome-philly-jo-jones-lick-solo-analysis/
- added: 2026-06-16

各小節 4拍目にクロススティック(サイドスティック 37)のアクセントを置く Philly Joe の常套。
ライド＋2・4ハイハットの土台に乗せる。位置は明確だが音色細部は近似なので paraphrase。

```
Cymbals: Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3} Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3}
HiHat:   r.4 HH.4 r.4 HH.4
Snare:   r.4 r.4 r.4 SideStick.4
```

## jazz-climax-01 — 超高速シングルストロークロールのクレッシェンド（Buddy Rich）
- genre: jazz
- scene: climax
- feel: swing
- tempo: 200-320
- difficulty: 難
- bars: 2
- drummer: Buddy Rich
- source: reference:buddy-rich-idiom
- fidelity: idiom
- refs: https://www.drumeo.com/beat/5-impossible-buddy-rich-licks/ https://jazzlives.substack.com/p/buddy-richs-legacy-how-the-worlds
- added: 2026-06-16

均一で滑らかな超高速シングルストロークロールを 16分3連の連打で近似し、クライマックスへ煽る Buddy Rich の象徴。
特定ソロの写しではない技巧一般なので idiom。

```
Snare: Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} | Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3}
```

## jazz-groove-03 — ハイハット・リード4ビート（開閉）（Papa Jo）
- genre: jazz
- scene: groove
- feel: swing
- tempo: 140-240
- difficulty: 中
- bars: 1
- drummer: Jo Jones
- source: reference:papa-jo-idiom
- fidelity: idiom
- refs: https://www.moderndrummer.com/2009/12/papa-jo-jones/ https://en.wikipedia.org/wiki/Jo_Jones
- added: 2026-06-16

タイムをバスドラからハイハットへ移し、開閉を繰り返して長く開いた音で 4ビートを流す Papa Jo の革新。
裏拍をオープンにして軽く swing させる。一般語法なので idiom。

```
HiHat:   HH.8 OpenHH.8 HH.8 OpenHH.8 HH.8 OpenHH.8 HH.8 OpenHH.8
Snare:   r.1
```

## jazz-solo-theme-01 — 旋律的タムのテーマと変奏（Shelly Manne）
- genre: jazz
- scene: solo-theme
- feel: swing
- tempo: 140-220
- difficulty: 中
- bars: 2
- drummer: Shelly Manne
- source: reference:shelly-manne-idiom
- fidelity: idiom
- refs: https://pas.org/shelly-manne/ https://jazzprofiles.blogspot.com/2020/08/shelly-manne-anything-but-un-poco-loco.html
- added: 2026-06-16

タムを「歌う」旋律楽器として扱い、テーマを提示して次小節で変奏する Manne の West Coast 的語法。
技巧誇示より旋律連続性を優先。一般語法なので idiom。

```
Toms:  HiTom.4 MidTom.8 MidTom.8 FloorTom.4 HiTom.4 | HiTom.8 HiTom.8 MidTom.4 FloorTom.8 MidTom.8 HiTom.4
HiHat: r.4 HH.4 r.4 HH.4 | r.4 HH.4 r.4 HH.4
```

## jazz-build-02 — キット周回の三連うねり＋4対3（Elvin Jones）
- genre: jazz
- scene: build
- feel: swing
- tempo: 160-260
- difficulty: 難
- bars: 2
- drummer: Elvin Jones
- source: reference:elvin-jones-idiom
- fidelity: idiom
- refs: https://www.learnjazzstandards.com/blog/learning-jazz/drums/trading-fours-like-elvin-jones-style-and-analysis/ https://drummagazine.com/inside-the-drumming-of-elvin-jones/
- added: 2026-06-16

連続8分3連をスネア→ハイ/ミッド/フロアタムへ4音セルで周回させ、3連グリッド上に 4対3 のポリリズムを浮かべる
Elvin のうねり。1つの連続したキット・サウンドで時間を押す。一般語法なので idiom。

```
Snare: Snare.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} Snare.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} Snare.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} | Snare.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} Snare.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} Snare.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3}
Toms:  r.8{tu 3} HiTom.8{tu 3} MidTom.8{tu 3} FloorTom.8{tu 3} r.8{tu 3} HiTom.8{tu 3} MidTom.8{tu 3} FloorTom.8{tu 3} r.8{tu 3} HiTom.8{tu 3} MidTom.8{tu 3} FloorTom.8{tu 3} | r.8{tu 3} HiTom.8{tu 3} MidTom.8{tu 3} FloorTom.8{tu 3} r.8{tu 3} HiTom.8{tu 3} MidTom.8{tu 3} FloorTom.8{tu 3} r.8{tu 3} HiTom.8{tu 3} MidTom.8{tu 3} FloorTom.8{tu 3}
```

## jazz-groove-04 — 羽毛のように軽いライド＋構造アクセント（Jimmy Cobb）
- genre: jazz
- scene: groove
- feel: swing
- tempo: 120-220
- difficulty: 易
- bars: 2
- drummer: Jimmy Cobb
- source: reference:jimmy-cobb-idiom
- fidelity: idiom
- refs: https://pas.org/jimmy-cobb-2/ https://www.jazztimes.com/features/tributes-and-obituaries/jimmy-cobb-1929-2020/
- added: 2026-06-16

揺るがない軽いライドで時間を流し、スネア/バスドラは構造の要所のみに控えめに置く Cobb の流儀。
自己主張より安定。一般語法なので idiom。

```
Cymbals: Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3} Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3} | Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3} Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3}
HiHat:   r.4 HH.4 r.4 HH.4 | r.4 HH.4 r.4 HH.4
Kick:    r.1 | r.4 r.4 r.4 Kick.4
```

## jazz-solo-theme-02 — スネア⇄タムのコール&レスポンス（Roach のテーマ提示）
- genre: jazz
- scene: solo-theme
- feel: swing
- tempo: 180-280
- difficulty: 中
- bars: 2
- drummer: Max Roach
- source: reference:max-roach-trading
- fidelity: paraphrase
- refs: http://haredrums.blogspot.com/2011/09/max-roach-melodic-architecture-and.html https://www.learnjazzstandards.com/blog/learning-jazz/drums/learning-solo-style-max-roach/
- added: 2026-06-16

スネアでモチーフを「問い」、タムが「答え」る Roach の旋律的なコール&レスポンス。2小節目で答えを下降に変奏。
作曲的なテーマ展開を短く取り込む。具体音は近似なので paraphrase。

```
Snare: Snare.8 Snare.8 Snare.4 r.4 r.4 | Snare.8 r.8 Snare.8 Snare.8 r.4 r.4
Toms:  r.4 r.4 HiTom.8 MidTom.8 FloorTom.4 | r.4 r.4 HiTom.8 HiTom.8 FloorTom.8 FloorTom.8
```
