# Implementation Patterns Collection

This document records reusable implementation patterns established in the project. By referencing these patterns during new implementations, you can improve development efficiency and quality.

## Pattern Recording Format

```markdown
## Pattern Name

**Use Case**: Usage scenario for this pattern
**Implementation**: Code sample
**Usage Example**: Concrete implementation example
**Considerations**: Points to note when using
**Related Implementations**: Features using this pattern
**Variations**: Pattern derivatives
```

---

## Responsive Text Size

**Use Case**: Appropriately adjust text size according to screen size

**Implementation**:

```tsx
// Basic pattern
<span className="text-sm md:text-base lg:text-lg">
  Responsive text
</span>

// For headings
<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
  Main title
</h1>

// Statistics/data display
<div className="text-xs md:text-sm text-fuchsia-600">
  Statistics or metadata
</div>
```

**Usage Example**:

```tsx
// User count display in Header.tsx
<div className="flex items-center space-x-4">
  <Logo />
  <span className="text-sm font-medium text-fuchsia-600 md:text-base">
    Over 10 million users as of July 2025
  </span>
</div>
```

**Considerations**:

- Follow mobile-first principle, define from smaller sizes
- Adjust breakpoints according to text importance
- Ensure minimum 16px for accessibility

**Related Implementations**: Header statistics display, Hero headings, Footer information
**Variations**:

- `text-xs sm:text-sm md:text-base` (finer adjustment)
- `text-base lg:text-lg xl:text-xl` (large screen focus)

---

## Flexbox Center Alignment Pattern

**Use Case**: Basic pattern for horizontal and vertical center alignment of elements

**Implementation**:

```tsx
// Horizontal center
<div className="flex justify-center">
  <div>Centered element</div>
</div>

// Horizontal & vertical center
<div className="flex items-center justify-center min-h-screen">
  <div>Completely centered</div>
</div>

// Spacing between elements
<div className="flex items-center space-x-4">
  <div>Element 1</div>
  <div>Element 2</div>
  <div>Element 3</div>
</div>
```

**Usage Example**:

```tsx
// Element layout in Header.tsx
<header className="flex items-center justify-between px-6 py-4">
  <div className="flex items-center space-x-4">
    <Logo />
    <UserStats />
  </div>
  <Navigation />
</header>
```

**Considerations**:

- Be careful with the distinction between `space-x-*` and `gap-*`
- Use `space-y-*` for vertical alignment
- Watch for old Flexbox specs in Safari (vendor prefixes if needed)

**Related Implementations**: Header, Button, various Card components
**Variations**:

- `justify-between` (edge alignment)
- `justify-around` (even distribution)
- `items-start`, `items-end` (top/bottom alignment)

---

## TypeScript Component Props Definition

**Use Case**: Type-safe property definition for React components

**Implementation**:

```typescript
// Basic Props interface
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

// Extending HTMLAttributes
interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helpText?: string;
}

// Generic component Props
interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  "data-testid"?: string;
}
```

**Usage Example**:

```tsx
// Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size })} {...props}>
      {children}
    </button>
  );
}
```

**Considerations**:

- Properly add `?` to optional properties
- `React.ReactNode` is standard type when including child elements
- Pass other Props with spread operator
- Recommend function parameter defaults over defaultProps

**Related Implementations**: Button, Select, TextField, LinkButton
**Variations**:

- `Omit<HTMLButtonElement, 'type'>` (exclude specific properties)
- `Pick<SomeType, 'prop1' | 'prop2'>` (select specific properties)

---

## Tailwind Variants Pattern

**Use Case**: Style management and variation definition using tailwind-variants

**Implementation**:

```typescript
import { tv } from "tailwind-variants";

// Basic variant definition
const buttonVariants = tv({
  base: "inline-flex items-center justify-center rounded-md font-medium transition-colors",
  variants: {
    variant: {
      primary: "bg-sky-600 text-white hover:bg-sky-700",
      secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
      outline: "border border-sky-600 text-sky-600 hover:bg-sky-50",
    },
    size: {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4",
      lg: "h-12 px-6 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
```

**Usage Example**:

```tsx
// Usage in Button.tsx
export default function Button({ variant, size, className, ...props }) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}

// During usage
<Button variant="outline" size="lg">
  Large outline button
</Button>;
```

**Considerations**:

- Define common styles in `base`
- Set default values with `defaultVariants`
- Override possible with `className` prop
- Use `compoundVariants` for complex conditional logic

**Related Implementations**: Button, LinkButton, Badge, Alert
**Variations**:

- `compoundVariants` for compound conditional styling
- `slots` for multiple element styling

---

---

## Japanese Typography Optimization Pattern (PR #9 - 2025-08-25)

**Use Case**: Optimize Japanese text display with appropriate line breaks and font weight management

**Implementation**:

```tsx
// Japanese text with line break control
<p className="wrap-anywhere break-keep text-right">
  2025年7月時点で<wbr />1,000万人以上のユーザー
</p>

// Font weight management (limited to 400/700)
<p className="font-bold text-sky-600"> // Use font-bold instead of font-medium
  Japanese text content
</p>

// Header layout with proper spacing
<header className="flex items-center justify-between gap-4 bg-white px-4 py-5">
  <Logo className="h-3.5 w-auto" />
  <p className="text-xs sm:text-sm">Statistics text</p>
</header>
```

**Usage Example**:

```tsx
// Header.tsx - User statistics display
<header className="flex items-center justify-between gap-4 bg-white px-4 py-5">
  <Logo className="h-3.5 w-auto" />
  <p className="text-xs font-bold text-sky-600 sm:text-sm wrap-anywhere break-keep text-right">
    2025年7月時点で<wbr />1,000万人以上のユーザー
  </p>
</header>
```

**Considerations**:

- Use `<wbr />` tags at strategic points for natural line breaks in Japanese text
- `wrap-anywhere break-keep` maintains Japanese-specific line break rules
- Limit font weights to 400 (normal) and 700 (bold) for performance optimization
- Use `text-right` for visual balance in header layouts
- Apply `gap-4` for consistent spacing between header elements

**Related Implementations**: Header user statistics, Japanese content display
**Variations**:

- `wrap-anywhere break-all` (more aggressive line breaks)
- `text-xs sm:text-sm md:text-base` (extended responsive scaling)

---

## Header Layout with Statistics Pattern (PR #9 - 2025-08-25)

**Use Case**: Display branding logo alongside statistical information in header

**Implementation**:

```tsx
// Basic header with logo and statistics
<header className="flex items-center justify-between gap-4 bg-white px-4 py-5">
  <Logo className="h-3.5 w-auto" />
  <div className="text-right">
    <p className="text-xs sm:text-sm font-bold text-sky-600">
      Statistical information
    </p>
  </div>
</header>
```

**Usage Example**:

```tsx
// Header.tsx implementation
const Header = () => {
  return (
    <header className="flex items-center justify-between gap-4 bg-white px-4 py-5">
      <Logo className="h-3.5 w-auto" />
      <p className="text-xs font-bold text-sky-600 sm:text-sm wrap-anywhere break-keep text-right">
        2025年7月時点で<wbr />1,000万人以上のユーザー
      </p>
    </header>
  );
};
```

**Considerations**:

- Use `justify-between` to create space between logo and statistics
- Apply `gap-4` for consistent spacing between elements
- Match padding with surrounding layout (`px-4 py-5`)
- Use `text-right` for statistical information alignment
- Ensure responsive text sizing with `text-xs sm:text-sm`

**Related Implementations**: Header component, branding layouts
**Variations**:

- Multiple statistics with vertical stacking
- Icon + statistics combination
- Responsive hiding on mobile devices

---

## CSS Animation Performance Pattern (PR #22 - 2025-08-25)

**Use Case**: CSSアニメーションを高いパフォーマンスで実装する際のGPU加速を活用したパターン

**Implementation**:

```css
/* パフォーマンス最適化されたアニメーション */
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

/* アクセシビリティ対応 */
@media (prefers-reduced-motion: reduce) {
  .highlight-animation {
    animation: none;
  }
}

/* アニメーション適用 */
.highlight-animation {
  animation: pulse-red-optimized 1s ease-in-out infinite;
  /* GPU加速を促進 */
  will-change: transform, box-shadow;
  transform: translateZ(0); /* レイヤー促進 */
}
```

**Usage Example**:

```tsx
// Select.tsx でのハイライトアニメーション実装
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<{ value: string; label: string }>;
  helpText?: string;
  highlight?: boolean; // ハイライト制御用prop
}

export default function Select({ highlight, className, ...props }: SelectProps) {
  const baseClasses = "w-full rounded-md border border-gray-300 px-3 py-2";
  const highlightClasses = highlight ? "highlight-animation" : "";
  
  return (
    <select 
      className={cn(baseClasses, highlightClasses, className)} 
      {...props} 
    />
  );
}
```

**Considerations**:

- `transform` と `opacity` はGPU加速に最適化されている
- `box-shadow` の変更は重い処理となるため、必要に応じて `transform` での代替を検討
- `will-change` プロパティでブラウザにアニメーション予告を送信
- `prefers-reduced-motion` でアクセシビリティに配慮
- アニメーション終了後は `will-change: auto` で最適化を解除することを推奨

**Related Implementations**: Select要素のハイライト、フォーカス状態の視覚的フィードバック
**Variations**:

- `transform: scale()` ベースのアニメーション（より軽量）
- `opacity` + `transform` の組み合わせ（より滑らか）
- CSS変数を使用した設定可能なアニメーション

---

## Design Token Management Pattern (PR #22 - 2025-08-25)

**Use Case**: ハードコーディングを避け、一貫性のあるデザインシステムを構築するためのトークン管理

**Implementation**:

```css
/* CSS変数でのデザイントークン定義 */
:root {
  /* Animation tokens */
  --animation-duration-fast: 0.15s;
  --animation-duration-normal: 0.3s;
  --animation-duration-slow: 1s;
  --animation-ease-in-out: ease-in-out;
  
  /* Color tokens */
  --color-highlight: rgba(220, 38, 38, 0.8);
  --color-highlight-subtle: rgba(220, 38, 38, 0.4);
  
  /* Spacing tokens */
  --shadow-blur-sm: 4px;
  --shadow-blur-md: 20px;
  --shadow-spread: 2px;
}

/* トークンを使用したアニメーション */
@keyframes pulse-red {
  0%, 100% {
    box-shadow: 0 0 0 var(--shadow-spread) var(--color-highlight-subtle);
  }
  50% {
    box-shadow: 
      0 0 0 var(--shadow-blur-sm) var(--color-highlight),
      0 0 var(--shadow-blur-md) var(--color-highlight-subtle);
  }
}

.highlight-animation {
  animation: pulse-red var(--animation-duration-slow) var(--animation-ease-in-out) infinite;
}
```

**Usage Example**:

```tsx
// Tailwind configでのカスタムトークン定義
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'pulse-highlight': 'pulse-red 1s ease-in-out infinite',
      },
      keyframes: {
        'pulse-red': {
          '0%, 100%': { 
            boxShadow: '0 0 0 2px rgba(220, 38, 38, 0.4)' 
          },
          '50%': { 
            boxShadow: '0 0 0 4px rgba(220, 38, 38, 0.8), 0 0 20px rgba(220, 38, 38, 0.3)' 
          },
        }
      }
    }
  }
};

// 使用時
<select className={highlight ? "animate-pulse-highlight" : ""} />
```

**Considerations**:

- デザイントークンは一箇所で定義し、複数箇所で再利用
- アニメーション速度、色、スペースは設定可能にする
- TypeScriptでトークンの型安全性を確保
- ダークモード対応時はトークンベースでの切り替えが容易
- 数値は意味のある名前（`fast`, `normal`, `slow`）で管理

**Related Implementations**: アニメーション、カラーパレット、スペーシングシステム
**Variations**:

- `@custom-media` を使用したブレークポイント管理
- `@apply` ディレクティブでの共通スタイル定義
- JSON形式でのトークン管理と自動生成

---

## State-Driven Animation Control Pattern (PR #22 - 2025-08-25)

**Use Case**: Reactの状態管理を活用してアニメーション状態を適切に制御するパターン

**Implementation**:

```tsx
// カスタムフックでのアニメーション制御
function useHighlightControl(trigger: boolean = true) {
  const [isHighlighted, setIsHighlighted] = useState(trigger);
  
  const handleFocus = useCallback(() => setIsHighlighted(true), []);
  const handleBlur = useCallback(() => setIsHighlighted(false), []);
  const handleChange = useCallback(() => setIsHighlighted(false), []);
  
  // クリーンアップ
  useEffect(() => {
    return () => setIsHighlighted(false);
  }, []);
  
  return {
    isHighlighted,
    setIsHighlighted,
    handlers: {
      onFocus: handleFocus,
      onBlur: handleBlur,
      onChange: handleChange,
    }
  };
}

// コンポーネントでの使用
function FormSection({ initialHighlight = false }) {
  const { isHighlighted, handlers } = useHighlightControl(initialHighlight);
  
  return (
    <Select
      highlight={isHighlighted}
      {...handlers}
      // その他のprops
    />
  );
}
```

**Usage Example**:

```tsx
// page.tsx での実装
export default function QuotePage() {
  const [firstSelectHighlight, setFirstSelectHighlight] = useState(false);
  
  // 初期ハイライト制御
  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstSelectHighlight(true);
    }, 500); // 500ms後にハイライト開始
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleFirstSelectFocus = () => setFirstSelectHighlight(true);
  const handleFirstSelectBlur = () => setFirstSelectHighlight(false);
  const handleFirstSelectChange = () => setFirstSelectHighlight(false);
  
  return (
    <Select
      highlight={firstSelectHighlight}
      onFocus={handleFirstSelectFocus}
      onBlur={handleFirstSelectBlur}
      onChange={handleFirstSelectChange}
    />
  );
}
```

**Considerations**:

- 初期状態は `false` でユーザーアクションに応じてアニメーション開始
- メモリリーク防止のためコンポーネントアンマウント時のクリーンアップ
- `useCallback` でイベントハンドラーの再レンダリング最適化
- タイマー使用時は必ずクリーンアップ処理を実装
- 複数の要素で同じパターンを使用する場合はカスタムフック化

**Related Implementations**: フォーム要素のハイライト、ユーザー誘導UI、状態フィードバック
**Variations**:

- デバウンス機能付きハイライト制御
- アニメーション終了検知での自動状態リセット
- グローバル状態管理との連携

---

## Automatic Updates

This file is automatically updated by the `/capture-lessons` command, with new patterns added automatically. Existing patterns are also improved and integrated as appropriate.
