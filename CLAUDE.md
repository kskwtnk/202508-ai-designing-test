# 電脳義肢一括見積もりサイト

AIを使ったデザイン→実装のデモンストレーション用アプリケーション

## プロジェクト概要

架空の電脳義肢製品の一括見積もりサイトです。Figmaデザインから自動的にコードを生成し、開発者以外でもIssueから実装指示が出せるデモンストレーションを行います。

## 技術スタック

- **フレームワーク**: Next.js v15
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **開発ツール**: ESLint, Prettier
- **デザイン連携**: Figma Dev Mode MCP Server
- **自動化**: GitHub Actions + Claude Code Actions

## ページ構成

1. **トップページ** (`/`) - サービス紹介、特徴説明、申し込みへの導線
2. **申し込みフォーム** (`/quote`) - 電脳義肢の見積もり入力フォーム
3. **完了ページ** (`/complete`) - 申し込み完了メッセージ

## 開発環境セットアップ

### 1. 依存関係のインストール
```bash
npm install
```

### 2. 開発サーバー起動
```bash
npm run dev
```

### 3. ビルド・テスト
```bash
npm run build
npm run lint
npm run type-check
```

## Dev Mode MCP設定

### 前提条件
- Figma Professional/Organization/Enterprise プランのDev/Fullシート
- Figma デスクトップアプリ
- Claude Code

### セットアップ手順

1. MCPサーバーをClaude Codeに追加:
```bash
claude mcp add --transport http figma-dev-mode-mcp-server http://127.0.0.1:3845/mcp
```

2. サーバー一覧確認:
```bash
claude mcp list
```

3. 利用可能なツール:
- `get_code`: Figma選択範囲からコード生成
- `get_variable_defs`: デザイン変数の抽出
- `get_code_connect_map`: Figmaノードとコンポーネントのマッピング

### ベストプラクティス
- Figmaファイルを明確なコンポーネント構造で整理
- セマンティックなレイヤー命名を使用
- コード生成時は具体的なプロンプトを記述
- 大きな選択範囲は小さく分割して処理

## コンポーネントライブラリ

`/lib/components/` 配下に再利用可能なUIコンポーネントを配置:

- **Button**: 基本ボタンコンポーネント
- **Input**: フォーム入力要素
- **Card**: カード形式のレイアウト
- **Layout**: ページレイアウト
- **Form**: フォーム関連コンポーネント

すべてのコンポーネントはTailwind CSS v4でスタイリング、TypeScript型定義を含む。

## GitHub Actions設定

### Claude Code Actions
- Issue作成時の自動実装ワークフロー
- Pull Request自動生成
- コードレビューの自動化

### 非開発者向けIssue作成ガイド
1. 実装したい機能を具体的に記述
2. 参考デザイン（Figma URL等）を添付
3. 優先度とラベルを設定
4. Claude Code Actionsが自動実装を開始

## ディレクトリ構造

```
.
├── README.md
├── CLAUDE.md
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── app/
│   ├── page.tsx          # トップページ
│   ├── quote/
│   │   └── page.tsx      # 申し込みフォーム
│   ├── complete/
│   │   └── page.tsx      # 完了ページ
│   ├── layout.tsx        # ルートレイアウト
│   └── globals.css       # グローバルスタイル
├── lib/
│   └── components/       # コンポーネントライブラリ
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Card.tsx
│       ├── Layout.tsx
│       └── index.ts
└── .github/
    └── workflows/        # GitHub Actions
        └── claude-code-actions.yml
```

## 開発フロー

1. Figmaでデザイン作成
2. Dev Mode MCPでコンポーネント生成
3. コンポーネントライブラリに統合
4. ページ実装
5. GitHub Actionsでデプロイ

## トラブルシューティング

### MCPサーバー接続エラー
- Figmaデスクトップアプリが起動していることを確認
- `http://127.0.0.1:3845/mcp` にアクセス可能か確認
- Claude Code設定を再確認

### ビルドエラー
- 型エラーは `npm run type-check` で確認
- Lintエラーは `npm run lint -- --fix` で自動修正
