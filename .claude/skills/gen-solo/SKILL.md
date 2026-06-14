---
name: gen-solo
description: ドラムソロの alphaTex を生成する。brief（テキスト指示）または将来の YouTube 解析結果から public/data/<slug>.alphatex を多トラックで組み立て、manifest 再生成と検証まで行う。ユーザーが「ソロを作って」「alphaTex 生成」「/gen-solo」と言ったら使う。
---

# gen-solo — ドラムソロ alphaTex 生成ワークフロー

実行時 AI を使わない設計のため、ソロデータの生成は **この PC の Claude Code が事前に行う**。
このスキルはその生成を定型化したもの。出力は `public/data/<slug>.alphatex` と再生成された
`manifest.json`。コミット/プッシュはユーザー指示があるまで行わない。

## 最初に必ず読む参照

1. `data-gen/CONVENTIONS.md` — 記法規約・トラック分割・articulation 番号・不変則（**最優先**）。
2. `data-gen/templates/header.alphatex` — 多トラックのヘッダ雛形。
3. `data-gen/templates/{grooves,fills,rudiments}.md` — 組み立て用の素材語彙。
4. `data-gen/BRIEF.md` — 依頼フォーマット。

## 手順

### 1. brief を確定する
- 引数や会話から brief を受け取る。`data-gen/BRIEF.md` の項目（title / tempo / bars / time /
  style / difficulty / sections / dynamics / parts / source）に整理する。
- 未指定は既定値で補完する（time=4/4、parts=全部位、difficulty=中 など）。
- **sections の小節合計が bars と一致するか**を確認。曖昧なら埋める前にユーザーへ短く確認する。

### 2. alphaTex を組み立てる
- `header.alphatex` をベースに `\title` 等を埋める。parts に応じてトラックを取捨選択（既定は5本）。
- `templates/*.md` の素材を sections に沿って並べ、必要に応じて変奏する。
- **CONVENTIONS.md の不変則を守る**：
  - 各小節の音価合計＝拍子ぴったり（4/4 なら 3840 ticks 相当）。
  - 全トラックで小節数を一致させる（鳴らない小節も `r` で埋める）。
  - 付点は `{d}`、連符は `{tu N}`、同時打ちは `( )`。`.8.` は使わない。
- `public/data/<slug>.alphatex` に書き出す（`<slug>` は半角小文字ハイフン区切り）。

### 3. manifest 再生成
- `npm run data:manifest` を実行（`\title` と mtime から `manifest.json` を自動生成）。手編集しない。

### 4. 検証
- `npm run data:validate` を実行。
- **ERROR が出たら未完成**。小節長・トラック整列・構文を直して再実行。0 件になるまで繰り返す。

### 5. 報告
- 生成ファイルパス、総小節数、トラック構成、section 構成の要約を提示。
- 必要なら `npm run dev` での目視確認を案内（楽譜表示＋再生＋トラック別音量）。
- コミット/プッシュはユーザーが明示したときだけ行う。

## YouTube 解析が source にある場合
- 現状そのパイプラインは未実装（`data-gen/YOUTUBE_PIPELINE.md` 参照）。
- URL＋時間が来たら、自動採譜は未対応である旨を伝え、当面はユーザーの口頭説明や既存タブを
  brief に取り込んでテキスト生成として進める。実装後は解析 JSON をこの手順2に流し込む。
