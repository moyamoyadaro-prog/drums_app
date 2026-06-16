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
- 名前（`drummer`/`song`）は library タグと出典メタに置く。生成 `.alphatex` 本体では、
  **`\title` の「<ドラマー>風」表記のみ可**（fidelity と整合する控えめな帰属）。それ以外の
  notation 記述（譜面コメント・トラック名など）にドラマー名/曲名を書かない。
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

### 6. 学習したフレーズだけでソロを作る（毎回・自動）
学習を回したら**そのたびに**、今回学んだフレーズ／イディオムを使ったソロを生成してアプリに反映する。
ユーザーの追加指示を待たない。

- **使う素材は今回 library に記録したエントリのみ**（＝この学習対象のフレーズ／イディオム）。
  - **隙間埋めの無駄なオリジナルフレーズは作らない**。学習が浅いうちは語彙が薄くて当然なので、
    足りない分は **反復・変位・トラック間の振り分け・休符**で構成する。基礎語彙（`templates/*.md`）や
    創作フィルで埋めない。
  - ソロが短く/素朴になっても良い（語彙が育てば自然に厚くなる）。
- 組み立て・記法・トラック分割・検証は `/gen-solo` の手順2〜4に従う（`CONVENTIONS.md` 準拠）。
- `\title` は **「<ドラマー>風 …」** で出す（例「Max Roach 風 4ビート・トレード（N小節）」）。
  名前を出してよいのは `\title` の「〜風」だけ。譜面本体の他の場所には書かない。
- `slug` は `<genre>-<artist>-<scene>-<bars>bars` 目安（半角小文字ハイフン）。
- 認知できる形で流用した断片は `public/data/<slug>.refs.json` に帰属を残す（CONVENTIONS.md §7、
  純 `idiom` で形が溶けるものは載せない）。

### 7. アプリへ反映（毎回・自動 commit/push）
- `npm run data:manifest` → `npm run data:validate` を通す（ERROR 0 まで）。
- 通ったら `public/data/` の生成物と `phrase-library/<genre>.md` を **commit して `main` に push**
  （GitHub Pages 経由でスマホに届く）。コミットメッセージは日本語可。
- push 失敗や検証 ERROR が残る場合は反映を止めて報告する。

### 8. 報告
- 追加した `id`・`fidelity`・参照 URL を一覧で提示。
- 生成したソロの slug・タイトル・総小節数・使用フレーズ id、push 結果（コミットハッシュ）を併記。
- 裏取りできず `paraphrase`/`idiom` に留めたものはその旨を明記（精度を誇張しない）。
- 出典化した小節範囲（`<slug>.refs.json`）も報告。アプリ備考に出典が出る（CONVENTIONS.md §7）。
