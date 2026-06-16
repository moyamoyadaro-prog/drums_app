# フレーズ・ライブラリ（育てる語彙）

`grooves.md` / `fills.md` / `rudiments.md` が **固定の基礎語彙**なのに対し、ここは
**生成のたびに育つ分類済みフレーズ集**。ジャズでもポップスでも定番の Fill-in / フレーズは存在するので、
ソロ生成のたびに「ジャンル × 使用シーン」で分類して記録し、次回以降の生成で**想起・再利用**する。

## 置き場所と構成

- ジャンル別に1ファイル: `data-gen/phrase-library/<genre>.md`（例 `jazz.md` `funk.md`）。
- ファイルは **初回 capture 時に作成**する（空ファイルは置かない）。
- `<genre>` の正規値: `jazz` / `funk` / `fusion` / `rock` / `metal` / `latin` / `pop` / `other`。

## 1エントリの書式

```
## <id> — <短い説明>
- genre: jazz
- scene: trade-4
- feel: swing
- tempo: 160-220
- difficulty: 中
- bars: 1
- drummer: （任意。イメージドラマー由来なら名前。reference 由来なら実在ドラマー名）
- source: jazz-fblues-solo-48bars   # 由来の生成slug / manual / reference:<artist>-<song>
- fidelity: （reference 由来のみ）transcribed / paraphrase / idiom
- refs: （reference 由来のみ）裏取りに使った出典 URL（複数可）
- added: 2026-06-16

​```
Snare:   ...
Toms:    ...
Cymbals: ...
​```
（鳴らないトラックは省略可。再利用時に `r` 埋めはこちらで行う）
```

### タグ正規値（絞り込みの軸）

- **scene**: `intro` / `groove` / `fill` / `build`（煽り） / `trade-4` / `trade-8` /
  `climax` / `turnaround` / `solo-theme` / `ending`
- **feel**: `straight-8` / `straight-16` / `swing` / `shuffle` / `half-time` / `3-feel` / `latin`
- **difficulty**: `易` / `中` / `難`
- **tempo**: 推奨BPM域（`160-220` のように範囲）

## ワークフローでの使われ方（SKILL.md と対応）

- **想起 (recall) — 組み立て前**: brief の `genre` + `scene`（+ 余裕があれば `feel`/`tempo`/`drummer`）で
  該当ファイルを読み、合致するフレーズを **優先的に再利用**する。無ければ基礎語彙＋創作で補う。
- **記録 (capture) — 検証後**: 今回作った中で「再利用価値のある特徴的な1〜数フレーズ」を抜き出し、
  上記書式で分類して該当ジャンルファイルへ **追記**する。重複や凡庸なものは登録しない。

## フレーズの由来（source の3系統）

| source | 由来 | drummer/fidelity/refs |
|---|---|---|
| `<生成slug>` | 自分が生成したソロから capture | drummer は brief 由来（任意） |
| `manual` | 人手で直接登録 | 任意 |
| `reference:<artist>-<song>` | **既存の名演から学習**（`/study-reference`） | drummer/fidelity/refs を必ず記入 |

`reference:` 由来のフレーズを gen-solo が**原曲が認知できる形で流用**したら、出典を
`<slug>.refs.json` に残してアプリ備考に出す（CONVENTIONS.md §7）。判定基準と出典の扱いは
`../REFERENCE_STUDY.md` を参照。

## ルール

- スニペットは **alphaTex として有効**な断片にする（小節長は再利用側で合わせる）。
- `id` は `<genre>-<scene>-<連番2桁>`（例 `jazz-trade4-01`）。説明は日本語可。
- 同等フレーズが既にあれば新規登録せず、説明/タグを充実させる。
- 個人名（drummer）はライブラリ内タグのみ。生成 `.alphatex` 本体には出さない。
