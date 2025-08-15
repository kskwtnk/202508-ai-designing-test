# 電脳義肢一括見積もりサイト

AIを使ったデザイン→実装のデモンストレーション用アプリケーション

## プロジェクト概要

架空の電脳義肢製品の一括見積もりサイトです。Figmaデザインから自動的にコードを生成し、開発者以外でもIssueから実装指示が出せるデモンストレーションを行います。

## 技術スタック

- **フレームワーク**: Next.js v15
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4 + Tailwind Variants
- **開発ツール**: ESLint
- **デザイン連携**: Figma Dev Mode MCP Server（設定準備済み）

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

`/src/components/` 配下に再利用可能なUIコンポーネントを配置:

- **Button**: 基本ボタンコンポーネント（primary, secondary, outline, ghost バリアント）
- **Input**: フォーム入力要素（ラベル・エラー表示機能付き）
- **Select**: セレクトボックスコンポーネント（オプション配列対応）
- **Card**: カード形式のレイアウト（Header, Title, Content サブコンポーネント）

### Tailwind Variants活用

すべてのコンポーネントでTailwind Variantsを使用し、型安全なバリアント管理を実現:

```typescript
import { tv, type VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'inline-flex items-center justify-center...',
  variants: {
    variant: {
      primary: 'bg-blue-600 text-white...',
      secondary: 'bg-gray-100 text-gray-900...'
    },
    size: {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-base'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})
```

### 依存関係

- `tailwind-variants`: コンポーネントバリアント管理
- `tailwind-merge`: Tailwindクラスの競合解決

## 実装済み機能

### アプリケーション機能
- ✅ トップページ：電脳義肢サービス紹介（Hero, Features, Products, CTA セクション）
- ✅ 見積もりフォーム：詳細な申し込みフォーム（バリデーション・概算見積もり機能付き）
- ✅ 完了ページ：申し込み内容確認とステータス表示
- ✅ レスポンシブデザイン対応

### 技術的実装
- ✅ TypeScript型安全性確保
- ✅ Tailwind Variants によるコンポーネントスタイリング
- ✅ フォームバリデーション
- ✅ LocalStorage を使ったデータ永続化
- ✅ 本番ビルド動作確認済み

## 今後の拡張予定

### GitHub Actions + Claude Code Actions
- Issue作成時の自動実装ワークフロー
- Pull Request自動生成
- 非開発者向けIssue作成ガイド
- Figma URL連携による自動コンポーネント生成

## ディレクトリ構造

```
.
├── README.md
├── CLAUDE.md
├── package.json
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── src/
│   ├── app/
│   │   ├── page.tsx          # トップページ
│   │   ├── quote/
│   │   │   └── page.tsx      # 申し込みフォーム
│   │   ├── complete/
│   │   │   └── page.tsx      # 完了ページ
│   │   ├── layout.tsx        # ルートレイアウト
│   │   ├── globals.css       # グローバルスタイル
│   │   └── favicon.ico
│   └── components/           # コンポーネントライブラリ
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Select.tsx
│       ├── Card.tsx
│       └── index.ts
└── public/                   # 静的ファイル
    ├── next.svg
    ├── vercel.svg
    └── ...
```

## 開発フロー

### 現在の開発フロー
1. 要件定義・設計
2. コンポーネントライブラリでUIコンポーネント作成
3. ページ実装（Tailwind Variants使用）
4. TypeScript型チェック・ESLint実行
5. ビルド確認

### Figma連携時の開発フロー（準備済み）
1. Figmaでデザイン作成
2. Dev Mode MCPでコンポーネント生成
3. 既存コンポーネントライブラリに統合
4. ページ実装・調整

## トラブルシューティング

### MCPサーバー接続エラー
- Figmaデスクトップアプリが起動していることを確認
- `http://127.0.0.1:3845/mcp` にアクセス可能か確認
- Claude Code設定を再確認

### ビルドエラー
- 型エラーは `npm run type-check` で確認
- Lintエラーは `npm run lint -- --fix` で自動修正
