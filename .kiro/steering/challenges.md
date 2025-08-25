# Issue Resolution Case Studies

This document records technical issues encountered during implementation and their solutions. Use it for quick problem resolution when facing similar issues.

## Recording Format

```markdown
## Issue Name

**Occurrence Context**: Situation and context where the issue occurred
**Problem Details**: Specific problem description
**Attempted Solutions**: Initially tried methods (including failures)
**Final Solution**: Actually effective solution method
**Root Cause**: Fundamental cause of the problem
**Prevention Method**: How to avoid the same problem in the future
**References**: Helpful documents and articles for resolution
```

---

## Japanese Text Line Break Control (PR #9 - 2025-08-25)

**Occurrence Context**: Adding user statistics text to header component with Japanese content requiring proper line break handling

**Problem Details**: Japanese text "2025年7月時点で1,000万人以上のユーザー" was breaking inappropriately on different screen sizes, affecting readability and visual balance in the header layout

**Attempted Solutions**: 
- Initially used standard responsive classes without Japanese-specific line break control
- Tried manual spacing adjustments without considering Japanese typography rules

**Final Solution**: 
- Added `<wbr />` tag between "7月時点で" and "1,000万人" for strategic line break control
- Applied `wrap-anywhere break-keep` CSS classes to maintain Japanese line break rules
- Used `text-right` alignment for visual balance in header layout

**Root Cause**: Default CSS line-breaking behavior doesn't account for Japanese typography conventions and optimal reading patterns

**Prevention Method**: 
- Always consider Japanese text flow when implementing Japanese content
- Use `<wbr />` tags at natural semantic breaks in Japanese text
- Apply `wrap-anywhere break-keep` for Japanese content display
- Test responsive behavior specifically with Japanese text content

**References**: 
- Japanese typography guidelines
- CSS `word-break` and `line-break` properties documentation
- Project example at `src/app/page.tsx:L72-L79`

---

## Font Weight Management for Performance (PR #9 - 2025-08-25)

**Occurrence Context**: Using `font-medium` class in header statistics text while project font configuration limits weights to 400 and 700 only

**Problem Details**: Project restricts font weights to normal (400) and bold (700) for performance optimization, but `font-medium` (500) was being used, potentially causing font loading issues

**Attempted Solutions**: 
- Initially implemented with `font-medium` without checking project font configuration
- Assumed standard Tailwind font weights would be available

**Final Solution**: 
- Changed `font-medium` to `font-bold` to align with project font weight restrictions
- Verified font weight limitations in `src/app/layout.tsx:L9`

**Root Cause**: Lack of awareness about project-specific font weight limitations and performance optimization strategies for Japanese fonts

**Prevention Method**: 
- Always check `layout.tsx` font configuration before using font weight classes
- Understand that Japanese font files are larger and limiting weights improves performance
- Document font weight restrictions clearly in project guidelines
- Use only `font-normal` (400) and `font-bold` (700) in Japanese projects

**References**: 
- `src/app/layout.tsx` font configuration
- Japanese web font optimization best practices

---

## Header Layout Spacing Optimization (PR #9 - 2025-08-25)

**Occurrence Context**: Adding user statistics to existing header layout while maintaining visual balance and proper spacing

**Problem Details**: Initial implementation with `justify-center` didn't provide adequate space for both logo and statistics, requiring layout adjustment for proper visual hierarchy

**Attempted Solutions**: 
- Started with centered layout approach
- Manual margin/padding adjustments

**Final Solution**: 
- Changed from `justify-center` to `justify-between` for proper space distribution
- Added `gap-4` to match header padding (`px-4`) for consistent spacing
- Used `text-right` alignment for statistics text to balance against left-aligned logo

**Root Cause**: Initial layout approach didn't account for the need to display both branding and statistical information with equal visual weight

**Prevention Method**: 
- Consider content requirements before selecting layout approach (`justify-center` vs `justify-between`)
- Use consistent spacing values (match `gap` with `padding` where appropriate)
- Plan for visual balance when adding new elements to existing layouts

**References**: 
- Flexbox layout patterns
- Tailwind CSS spacing system

---

## CSS Animation Performance Optimization (PR #22 - 2025-08-25)

**Occurrence Context**: セレクト要素に赤く点滅するハイライトアニメーション機能を実装する際のパフォーマンス課題

**Problem Details**: 
- 実装されたbox-shadowアニメーションがGPUレンダリングを活用しておらず、パフォーマンスに影響する可能性がある
- 重いbox-shadow変更処理が60FPSを維持できない可能性がある
- モバイルデバイスでのアニメーション性能が懸念される

**Attempted Solutions**: 
- 初期実装では単純なbox-shadowアニメーションを使用
- アクセシビリティ対応（prefers-reduced-motion）は実装済み
- アニメーション持続時間とタイミング関数は適切に設定済み

**Final Solution**: 
- `transform` と `opacity` を組み合わせたGPU最適化アニメーション推奨
- `will-change` プロパティでブラウザへのパフォーマンスヒント提供
- `transform: translateZ(0)` でのレイヤー促進による最適化
- CSS変数を使用したアニメーションパラメーター管理

```css
/* 推奨されるパフォーマンス最適化版 */
@keyframes pulse-red-optimized {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.4);
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.8), 0 0 20px rgba(220, 38, 38, 0.3);
  }
}

.highlight-animation {
  animation: pulse-red-optimized 1s ease-in-out infinite;
  will-change: transform, box-shadow;
  transform: translateZ(0);
}
```

**Root Cause**: CSSアニメーションにおけるGPU加速の活用とレンダリング最適化に対する理解不足

**Prevention Method**: 
- アニメーション実装前にGPU最適化プロパティ（`transform`, `opacity`）の優先使用を検討
- `will-change` プロパティでブラウザへのパフォーマンス意図を明示
- 重いプロパティ（`box-shadow`, `filter`）使用時は代替手法を検討
- 実装後のパフォーマンステストを定期実行
- モバイルデバイスでの動作検証を必須とする

**References**: 
- CSS GPU Acceleration Best Practices
- Web Performance Optimization for Animations
- `src/app/globals.css:8-30` (現在の実装)

---

## Magic Numbers and Hardcoding Issues (PR #22 - 2025-08-25)

**Occurrence Context**: セレクトハイライトアニメーション機能実装時の設定値とスタイリング定義における保守性の課題

**Problem Details**: 
- アニメーション持続時間（`1s`）、影のサイズ（`4px`, `20px`）、色の透明度値がハードコーディングされている
- 同じ選択肢データが複数箇所（初期フォームと最終フォーム）で重複定義されている
- 設定変更時に複数箇所の修正が必要となり、保守性が低下している
- 一貫性のあるデザインシステムが構築されていない

**Attempted Solutions**: 
- 機能実装を優先し、時間的制約から一時的なハードコーディングで対応
- 動作確認後の最適化を予定していたが実施されていない

**Final Solution**: 
- CSS変数またはTailwind設定でのデザイントークン管理
- 共通データの一元定義と再利用可能な構造への変更
- TypeScriptでの型安全なトークン管理システム構築

```css
/* デザイントークンによる管理 */
:root {
  --animation-duration-slow: 1s;
  --shadow-blur-sm: 4px;
  --shadow-blur-md: 20px;
  --color-highlight: rgba(220, 38, 38, 0.8);
  --color-highlight-subtle: rgba(220, 38, 38, 0.4);
}
```

```tsx
// データの一元定義
const PARALLEL_WORLD_OPTIONS = [
  { value: "alpha", label: "α世界線" },
  { value: "beta", label: "β世界線" },
  // ...
] as const;

// 複数箇所での再利用
<Select options={PARALLEL_WORLD_OPTIONS} />
```

**Root Cause**: 
- 機能実装優先による設計段階でのトークン管理システム検討不足
- 保守性よりも実装速度を重視した開発アプローチ
- デザインシステムとコード実装の連携不足

**Prevention Method**: 
- 実装開始前にデザイントークン戦略を定義
- ハードコーディング検出のためのESLintルール導入
- コードレビュー時のMagic Number検出チェックリスト作成
- デザインシステムとの一貫性確認プロセス構築
- リファクタリングタイムの定期確保

**References**: 
- Design System Token Management
- DRY Principle in React Development
- `src/app/page.tsx:76-84, 364-368` (重複データ定義箇所)

---

## Initial Animation State Management (PR #22 - 2025-08-25)

**Occurrence Context**: ページロード時のハイライトアニメーション制御における初期状態設定の課題

**Problem Details**: 
- `firstSelectHighlight` が `true` で初期化されるため、ページ読み込みと同時にアニメーションが開始される
- ユーザーがページ内容を理解する前にアニメーションが始まり、UX的に唐突感がある
- 初期表示とユーザーアクションのタイミング制御が適切に設計されていない

**Attempted Solutions**: 
- React状態管理を使用した基本的なハイライト制御の実装
- フォーカス、値変更、ブラー時の適切なイベントハンドリング設定

**Final Solution**: 
- 初期状態を `false` に変更し、適切なタイミング（例：500ms後）でアニメーション開始
- `useEffect` とタイマーを活用した遅延アニメーション制御
- ユーザーインタラクション優先のアニメーション状態管理

```tsx
// 改善されたアニメーション制御
export default function QuotePage() {
  const [firstSelectHighlight, setFirstSelectHighlight] = useState(false);
  
  // 遅延ハイライト制御
  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstSelectHighlight(true);
    }, 500); // ページ読み込み後500ms待機
    
    return () => clearTimeout(timer);
  }, []);
  
  // ユーザーアクション時の制御
  const handleFirstSelectFocus = () => setFirstSelectHighlight(true);
  const handleFirstSelectBlur = () => setFirstSelectHighlight(false);
  const handleFirstSelectChange = () => setFirstSelectHighlight(false);
}
```

**Root Cause**: 
- ユーザー体験を考慮したアニメーションタイミング設計の不足
- 初期表示状態とインタラクション状態の区別が不明確
- UIアニメーションにおけるユーザー認知負荷への配慮不足

**Prevention Method**: 
- アニメーション実装時のユーザージャーニー設計を必須とする
- 初期状態は控えめに設定し、ユーザーアクションを尊重
- アニメーション開始タイミングのUXテストを実施
- メモリリーク防止のためのクリーンアップ処理を標準化
- タイマー使用時の適切な管理パターンを確立

**References**: 
- UX Animation Principles
- React useEffect Cleanup Patterns
- `src/app/page.tsx:26-46` (現在の状態管理実装)

---

## Automatic Updates

This file is automatically updated by the `/capture-lessons` command, with new issue resolution cases added automatically. Similar problem pattern recognition and solution systematization are also performed.
