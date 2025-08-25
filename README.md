# Neuroware Guide - AI駆動型開発デモンストレーション

サイバネティック義肢製品の一括見積もりサイト - FigmaデザインからAIによる自動実装デモ

## 開発プロセス

入力に応じて2つの開発フローを使い分けます：

```mermaid
graph TD
    Start([開発開始]) --> Input{駆動の種類}

    %% ビジュアル駆動フロー
    Input -->|ビジュアル駆動| F1[Figma Dev Mode MCPでコード生成]
    F1 --> F2[Claude Codeで直接実装・修正]
    F2 --> K4

    %% 仕様駆動フロー
    Input -->|使用駆動| K1[.kiro/specs/に仕様書作成]
    K1 --> K1a[requirements.md 要件定義]
    K1 --> K1b[design.md デザイン仕様]
    K1 --> K1c[tasks.md 実装タスク]
    K1a --> K2
    K1b --> K2
    K1c --> K2
    K2["/create-issue コマンドで GitHub Issue作成"]
    K2 --> K3[Claude Code Actionが自動実行]
    K3 --> K4

    %% 共通のPR・デプロイフロー
    K4[Pull Request作成] --> K5[プレビュー環境自動デプロイ]
    K5 --> Preview[プレビューで確認]

    %% 共通の確認・修正フロー
    Preview --> K6[レビューと対話的修正]
    K6 --> Review{修正が必要?}
    Review -->|Yes| K7[PRコメントで指示]
    K7 --> K8[プレビューで確認]
    K8 --> K6
    Review -->|No| End([完了])

    %% スタイリング
    classDef figmaFlow fill:#e1f5fe,stroke:#0277bd,stroke-width:2px
    classDef kiroFlow fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
    classDef process fill:#fff3e0,stroke:#ef6c00,stroke-width:2px
    classDef decision fill:#ffebee,stroke:#c62828,stroke-width:2px
    classDef common fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px

    class F1,F2 figmaFlow
    class K1,K1a,K1b,K1c,K2,K3 kiroFlow
    class K4,K5,Preview,K6,K7,K8 common
    class Start,End process
    class Input,Review decision
```

### ビジュアル駆動フロー

FigmaのURLやデザインファイルが提供された場合、Figma Dev Mode MCPを使用してデザインから直接コード生成を行います：

1. **Figma Dev Mode MCP**: デザインファイルからReactコンポーネントを自動生成
2. **Claude Codeによる実装**: 生成されたコードをプロジェクトに統合・カスタマイズ

### 仕様駆動フロー

機能要件が明確な場合、Kiro仕様管理システムを使用した構造化された開発を行います：

1. **仕様書作成**: `.kiro/specs/[機能名]/`に要件・デザイン・タスクを定義

   ```
   .kiro/specs/[機能名]/
   ├── requirements.md  # 要件定義（ユーザーストーリーと受け入れ基準）
   ├── design.md       # デザイン仕様（UIコンポーネントとスタイル）
   └── tasks.md        # 実装タスク（技術的な実装手順）
   ```

2. **Issue自動生成**: `/create-issue`コマンドで完全な仕様をGitHub Issueに変換

   > **💡 なぜIssueに保存するのか**  
   > `.kiro/specs`ディレクトリの内容をリポジトリに永続的に保持するのは管理が困難です。そのため、一度作成した仕様書の内容をGitHub Issueに記載することで、Claude Code Actionsが後から参照できる永続的なコンテキストとして保存します。これにより、仕様の詳細情報が失われることなく、自動実装プロセス全体を通して活用できます。

3. **自動実装**: Claude Code ActionsがIssueに保存された仕様に基づいてPRを自動作成

### 共通のPR・デプロイ・修正フロー

両方のフローは共通のPR作成からプレビュー・修正プロセスに合流します：

1. **Pull Request作成**: 実装内容をPRとして作成
2. **プレビュー環境自動デプロイ**: GitHub Pagesで自動デプロイ
3. **プレビュー確認**: 実装内容をブラウザで確認
4. **対話的修正**: レビューと修正指示のループ
5. **継続的改善**: PRコメントでの指示 → プレビュー確認を繰り返し

## 🧠 開発知識の蓄積

このプロジェクトでは、実装経験を体系的に蓄積し、次回の開発効率を向上させる知識管理システムを採用しています。

### 知識の管理

開発で得られた経験と学習内容は以下のファイルで管理されています：

1. **実装パターン** (`.kiro/steering/patterns.md`)
   - 再利用可能なReactコンポーネントパターン
   - TypeScript型定義のベストプラクティス
   - Tailwind CSSスタイリング手法
   - カスタムフックの実装方法

2. **課題解決事例** (`.kiro/steering/challenges.md`)
   - 技術的問題とその解決策
   - 試行錯誤のプロセス
   - パフォーマンス最適化手法
   - クロスブラウザ対応方法

3. **学習記録** (`.kiro/steering/lessons.md`)
   - プロジェクトで学んだ重要な教訓
   - 技術選定の判断基準
   - 開発プロセスの改善点
   - チームで共有すべき知見

### 知識の活用方法

開発時には、過去の経験を参考にすることで：

- **効率的な実装**: 実証済みのパターンを再利用
- **問題回避**: 過去の課題から学んだ予防策を適用
- **品質向上**: ベストプラクティスに基づいた実装
- **技術選定**: 経験に基づいた適切な技術判断

### 継続的な改善

各機能実装後に得られた知見は、適宜これらのファイルに追加され、プロジェクト全体の開発品質向上に貢献します。

## 詳細情報

プロジェクトの詳細については、以下のドキュメントを参照してください：

- **技術仕様**: [.kiro/steering/tech.md](.kiro/steering/tech.md)
- **プロジェクト構成**: [.kiro/steering/structure.md](.kiro/steering/structure.md)
- **プロダクト概要**: [.kiro/steering/product.md](.kiro/steering/product.md)
- **コミュニケーションルール**: [.kiro/steering/communication.md](.kiro/steering/communication.md)

---

このプロジェクトは、AI駆動型の開発プロセスを実証するデモンストレーション用途で構築されています。非開発者でも仕様書を作成してGitHub Issueを発行することで、自動的にコード実装とプレビュー環境の提供を受けることができます。
