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

## jazz-groove-05 — ハイハットを4ビート全拍で踏む＋脈動するブロークンライド（Tony Williams）
- genre: jazz
- scene: groove
- feel: swing
- tempo: 200-340
- difficulty: 難
- bars: 1
- drummer: Tony Williams
- source: reference:tony-williams-idiom
- fidelity: idiom
- refs: https://en.wikipedia.org/wiki/Tony_Williams_(drummer) https://jazzprofiles.blogspot.com/2018/10/tony-williams-1945-1997-unpredictable.html
- added: 2026-06-18

ハイハットを 2・4 の伝統的役割から解放し**4拍すべてで踏み**、タイムをライドへ寄せて軽い〜混んだ
テクスチャを行き来させる Williams の革新。ライドは脈動的（ストレート8寄り）に前へ押す。特定ソロの写しではない
一般語法なので idiom。ライドは Cymbals に置く。

```
HiHat:   HH.4 HH.4 HH.4 HH.4
Cymbals: Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3} Ride.4 Ride.8{tu 3} Ride.8{tu 3} Ride.8{tu 3}
```

## jazz-groove-06 — フロアタムのスウィング・ジャングルビート（Gene Krupa「Sing, Sing, Sing」）
- genre: jazz
- scene: groove
- feel: shuffle
- tempo: 140-220
- difficulty: 中
- bars: 1
- drummer: Gene Krupa
- source: reference:gene-krupa-singsingsing
- fidelity: paraphrase
- refs: https://www.totaldrummer.com/how-to-play-sing-sing-sing-on-drums/ https://en.wikipedia.org/wiki/Sing,_Sing,_Sing_(with_a_Swing)
- added: 2026-06-18

各拍でフロアタムをスウィング（3連扱い）した単打ロールに、拍頭アクセントとバックビートのスネア、
土台の四つ打ちバスドラを重ねる Krupa の象徴的ジャングルビート（商業録音初の拡張ドラムソロ）。
具体音価は近似なので paraphrase。

```
Toms:  FloorTom{ac}.8{tu 3} r.8{tu 3} FloorTom.8{tu 3} FloorTom{ac}.8{tu 3} r.8{tu 3} FloorTom.8{tu 3} FloorTom{ac}.8{tu 3} r.8{tu 3} FloorTom.8{tu 3} FloorTom{ac}.8{tu 3} r.8{tu 3} FloorTom.8{tu 3}
Snare: r.4 Snare{ac}.4 r.4 Snare{ac}.4
Kick:  Kick.4 Kick.4 Kick.4 Kick.4
```

## jazz-groove-07 — セカンドライン／パレード・マーチの行進ケイデンス（Ed Blackwell）
- genre: jazz
- scene: groove
- feel: straight-16
- tempo: 100-180
- difficulty: 中
- bars: 2
- drummer: Ed Blackwell
- source: reference:ed-blackwell-idiom
- fidelity: idiom
- refs: https://en.wikipedia.org/wiki/Ed_Blackwell https://www.britannica.com/biography/Edward-Joseph-Blackwell
- added: 2026-06-18

ニューオーリンズのセカンドライン／マーチ語法をジャズに持ち込んだ Blackwell の流儀。1・3 にアクセント、
16分のルーディメンタルなスネア・ケイデンス＋バズロール、行進のバスドラ、そしてタムで「歌う」応答。
特定ソロの写しではない一般語法なので idiom。

```
Snare: Snare{ac}.16 Snare.16 Snare.16 Snare.16 Snare.8 r.8 Snare{ac}.16 Snare.16 Snare.16 Snare.16 Snare.8 r.8 | Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} r.2
Toms:  r.1 | r.2 HiTom.8 MidTom.8 FloorTom.8 FloorTom.8
Kick:  Kick.4 r.4 Kick.4 r.4 | Kick.4 r.4 Kick.4 r.4
```

## jazz-solo-theme-03 — 5/4「3＋2」グルーヴと16分クレッシェンドの提示（Joe Morello「Take Five」）
- genre: jazz
- scene: solo-theme
- feel: swing
- tempo: 160-200
- difficulty: 難
- bars: 2
- drummer: Joe Morello
- source: reference:joe-morello-takefive
- fidelity: paraphrase
- refs: https://drummagazine.com/joe-morellos-take-five-drum-part/ https://en.wikipedia.org/wiki/Take_Five
- added: 2026-06-18

**5/4（再利用側で `\ts 5 4` 前提）**。1拍目と4拍目をアクセントして 3＋2 にグルーピングするライド／
クロススティックの土台（1小節目）に、Morello のソロ冒頭を特徴づける**16分のクレッシェンド動機**を
タム着地で展開する（2小節目）。空間とモチーフ展開の語法。具体音は近似なので paraphrase。

```
Cymbals: Ride{ac}.4 Ride.4 Ride.4 Ride{ac}.4 Ride.4 | r.2 r.2 r.4
Snare:   r.4 SideStick.4 r.4 r.4 SideStick.4 | Snare.16{dy ppp} Snare.16{dy ppp} Snare.16{dy pp} Snare.16{dy pp} Snare.16{dy p} Snare.16{dy p} Snare.16{dy mp} Snare.16{dy mp} Snare.16{dy mf} Snare.16{dy mf} Snare.16{dy f} Snare.16{dy f} Snare{ac}.8{dy ff} r.8 r.4
HiHat:   r.4 HH.4 r.4 HH.4 r.4 | r.4 HH.4 r.4 HH.4 r.4
Toms:    r.2 r.2 r.4 | r.2 r.4 HiTom{ac}.8 r.8 FloorTom{ac}.4
```

## jazz-solo-theme-04 — キット全体に時間と旋律を散らす多方向プレイ（Jack DeJohnette）
- genre: jazz
- scene: solo-theme
- feel: swing
- tempo: 160-260
- difficulty: 難
- bars: 2
- drummer: Jack DeJohnette
- source: reference:jack-dejohnette-idiom
- fidelity: idiom
- refs: https://www.jazztimes.com/features/tributes-and-obituaries/jack-dejohnette-jazz-drummings-surround-sound-of-thunder-dies-at-83/ https://pas.org/jack-dejohnette/
- added: 2026-06-18

タイムをライド一点に集めず**キット全体へ配分**し、連続する8分の旋律をスネア⇄タムへ移し替えて
「歌う」DeJohnette の多方向語法（ピアノ的アプローチ）。ライド／ハイハットは時間を刻まず色付けに回る。
特定ソロの写しではない一般語法なので idiom。スネアとタムの合成で連続旋律になる。

```
Snare: Snare.8 r.8 Snare.8 r.8 r.8 r.8 r.8 Snare.8 | r.8 Snare.8 r.8 Snare.8 r.8 r.8 Snare.8 r.8
Toms:  r.8 HiTom.8 r.8 MidTom.8 FloorTom.8 MidTom.8 HiTom.8 r.8 | HiTom.8 r.8 MidTom.8 r.8 FloorTom.8 MidTom.8 r.8 FloorTom.8
Cymbals: r.4 r.8 Ride.8 r.2 | Crash.4 r.4 r.8 Ride.8 r.4
Kick:  r.4 r.8 Kick.8 r.4 r.8 Kick.8 | Kick.4 r.4 r.8 Kick.8 r.4
HiHat: r.2 OpenHH.4 r.4 | r.2 OpenHH.4 r.4
```

## jazz-fill-02 — バンドを蹴り出す爆発的ブレイク（Chick Webb）
- genre: jazz
- scene: build
- feel: swing
- tempo: 180-280
- difficulty: 難
- bars: 2
- drummer: Chick Webb
- source: reference:chick-webb-idiom
- fidelity: idiom
- refs: https://www.moderndrummer.com/2009/12/chick-webb/ https://swingandbeyond.com/2025/02/16/stomping-at-the-savoy-1934-chick-webb-edgar-sampson-and-benny-goodman-edgar-sampson-1936/
- added: 2026-06-18

スウィングの土台から、choppy（上下に切る）な同期アクセントをスネア⇄タムへ散らしバスドラの爆弾で締め、
バンドを蹴り出す Webb の攻撃的ブレイク。最初期の真のドラム・アイドルの煽り語法。一般語法なので idiom。

```
Snare: Snare{ac}.8 r.8 Snare{ac}.8 Snare.8 Snare{ac}.4 r.4 | Snare{ac}.8 Snare.8 Snare{ac}.8 r.8 Snare{ac}.4 r.4
Toms:  r.2 HiTom{ac}.8 r.8 FloorTom{ac}.4 | HiTom{ac}.8 r.8 FloorTom{ac}.8 r.8 r.2
Kick:  Kick.4 r.4 r.4 Kick.4 | r.2 Kick.4 Kick.4
Cymbals: r.1 | r.2 r.4 Crash.4
```

## jazz-solo-theme-05 — 主題提示→ロール急増→間→タム織り→弱奏で解決（Big Sid Catlett）
- genre: jazz
- scene: solo-theme
- feel: swing
- tempo: 160-240
- difficulty: 難
- bars: 4
- drummer: Sid Catlett
- source: reference:sid-catlett-idiom
- fidelity: idiom
- refs: https://www.moderndrummer.com/2010/03/sidney-big-sid-catlett/ https://en.wikipedia.org/wiki/Sid_Catlett
- added: 2026-06-18

主題を立て、うねるスネアロールが急増してリムショットで弾け、劇的な「間」、タムを織って進み、
ピアニッシモ／ハーフタイムの低音で解決する Catlett の作曲的ソロ。バスドラの爆弾も交える。
スウィングとバップの橋渡し。一般語法なので idiom。

```
Snare: Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare{ac}.8 Snare{ac}.8 r.4 | r.1 | r.1 | r.1
Toms:  r.1 | r.1 | HiTom.8 MidTom.8 FloorTom.8 MidTom.8 HiTom.8 FloorTom.8 r.4 | r.2 HiTom.8 MidTom.8 FloorTom.4
Kick:  r.2 Kick.4 r.4 | r.2 Kick.4 r.4 | r.1 | Kick.4 r.4 Kick.4 r.4
HiHat: r.4 HH.4 r.4 HH.4 | r.4 HH.4 r.4 HH.4 | r.4 HH.4 r.4 HH.4 | r.4 HH.4 r.4 HH.4
```

## jazz-solo-theme-06 — マレット風タムの異国色とゴング的クラッシュ（Sonny Greer）
- genre: jazz
- scene: solo-theme
- feel: latin
- tempo: 120-180
- difficulty: 中
- bars: 4
- drummer: Sonny Greer
- source: reference:sonny-greer-idiom
- fidelity: idiom
- refs: https://www.moderndrummer.com/2010/01/sonny-greer/ https://en.wikipedia.org/wiki/Sonny_Greer
- added: 2026-06-18

タイムを刻むより「色（colour）」を描く Greer。マレット風のタム旋律で異国情緒（Caravan 的ラテン）を作り、
ゴング／クラッシュで層を重ねる Ellington 楽団のカラリスト語法。ラテンのバスドラ・オスティナート上に乗せる。
一般語法なので idiom。

```
Toms:  FloorTom.4 r.4 HiTom.8 MidTom.8 FloorTom.4 | MidTom.4 r.4 FloorTom.8 MidTom.8 HiTom.4 | FloorTom.4 r.4 HiTom.8 MidTom.8 FloorTom.4 | HiTom.8 MidTom.8 FloorTom.8 MidTom.8 HiTom.4 r.4
Cymbals: Crash.4 r.2 r.4 | r.1 | Crash.4 r.2 r.4 | r.2 r.4 Crash.4
Kick:  Kick.4 r.8 Kick.8 r.4 Kick.4 | Kick.4 r.8 Kick.8 r.4 Kick.4 | Kick.4 r.8 Kick.8 r.4 Kick.4 | Kick.4 r.8 Kick.8 r.4 Kick.4
HiHat: r.4 HH.4 r.4 HH.4 | r.4 HH.4 r.4 HH.4 | r.4 HH.4 r.4 HH.4 | r.4 HH.4 r.4 HH.4
```

## jazz-solo-theme-07 — 8分タム・オスティナート→鋭いスネア三連図形（Cozy Cole「Topsy」）
- genre: jazz
- scene: solo-theme
- feel: swing
- tempo: 140-200
- difficulty: 中
- bars: 4
- drummer: Cozy Cole
- source: reference:cozy-cole-topsy
- fidelity: paraphrase
- refs: https://en.wikipedia.org/wiki/Cozy_Cole https://www.moderndrummer.com/2009/12/william-cozy-cole/
- added: 2026-06-18

単一タムの8分オスティナートで開始し、アクセントでタム周りを開いていき、やがて鋭いスネア三連図形へ
（Krupa 譲り）爆発する「Topsy」のソロ構造。協調的独立（coordinated independence）の名手。
具体音は近似なので paraphrase。

```
Toms:  FloorTom{ac}.8 FloorTom.8 FloorTom.8 FloorTom.8 FloorTom{ac}.8 FloorTom.8 FloorTom.8 FloorTom.8 | FloorTom{ac}.8 FloorTom.8 MidTom.8 FloorTom.8 HiTom{ac}.8 FloorTom.8 MidTom.8 FloorTom.8 | r.1 | r.2 HiTom{ac}.4 FloorTom{ac}.4
Snare: r.1 | r.1 | Snare{ac}.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare{ac}.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare{ac}.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare{ac}.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} | Snare{ac}.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} Snare{ac}.8{tu 3} Snare.8{tu 3} Snare.8{tu 3} r.2
Kick:  Kick.4 r.4 Kick.4 r.4 | Kick.4 r.4 Kick.4 r.4 | Kick.4 r.4 Kick.4 r.4 | Kick.4 r.4 Kick.4 r.4
HiHat: r.4 HH.4 r.4 HH.4 | r.4 HH.4 r.4 HH.4 | r.4 HH.4 r.4 HH.4 | r.4 HH.4 r.4 HH.4
```

## jazz-climax-02 — 連続バスドラ上のハンド・ロール（Louie Bellson「Skin Deep」ダブルバス）
- genre: jazz
- scene: climax
- feel: swing
- tempo: 160-240
- difficulty: 難
- bars: 4
- drummer: Louie Bellson
- source: reference:louie-bellson-skindeep
- fidelity: paraphrase
- refs: https://www.jazztimes.com/news/louie-bellson-rim-shots-double-bass-drums/ https://en.wikipedia.org/wiki/Louie_Bellson
- added: 2026-06-18

ダブルバスドラム（本アプリは単一 Kick のため**連続16分のバスドラ**で近似）を途切れず流し、その上で
スネア／タムのアクセントとロールを重ねてクライマックスへ煽る Bellson「Skin Deep」の語法。
ダブルバス開拓者。具体音は近似なので paraphrase。

```
Kick:  Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 | Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 | Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 | Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16 Kick.16
Snare: Snare{ac}.4 r.4 Snare{ac}.4 r.4 | Snare.8 Snare.8 Snare.8 Snare.8 Snare.8 Snare.8 Snare.8 Snare.8 | r.1 | Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare{ac}.4 r.4
Toms:  r.1 | r.1 | HiTom.8 HiTom.8 MidTom.8 MidTom.8 FloorTom.8 FloorTom.8 r.4 | r.1
Cymbals: r.1 | r.1 | r.1 | r.2 r.4 Crash.4
```

## jazz-groove-08 — 弾むアップビート強調ライド＋教会的バックビート（Billy Higgins）
- genre: jazz
- scene: groove
- feel: swing
- tempo: 160-280
- difficulty: 中
- bars: 1
- drummer: Billy Higgins
- source: reference:billy-higgins-idiom
- fidelity: idiom
- refs: https://www.paiste.com/en/musicians/billy-higgins https://cruiseshipdrummer.com/2011/09/30/billy-higgins-instrument/
- added: 2026-06-18

誰にも真似できない「弾む（tipping/dancing）」ワイドなライド・ビートで、スキップ（拍裏）を軽く強調し
前へ転がす Higgins の語法。リベット付きライドのサスティンが土台にクッションを作り、2・4 に教会的な
クロススティックのバックビートを添える。一般語法なので idiom。

```
Cymbals: Ride.4 Ride.8{tu 3} r.8{tu 3} Ride{ac}.8{tu 3} Ride.4 Ride.8{tu 3} r.8{tu 3} Ride{ac}.8{tu 3}
HiHat:   r.4 HH.4 r.4 HH.4
Snare:   r.4 SideStick{g}.4 r.4 SideStick.4
```

## jazz-groove-09 — 全拍バスドラ＋一定強度の推進ライド（Art Taylor）
- genre: jazz
- scene: groove
- feel: swing
- tempo: 180-300
- difficulty: 中
- bars: 1
- drummer: Art Taylor
- source: reference:art-taylor-idiom
- fidelity: idiom
- refs: https://en.wikipedia.org/wiki/Art_Taylor http://www.drummerworld.com/drummers/Art_Taylor.html
- added: 2026-06-18

「鍋が沸くように」一定の強度で押す straight-ahead な Taylor。本人が説いた**バスドラを全拍で踏む**土台に
推進力あるライドとリムショット・アクセントを乗せる（Blakey/Roach 影響）。一般語法なので idiom。

```
Kick:    Kick.4 Kick.4 Kick.4 Kick.4
Cymbals: Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3} Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3}
HiHat:   r.4 HH.4 r.4 HH.4
Snare:   r.4 Snare{ac}.8 r.8 r.4 Snare{ac}.4
```

## jazz-groove-10 — 澄んで雑音のない控えめコンピング（Ben Riley）
- genre: jazz
- scene: groove
- feel: swing
- tempo: 140-260
- difficulty: 中
- bars: 2
- drummer: Ben Riley
- source: reference:ben-riley-idiom
- fidelity: idiom
- refs: https://www.allaboutjazz.com/ben-riley-with-thelonious-monk-ben-riley-by-david-a-orthmann https://www.moderndrummer.com/2017/11/ben-riley-making-history/
- added: 2026-06-18

リズムにリズムを重ねず、叩きすぎず、クラッシュを伸ばさない——澄んだライドと最小限のゴーストだけで
「目立たない創意」を作る Monk の名コンパー Riley。空白（休符）が語法の核。一般語法なので idiom。

```
Cymbals: Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3} Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3} | Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3} Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3}
HiHat:   r.4 HH.4 r.4 HH.4 | r.4 HH.4 r.4 HH.4
Snare:   r.1 | r.2 Snare{g}.8 r.8 r.4
```

## jazz-groove-11 — タイムを割る変化ライド＋不意のボム（Mel Lewis）
- genre: jazz
- scene: groove
- feel: swing
- tempo: 140-240
- difficulty: 中
- bars: 2
- drummer: Mel Lewis
- source: reference:mel-lewis-idiom
- fidelity: idiom
- refs: https://pas.org/mel-lewis/ https://cruiseshipdrummer.com/2013/05/22/mel-lewis-on-cymbals/
- added: 2026-06-18

ビッグバンドを小編成のように扱い、ハイハットよりライドで**タイムを割って**変化させ、不意の「ボム」を
落とす Mel Lewis の緩く swing する支え方。押しも引きもせず「支える」。一般語法なので idiom。

```
Cymbals: Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3} Ride.4 r.8{tu 3} Ride.8{tu 3} r.8{tu 3} | Ride.4 r.8{tu 3} Ride.8{tu 3} Ride.8{tu 3} Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3}
HiHat:   r.4 HH.4 r.4 HH.4 | r.4 HH.4 r.4 HH.4
Kick:    r.4 r.4 r.8 Kick.8 r.4 | r.2 r.8 Kick.8 r.4
```

## jazz-groove-12 — オルガントリオのソウルジャズ・グルーヴ（Grady Tate）
- genre: jazz
- scene: groove
- feel: shuffle
- tempo: 100-180
- difficulty: 中
- bars: 1
- drummer: Grady Tate
- source: reference:grady-tate-idiom
- fidelity: idiom
- refs: https://en.wikipedia.org/wiki/Grady_Tate https://jazztimes.com/features/tributes-and-obituaries/drummer-singer-grady-tate-dies/
- added: 2026-06-18

オントップで歯切れよく、スウィングする4分ライドにリムショットの細かなシンコペーションを添える Grady Tate の
ソウルジャズ／オルガントリオ語法。誇示せず groove を最優先、ダイナミクスは抑制。一般語法なので idiom。

```
Cymbals: Ride.4 Ride.4 Ride.4 Ride.4
HiHat:   r.4 HH.4 r.4 HH.4
Snare:   r.4 Snare{ac}.4 r.4 Snare{ac}.4
Kick:    Kick.4 r.4 r.8 Kick.8 r.4
```

## jazz-build-04 — 拍を溶かす連続シンバル・ウォッシュと不規則スネア（Sunny Murray）
- genre: jazz
- scene: build
- feel: swing
- tempo: 120-260
- difficulty: 難
- bars: 2
- drummer: Sunny Murray
- source: reference:sunny-murray-idiom
- fidelity: idiom
- refs: https://en.wikipedia.org/wiki/Sunny_Murray https://www.allaboutjazz.com/musicians/sunny-murray/
- added: 2026-06-18

定常拍を捨て、シンバルの縁で鳴り続ける連続スティックワーク、不規則なスネアの連射、散発的なバスドラ
句読点で「降り止まぬ霰」を作る Murray のパンリズム。ソリストを時間から解放する。一般語法なので idiom。
規則的バックビートは置かない。

```
Cymbals: Ride{ac}.8 Ride.8 Ride.8 Ride{ac}.8 Ride.8 Ride.8 Ride{ac}.8 Ride.8 | Ride.8 Ride{ac}.8 Ride.8 Ride.8 Ride{ac}.8 Ride.8 Ride.8 Ride{ac}.8
Snare:   r.4 Snare.16 Snare.16 Snare.16 Snare.16 r.4 r.4 | r.2 r.4 Snare.16 Snare.16 Snare.16 Snare.16
Kick:    r.2 Kick.4 r.4 | r.2 r.4 Kick.4
```

## jazz-build-05 — 定常拍なしの多方向リズムの奔流（Rashied Ali）
- genre: jazz
- scene: build
- feel: swing
- tempo: 160-300
- difficulty: 難
- bars: 2
- drummer: Rashied Ali
- source: reference:rashied-ali-idiom
- fidelity: idiom
- refs: https://en.wikipedia.org/wiki/Rashied_Ali https://en.wikipedia.org/wiki/Interstellar_Space
- added: 2026-06-18

人間メトロノームの役割を捨て、連続する三連の奔流をスネア⇄タムへ多方向に散らし、シンバルとバスドラを
自由に句読点として落とす Ali の語法（Coltrane が "multi-directional rhythms" と呼んだ）。一般語法なので idiom。

```
Snare: Snare.8{tu 3} r.8{tu 3} Snare.8{tu 3} r.8{tu 3} Snare.8{tu 3} r.8{tu 3} Snare.8{tu 3} r.8{tu 3} Snare.8{tu 3} r.8{tu 3} Snare.8{tu 3} r.8{tu 3} | Snare.8{tu 3} r.8{tu 3} Snare.8{tu 3} r.8{tu 3} Snare.8{tu 3} r.8{tu 3} Snare.8{tu 3} r.8{tu 3} Snare.8{tu 3} r.8{tu 3} Snare.8{tu 3} r.8{tu 3}
Toms:  r.8{tu 3} HiTom.8{tu 3} r.8{tu 3} FloorTom.8{tu 3} r.8{tu 3} MidTom.8{tu 3} r.8{tu 3} HiTom.8{tu 3} r.8{tu 3} FloorTom.8{tu 3} r.8{tu 3} MidTom.8{tu 3} | r.8{tu 3} MidTom.8{tu 3} r.8{tu 3} HiTom.8{tu 3} r.8{tu 3} FloorTom.8{tu 3} r.8{tu 3} MidTom.8{tu 3} r.8{tu 3} HiTom.8{tu 3} r.8{tu 3} FloorTom.8{tu 3}
Cymbals: Crash.4 r.2 Ride.4 | r.4 Ride.4 r.4 Ride.4
Kick:  r.4 Kick.4 r.4 Kick.4 | Kick.4 r.2 r.4
```

## jazz-build-06 — 3対4のポリリズム（タム3：スネア4）（Andrew Cyrille）
- genre: jazz
- scene: build
- feel: swing
- tempo: 140-260
- difficulty: 難
- bars: 2
- drummer: Andrew Cyrille
- source: reference:andrew-cyrille-idiom
- fidelity: idiom
- refs: https://en.wikipedia.org/wiki/Andrew_Cyrille https://www.moderndrummer.com/article/february-2014-andrew-cyrille/
- added: 2026-06-18

慣習的なタイムキープを離れ、緻密なポリリズムと旋律的タムで音の絵を描く Cyrille（Cecil Taylor 期）。
三連グリッド上でタムを4音ごとにアクセント（=1小節に3つ）し、スネアのゴースト4分（=4）に重ねて
3対4を浮かべる。一般語法なので idiom。

```
Toms:  HiTom{ac}.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} MidTom{ac}.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} FloorTom{ac}.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} | HiTom{ac}.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} MidTom{ac}.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} FloorTom{ac}.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3}
Snare: Snare{g}.4 Snare{g}.4 Snare{g}.4 Snare{g}.4 | Snare{g}.4 Snare{g}.4 Snare{g}.4 Snare{g}.4
```

## jazz-solo-theme-08 — 浮遊するルバート的ブロークン・ライド（Paul Motian）
- genre: jazz
- scene: solo-theme
- feel: swing
- tempo: 100-200
- difficulty: 難
- bars: 4
- drummer: Paul Motian
- source: reference:paul-motian-idiom
- fidelity: idiom
- refs: https://en.wikipedia.org/wiki/Paul_Motian https://cruiseshipdrummer.com/2018/01/20/key-players-paul-motian/
- added: 2026-06-18

定常拍を刻まず、ブロークンなライド（シズル）と変位したシンコペーションのアクセントが「それ自体が拍」に
なる、円のように浮かぶ Motian の時間。タムは色として散発的に。隙間（休符）が多い。一般語法なので idiom。

```
Cymbals: Ride.4 r.8 Ride.8 r.4 Ride.4 | r.4 Ride.8 r.8 Ride.4 r.4 | Ride.8 r.8 r.4 Ride.4 r.4 | r.4 Ride.4 r.8 Ride.8 r.4
Snare:   r.4 r.8 Snare{g}.8 r.2 | r.2 Snare{g}.8 r.8 r.4 | Snare{g}.8 r.8 r.2 r.4 | r.2 r.4 Snare{g}.8 r.8
Toms:    r.1 | r.2 r.4 HiTom.4 | r.1 | FloorTom.4 r.2 r.4
```

## jazz-solo-theme-09 — 行進・サーカス由来のルーディメンタル爆発スネア（Han Bennink）
- genre: jazz
- scene: solo-theme
- feel: straight-16
- tempo: 100-200
- difficulty: 難
- bars: 4
- drummer: Han Bennink
- source: reference:han-bennink-idiom
- fidelity: idiom
- refs: https://en.wikipedia.org/wiki/Han_Bennink https://www.moderndrummer.com/2008/03/han-bennink/
- added: 2026-06-18

しばしばスネア1台で現れ、行進・サーカス音楽由来のルーディメンタル（パレード）語法を爆発的に繰り出す
Bennink。16分の行進図形、フルバーのバズロール、アクセント連打を交え、マーチのバスドラを下敷きにする。
一般語法なので idiom。

```
Snare: Snare{ac}.16 Snare.16 Snare.16 Snare.16 Snare{ac}.8 r.8 Snare{ac}.16 Snare.16 Snare.16 Snare.16 Snare{ac}.8 r.8 | Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} | Snare{ac}.8 Snare.8 Snare{ac}.8 Snare.8 Snare{ac}.8 Snare.8 Snare{ac}.8 Snare.8 | Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare.16{tu 3} Snare{ac}.4 r.4
Kick:  Kick.4 r.4 Kick.4 r.4 | Kick.4 r.4 Kick.4 r.4 | Kick.4 r.4 Kick.4 r.4 | Kick.4 r.4 Kick.4 r.4
```

## jazz-build-07 — パワー・スウィング＋3対4のバスと変位スネア（Jeff "Tain" Watts）
- genre: jazz
- scene: build
- feel: swing
- tempo: 180-300
- difficulty: 難
- bars: 4
- drummer: Jeff Watts
- source: reference:jeff-tain-watts-idiom
- fidelity: idiom
- refs: https://www.jazztimes.com/features/profiles/jeff-tain-watts-how-he-revolutionized-jazz-drumming/ https://drummagazine.com/jeff-watts-soul-of-a-drummer-mind-of-a-composer/
- added: 2026-06-18

スウィング・ライド（4）の上にバスドラを三連グリッドで4音ごと（=1小節に3つ）置いて 3対4 を作り、
スネアのバックビートを小節ごとに変位させる Watts のポリリズム／メトリック・モジュレーション語法。
ドラムが独自の声で答える。一般語法なので idiom。

```
Cymbals: Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3} Ride.4 Ride.8{tu 3} r.8{tu 3} Ride.8{tu 3}
HiHat:   r.4 HH.4 r.4 HH.4
Kick:    Kick.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} Kick.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3} Kick.8{tu 3} r.8{tu 3} r.8{tu 3} r.8{tu 3}
Snare:   r.4 Snare{ac}.4 r.4 Snare{ac}.4
```
