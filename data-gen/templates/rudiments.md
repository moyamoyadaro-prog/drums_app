# ルーディメント素材

ソロの語彙となる基本ルーディメント。スネア中心。組み込むときは小節長（4拍）に合わせて
切り出す。S=右/左の区別は alphaTex では表現しないので Snare に統一（強弱はゴースト=小音価で表現）。

## single-stroke-16 — シングルストローク（16分1拍ぶん）

```
Snare.16 Snare.16 Snare.16 Snare.16
```

## double-stroke-16 — ダブルストローク（同上、2つずつ）

```
Snare.16 Snare.16 Snare.16 Snare.16   // 音符上は単打と同形。運指=RRLL を意図
```

## paradiddle-16 — パラディドル（RLRR LRLL、16分8個=2拍）

```
Snare.16 Snare.16 Snare.16 Snare.16 Snare.16 Snare.16 Snare.16 Snare.16
```

## flam — フラム（装飾音＋本打、近似表現）

```
Snare.32 Snare.8{d}    // 32分の装飾 + 付点8分。1拍内に収める近似
```

## six-stroke-roll — シックスストロークロール（3連ベース、1拍）

```
Snare.8{tu 3} Snare.8{tu 3} Snare.8{tu 3}
```

> メモ: ルーディメントは「運指」を持つが alphaTex の打点表記には現れない。難易度表現は
> 音価（16分→難）と3連・装飾の有無で行い、コメント `//` に意図を残すと後で読みやすい。
