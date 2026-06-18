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
2. `data-gen/SOLO-ARCHITECTURE.md` — アーク設計・曲形式・トレード・モチーフ展開の語彙（**Step 1.6 構造パスで使う**）。
3. `data-gen/INTERVIEW.md` — 対話式ヒアリングの質問バンク（Step 1 で使う）。
4. `data-gen/templates/header.alphatex` — 多トラックのヘッダ雛形。
5. `data-gen/templates/{grooves,fills,rudiments}.md` — 固定の基礎素材語彙。
6. `data-gen/phrase-library/README.md` — 育てる分類済みフレーズ集（想起/記録の規約）。
7. `data-gen/BRIEF.md` — 依頼フォーマット。

## 手順

### 1. ヒアリングして brief を確定する
- `data-gen/INTERVIEW.md` に従い、**対話式 (`AskUserQuestion`) で構造化ヒアリング**する。
  - バッチ1（曲・リズムの土台）→ バッチ2（使い所・展開）→ バッチ3（表現・制約）の順。
  - 「避けたい要素」は `multiSelect: true`、他は単一選択。
  - ユーザーが最初の依頼で既に答えた項目は再質問せず確認のみ。
  - 全バッチ後、平文で**オープンな自由記入**を1回受ける。
- 回答を `data-gen/BRIEF.md` の項目（title / genre / tempo / time_feel / bars / time / style /
  feel / scene / difficulty / sections / dynamics / reference_drummer / sticking / avoid /
  parts / source / notes）へ整理する。
- 未指定は既定値で補完（time=4/4、parts=全部位、difficulty=中 など）。
- 埋めた brief を**要約提示**し、**sections の小節合計＝bars** が合うかだけ確認する。

### 1.5. フレーズを想起する（recall）
- brief の `genre` でライブラリ `data-gen/phrase-library/<genre>.md` があれば読む（無ければスキップ）。
- `scene`（＋余裕があれば `feel`/`tempo`/`drummer`）でエントリを絞り込み、**合致するフレーズを再利用候補**にする。
- 該当が無い／薄い場合は `templates/*.md` の基礎語彙＋創作で補う。
- 再利用候補が `source: reference:<artist>-<song>`（既存名演由来、`/study-reference` が記録）の場合は、
  その `drummer`/`song`/`fidelity`/`refs` を控えておく。**原曲が認知できる形で流用**したら手順4.6で出典化する。

### 1.6. 構造を設計する（structure pass）— **音を置く前に必ず**
- `data-gen/SOLO-ARCHITECTURE.md` に従い、realize の前に 3 つを決める（「断片の羅列」→「物語るソロ」の要）。
  1. **曲形式**（§2）：`bars` をフレーズ長（4/8 小節）の倍数にし、`sections` を局面へ割り当てる。
     トレード指定（scene=トレード）なら §3 の 4s/8s（ソロ↔コンピング交互）にする。
  2. **モチーフ M**（§4.0）：2 拍程度の歌える図形を 1 つ決める。`reference_drummer` があれば手癖に寄せる。
  3. **アーク・グリッド**（§1）：各フレーズに局面（提示/展開/climax/着地）＋密度・音域・`{dy}` ベースラインを割る。
- この設計を brief 要約に 1〜2 行で添える（例「12小節=提示4/展開4/climax+着地4、M=3連→4分」）。

### 2. alphaTex を組み立てる
- `header.alphatex` をベースに `\title` 等を埋める。parts に応じてトラックを取捨選択（既定は5本）。
- Step 1.6 のアーク・グリッドに沿って配置する。想起フレーズ／`templates/*.md` 素材は、
  **モチーフ M の変換**（§4.1：反復/変位/拡大/縮小/断片化/キット間転置/変奏）として並べ、ただ羅列しない。
- 起伏は表現記法（フラム `{gr}`／ロール `{tp N}`／ヘアピン `{cre}{dec}`, `CONVENTIONS §5.2`）で描く。
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

### 4.5. フレーズを記録する（capture）
- 検証が通った後、今回作った中から **再利用価値のある特徴的なフレーズを1〜数個**抜き出す。
- `phrase-library/README.md` の書式・タグ正規値・`id` 規則に従い、`genre` に対応する
  `data-gen/phrase-library/<genre>.md`（無ければ新規作成）へ**追記**する。
  - `source` は今回の生成 slug、`drummer` は brief に名前があれば記入。
- 既存と重複・凡庸なものは登録しない。登録した id を報告に含める。

### 4.6. 出典を記録する（provenance）
- recall で `reference:` 由来フレーズを**人が聴いて分かる程度に形を残して流用した**ときだけ、
  `public/data/<slug>.refs.json` に帰属を書き出す（CONVENTIONS.md §7 の書式）。
  - 各要素: `{ "bars": [開始,終了], "drummer", "song", "fidelity", "refs": [URL...], "libraryId" }`。
  - `bars` は流用した小節範囲（1始まり・両端含む）。
- 形が溶けて原曲が認知できない一般語法（純 `idiom`）は載せない。**“真似と分かる”ものだけ**。
- 名前は必ずこのサイドカーにのみ置き、`.alphatex` 本体には書かない。
- 書き出したら `npm run data:manifest` を**再実行**し、manifest の `references[]` へ反映する。
  検証（手順4）は `<slug>.refs.json` の構造・小節範囲・`fidelity` もチェックする。

### 5. 報告
- 生成ファイルパス、総小節数、トラック構成、section 構成の要約を提示。
- **想起で再利用したフレーズ id** と **今回ライブラリに記録した id** を併記する。
- 出典を記録した場合は **`<slug>.refs.json` の帰属（誰の何の小節範囲）** も報告する。
- 必要なら `npm run dev` での目視確認を案内（楽譜表示＋再生＋トラック別音量＋備考の出典表示）。
- コミット/プッシュはユーザーが明示したときだけ行う。

## YouTube 解析が source にある場合
- 現状そのパイプラインは未実装（`data-gen/YOUTUBE_PIPELINE.md` 参照）。
- URL＋時間が来たら、自動採譜は未対応である旨を伝え、当面はユーザーの口頭説明や既存タブを
  brief に取り込んでテキスト生成として進める。実装後は解析 JSON をこの手順2に流し込む。
