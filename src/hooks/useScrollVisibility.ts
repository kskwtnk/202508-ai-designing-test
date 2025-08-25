"use client";

import { useState, useEffect, useCallback } from "react";

interface UseScrollVisibilityReturn {
  isVisible: boolean;
}

function useScrollVisibility(
  firstFormRef: React.RefObject<HTMLElement | null>,
  finalFormRef: React.RefObject<HTMLElement | null>,
): UseScrollVisibilityReturn {
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    let isFirstFormOutOfView = false;
    let isFinalFormVisible = false;

    entries.forEach((entry) => {
      if (entry.target === firstFormRef.current) {
        // 最初のフォームが1ピクセルでもビューポートの外に出たかどうか
        isFirstFormOutOfView = !entry.isIntersecting;
      }
      
      if (entry.target === finalFormRef.current) {
        // 最後のフォームが1ピクセルでもビューポートの中に入ったかどうか
        isFinalFormVisible = entry.isIntersecting;
      }
    });

    // 表示条件: 最初のフォームが見えない AND 最後のフォームも見えない
    const shouldShow = isFirstFormOutOfView && !isFinalFormVisible;
    setIsVisible(shouldShow);
  }, [firstFormRef, finalFormRef]);

  useEffect(() => {
    // ブラウザサポート確認
    if (!("IntersectionObserver" in window)) {
      console.warn("IntersectionObserver not supported, falling back to no sticky CTA");
      return;
    }

    // ref要素の存在確認
    if (!firstFormRef.current || !finalFormRef.current) {
      return;
    }

    // Intersection Observer の設定
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0, // 1ピクセルでも見えたら検知
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // 要素を観察対象に追加
    observer.observe(firstFormRef.current);
    observer.observe(finalFormRef.current);

    // クリーンアップ処理
    return () => {
      observer.disconnect();
    };
  }, [firstFormRef, finalFormRef, handleIntersection]);

  return { isVisible };
}

export default useScrollVisibility;