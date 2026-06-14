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

## 6. 不変則（検証が機械チェックする）

1. **小節長**：各小節の音価合計が拍子（既定 4/4 = 全音符相当）に一致すること。過不足は小節番号付きで ERROR。
2. **トラック整列**：1ファイル内の全トラックは**同じ小節数**であること。
3. **manifest 整合**：`manifest.json` の各 `file` が実在し、全 `.alphatex` が manifest に載っていること。

生成後は必ず `npm run data:validate` を通す。1件でも ERROR があれば未完成とみなす。
