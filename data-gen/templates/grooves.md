# グルーヴ素材（1小節 / 4/4）

多トラック構成（CONVENTIONS.md §3）の **1小節分** を部位別に示す。`/gen-solo` はここから選んで
小節を組み立てる。各パターンは全トラック合計が 4拍（3840 ticks）。鳴らないトラックは `r` で埋める。

各ブロックは「トラック名: その小節の内容」。Toms/Cymbals が無音の小節も `r.1`（全休符）で長さを合わせる。

## basic-8beat — 8ビート基本

```
Kick:    Kick.4 r.4 Kick.4 r.4 |
Snare:   r.4 Snare.4 r.4 Snare.4 |
HiHat:   HH.8 HH.8 HH.8 HH.8 HH.8 HH.8 HH.8 HH.8 |
Toms:    r.1 |
Cymbals: r.1 |
```

## funk-16-ghost — 16分ゴースト入りファンク

```
Kick:    Kick.8 r.8 r.8 Kick.16 Kick.16 r.4 Kick.8 r.8 |
Snare:   r.4 Snare.4 r.8 Snare.16 Snare.16 Snare.4 |
HiHat:   HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 HH.16 |
Toms:    r.1 |
Cymbals: r.1 |
```

## ride-groove — ライド主体

```
Kick:    Kick.4 r.4 Kick.8 Kick.8 r.4 |
Snare:   r.4 Snare.4 r.4 Snare.4 |
HiHat:   r.1 |
Toms:    r.1 |
Cymbals: Ride.8 Ride.8 Ride.8 Ride.8 Ride.8 Ride.8 Ride.8 Ride.8 |
```

## half-time-shuffle — ハーフタイムシャッフル（3連基調）

```
Kick:    Kick.4 r.4 r.8 Kick.8 r.4 |
Snare:   r.4 Snare.4 r.4 Snare.4 |
HiHat:   HH.8{tu 3} HH.8{tu 3} HH.8{tu 3} HH.8{tu 3} HH.8{tu 3} HH.8{tu 3} HH.8{tu 3} HH.8{tu 3} HH.8{tu 3} HH.8{tu 3} HH.8{tu 3} HH.8{tu 3} |
Toms:    r.1 |
Cymbals: r.1 |
```

> 注: `.8{tu 3}` は8分3連（tuplet）。1拍に3つで合計4拍ぶん（12個）。
