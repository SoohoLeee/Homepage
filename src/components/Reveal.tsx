"use client";
import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
    children: ReactNode;
    className?: string;
    /** 나타나기 전 지연 시간(ms). 여러 요소를 순차적으로 보여줄 때 사용 */
    delay?: number;
};

/**
 * 화면에 들어오면 부드럽게 떠오르며 나타나는 래퍼
 * 스타일은 globals.css의 .reveal 참고 (JS가 꺼져 있으면 처음부터 보임)
 */
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.dataset.visible = "true";
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
}
