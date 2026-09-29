"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type ImageSlideshowProps = {
    images: string[];
    label: string;
    /** 이미지 전환 간격(ms) */
    interval?: number;
};

/**
 * 이미지를 겹쳐 두고 현재 이미지만 불투명하게 표시해 크로스페이드로 전환하는 컴포넌트
 */
export default function ImageSlideshow({ images, label, interval = 2000 }: ImageSlideshowProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(intervalId);
    }, [images.length, interval]);

    return (
        <div className="relative aspect-[819/1307] w-full overflow-hidden rounded-[1.5rem] bg-black">
            {images.map((src, index) => (
                <Image
                    key={src}
                    src={src}
                    alt={index === currentIndex ? `${label} ${index + 1}` : ""}
                    aria-hidden={index !== currentIndex}
                    fill
                    sizes="352px"
                    className={`object-contain transition-opacity duration-700 ease-in-out ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                />
            ))}
        </div>
    );
}
