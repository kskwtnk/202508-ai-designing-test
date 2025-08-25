"use client";

import { useCallback, useEffect, useState } from "react";

interface UseScrollVisibilityReturn {
  isVisible: boolean;
}

/**
 * スクロール位置に基づいて要素の表示状態を監視するカスタムフック
 * Intersection Observer APIを使用してパフォーマンスを最適化
 */
export function useScrollVisibility(
  firstFormRef: React.RefObject<HTMLElement | null>,
  finalFormRef: React.RefObject<HTMLElement | null>,
): UseScrollVisibilityReturn {
  const [isFirstFormOutOfView, setIsFirstFormOutOfView] = useState(false);
  const [isFinalFormVisible, setIsFinalFormVisible] = useState(false);

  // Intersection Observer のコールバック関数
  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.target === firstFormRef.current) {
          // 最初のフォームがビューポート外に出たかどうか
          setIsFirstFormOutOfView(!entry.isIntersecting);
        }
        if (entry.target === finalFormRef.current) {
          // 最後のフォームがビューポート内に入ったかどうか
          setIsFinalFormVisible(entry.isIntersecting);
        }
      });
    },
    [firstFormRef, finalFormRef],
  );

  useEffect(() => {
    // ブラウザサポート確認
    if (!("IntersectionObserver" in window)) {
      console.warn(
        "IntersectionObserver not supported, falling back to default behavior",
      );
      return;
    }

    // ref要素の存在確認
    if (!firstFormRef.current || !finalFormRef.current) {
      return;
    }

    // Observer の設定
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0, // 1ピクセルでも見えたら検知
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // 要素の監視開始
    observer.observe(firstFormRef.current);
    observer.observe(finalFormRef.current);

    // クリーンアップ処理
    return () => {
      observer.disconnect();
    };
  }, [firstFormRef, finalFormRef, observerCallback]);

  // 表示状態のロジック
  const isVisible = isFirstFormOutOfView && !isFinalFormVisible;

  return { isVisible };
}