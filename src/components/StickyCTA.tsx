import { useScrollVisibility } from "@/hooks/useScrollVisibility";
import LinkButton from "./LinkButton";

interface StickyCTAProps {
  firstFormRef: React.RefObject<HTMLElement>;
  finalFormRef: React.RefObject<HTMLElement>;
}

/**
 * スクロール追従CTAコンポーネント
 * ユーザーのスクロール位置に応じて表示・非表示が切り替わる固定位置のCTAボタン
 */
function StickyCTA({ firstFormRef, finalFormRef }: StickyCTAProps) {
  const { isVisible } = useScrollVisibility(firstFormRef, finalFormRef);

  // 最下部フォームへスムーズにスクロールする関数
  const scrollToFinalForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    finalFormRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out 
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
      `}
    >
      {/* 半透明の黒い背景 */}
      <div className="bg-black bg-opacity-50 backdrop-blur-sm p-4">
        {/* 中央配置されたコンテナ（通常のコンテンツの幅と同じ最大幅） */}
        <div className="mx-auto max-w-md">
          <LinkButton
            color="accent"
            primaryLabel="今すぐ資料請求する"
            href="#final-form"
            onClick={scrollToFinalForm}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default StickyCTA;