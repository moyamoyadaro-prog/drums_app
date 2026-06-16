---
name: study-reference
description: 世の中の既存ドラムソロから phrase-library を育てる。特定のドラマー/曲/奏法を Web テキストで裏取りし、特徴的なフレーズを忠実度タグ付きで data-gen/phrase-library/<genre>.md に記録する。ユーザーが「○○のソロを学ばせて」「このドラマーのフレーズを取り込んで」「/study-reference」と言ったら使う。
---

# study-reference — 既存名演からの学習ワークフロー

phrase-library の入口は従来 capture（自己生成由来）だけだったが、このスキルは
**既存の名ドラムソロ由来のフレーズを library に注入する**。実行時 AI 不使用の不変則どおり
PC の Claude Code が事前に行い、出力は `data-gen/phrase-library/<genre>.md` への追記のみ。

## 最初に必ず読む参照

1. `data-gen/REFERENCE_STUDY.md` — 基本姿勢・`fidelity` 判定・出典の扱い（**最優先**）。
2. `data-gen/phrase-library/README.md` — エントリ書式・タグ正規値・`id` 規則。
3. `data-gen/CONVENTIONS.md` — alphaTex 記法・articulation 番号・不変則。

## 不変則（最優先）

- **音声/動画の自動採譜はしない**。扱うのは公開済みテキストの採譜・教則・解説のみ。
- 1エントリは **1〜2小節の短い断片**。ソロ全体の複製はしない。
- 名前（`drummer`/`song`）は library タグと出典メタにのみ置き、生成 `.alphatex` 本体には出さない。
- 「忠実を狙う」が「忠実と断言する」ではない。裏取りできた範囲で `fidelity` を正直に付ける。

## 手順

### 1. 対象を確定する
- 学習対象を決める：**ドラマー名 / 曲・ソロ / 奏法（デバイス）**のいずれか
  （例「John Bonham — Moby Dick の三連フィル」「Steve Gadd のリニア語彙」）。
- 不明確なら `AskUserQuestion` で対象・ジャンル・狙うシーン（scene）を1〜2問だけ確認。

### 2. Web で裏取りする（必須）
- `WebSearch` → `WebFetch` で採譜・スティッキング・テンポ・楽器配分が読めるテキストを集める。
- 複数の信頼ソースで一致する要素ほど高い `fidelity`。**URL は控える**（`refs` に使う）。

### 3. fidelity を判定する
- `REFERENCE_STUDY.md` の表に従い各フレーズに `transcribed` / `paraphrase` / `idiom` を付ける。
- 迷ったら低い方。`transcribed` は裏取り URL 必須。

### 4. alphaTex 断片に起こす
- `CONVENTIONS.md` の記法・articulation 番号で、1〜2小節の**有効な alphaTex 断片**にする。
- トラック分割は再利用側（gen-solo）で合わせるので、断片は楽器ごとの行で十分（README の書式に従う）。

### 5. library に記録する
- `phrase-library/<genre>.md`（無ければ新規作成）へ README 書式で追記。
  - `source: reference:<artist>-<song>`、`drummer` / `fidelity` / `refs` を必ず記入。
  - `id` は `<genre>-<scene>-<連番2桁>`。
- 既存と重複・凡庸なものは登録しない。

### 6. 報告
- 追加した `id`・`fidelity`・参照 URL を一覧で提示。
- 裏取りできず `paraphrase`/`idiom` に留めたものはその旨を明記（精度を誇張しない）。
- これらは次回以降の `/gen-solo` の recall で再利用され、原曲が認知できる形で流用されたときは
  `<slug>.refs.json` 経由でアプリ備考に出典が出る（CONVENTIONS.md §7）。
