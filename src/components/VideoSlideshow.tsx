"use client";
import { useEffect, useState } from "react";

type VideoSlideshowProps = {
    videos: string[];
    poster?: string;
    label: string;
};

/**
 * 비디오를 순차적으로 자동 재생하는 컴포넌트
 * 비디오 영역이 보이는 lg 이상 화면에서만 마운트해 모바일에서 불필요한 다운로드를 막음
 */
export default function VideoSlideshow({ videos, poster, label }: VideoSlideshowProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia("(min-width: 1024px)");
        const onChange = () => setIsLargeScreen(mql.matches);
        onChange();
        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }, []);

    if (!isLargeScreen) return null;

    return (
        <video
            // key를 바꿔 비디오 태그를 새로 렌더링 (안정적인 재생 전환)
            key={currentIndex}
            src={videos[currentIndex]}
            poster={currentIndex === 0 ? poster : undefined}
            autoPlay
            muted // 자동 재생을 위해 필수 (브라우저 정책)
            playsInline // iOS Safari 인라인 자동 재생에 필요
            onEnded={() => setCurrentIndex((prev) => (prev + 1) % videos.length)}
            aria-label={label}
            className="block aspect-[9/16] w-full rounded-[1.5rem] bg-black object-contain"
        />
    );
}
