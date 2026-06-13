# Drum Solo Studio — CLAUDE.md

ドラムソロを「考える／練り上げる」ための補助アプリ（Android 端末で利用）。

## 設計上の不変則（最優先）

- **実行時に AI を呼ばない**（API 従量課金を避ける）。ドラムソロのデータ生成は **PC ターミナルの Claude Code が事前に行い**、アプリは生成済みデータを読んで「楽譜表示＋音再生」するだけ。
- 操作はスマホ上で完結させる。生成データは **GitHub 経由**（無料）でスマホへ届ける。
- ネイティブ SDK に依存しない。**Web/PWA** として作り、必要時のみ Capacitor で APK 化する。

## アーキテクチャ

```
PC: Claude Code ──生成──▶ public/data/*.alphatex + public/data/manifest.json ──git push──▶ GitHub
                                                                              │ fetch
スマホ: PWA ◀── alphaTab(楽譜描画 + alphaSynth 再生 / ミキサー / 録音) ◀───────┘
```

- 楽譜＋再生コアは **alphaTab**（`@coderline/alphatab`）。パーカッション記譜 + 内蔵 MIDI シンセ alphaSynth（テンポ変更・ループ）。
- 入力形式は **alphaTex**（テキスト）。AI が生成しやすい。

## alphaTex データ仕様

- パーカッショントラックは `\track "Name" \instrument percussion`。打点はアーティキュレーション名/番号で記述。
- **各楽器の個別音量調整**のため、ドラムの各パーツ（kick / snare / hihat / tom / cymbal …）は **可能な範囲で別トラックに分ける**。→ alphaTab のトラック単位 音量/ミュート/ソロ がそのまま楽器調整 UI になる。
- `public/data/manifest.json`: `{ "items": [{ "title": string, "file": string, "updatedAt": ISO8601 }] }`

## コマンド

| 目的 | コマンド |
|---|---|
| 開発サーバ | `npm run dev` |
| 本番ビルド | `npm run build` |
| プレビュー | `npm run preview` (port 4173) |
| 型チェック | `npm run typecheck` |
| Lint/整形＋型 | `npm run check` |
| 単体テスト | `npm test` (Vitest) |
| E2E | `npm run test:e2e` (Playwright) |

## コーディング規約

- TypeScript **strict**。`any` を避け、型は明示。
- **Biome** に準拠（シングルクォート / セミコロンあり / 幅100）。コミット前に `npm run check` が通ること。
- 関数は小さく、副作用（DOM・ネットワーク・オーディオ）は純粋ロジックから分離する。純粋ロジックは `tests/unit/` で単体テスト対象にする。
- ファイル構成: `src/player.ts`(alphaTab 制御) / `src/dataSource.ts`(GitHub 取得) / `src/ui/`。

## 品質ゲート（自動）

- 編集時: Biome 整形 + `biome check` + `tsc`（`.claude/settings.json` フック）。
- 作業終了時: `vitest run`（Stop フック）。
- コミット時: lefthook pre-commit が `biome check` + `tsc` + `vitest` を実行し、失敗ならブロック。
- push/PR: GitHub Actions CI（lint → 型 → 単体 → E2E → build）。
