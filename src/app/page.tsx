"use client";
import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // 첫 페인트 전에 초기 상태를 적용해 콘텐츠가 번쩍이지 않도록 useLayoutEffect 사용
    useLayoutEffect(() => {
        // 모션 최소화 설정 사용자는 스크롤 애니메이션 없이 모든 콘텐츠를 그대로 노출
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const fadeEnd = 200;
        let ticking = false;

        const update = () => {
            const progress = Math.max(0, Math.min(1, window.scrollY / fadeEnd));

            // Hero 섹션: 스크롤할수록 사라짐
            if (heroRef.current) {
                heroRef.current.style.opacity = (1 - progress).toString();
                heroRef.current.style.transform = `translateY(${progress * 40}px)`;
                heroRef.current.style.pointerEvents = progress > 0.9 ? "none" : "auto";
            }

            // Content 섹션: 스크롤할수록 나타남 (거의 투명할 때는 클릭 방지)
            if (contentRef.current) {
                contentRef.current.style.opacity = progress.toString();
                contentRef.current.style.transform = `translateY(${40 - progress * 40}px)`;
                contentRef.current.style.pointerEvents = progress < 0.1 ? "none" : "auto";
            }

            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(update);
                ticking = true;
            }
        };

        update();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            {/* Hero 섹션 */}
            <div
                ref={heroRef}
                className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-start gap-6 min-h-screen px-6 md:px-16 select-none"
            >
                <Image
                    src="/selfie.png"
                    alt="이수호 프로필 사진"
                    className="object-cover rounded-lg w-40 h-40 md:w-[300px] md:h-[300px]"
                    width={300}
                    height={300}
                    sizes="(max-width: 768px) 160px, 300px"
                    priority
                />
                <div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
                        Hi, I am
                        <br /> Sooho Lee.
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-bold">Frontend Engineer</h2>
                </div>
            </div>

            {/* 콘텐츠 섹션: JS 없이도 보이도록 기본값은 표시 상태, 애니메이션은 effect에서 적용 */}
            <div ref={contentRef} className="min-h-screen p-6 select-none">
                {/* About 섹션 */}
                <div className="mb-4">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">About</h2>
                    <hr className="border-white border-2" />
                </div>

                <div className="mb-16">
                    <p className="text-2xl md:text-4xl font-bold leading-relaxed">
                        Backend, Frontend, Designer를 잇는 소통의 다리,
                        <br />
                        협업을 완성하는 프론트엔드 개발자입니다.
                    </p>
                </div>

                {/* 카드 그리드 */}
                <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
                    {/* Contacts 카드 */}
                    <div className="w-full sm:w-[250px] h-[320px] bg-black rounded-lg p-8 border border-gray-600">
                        <h2 className="text-4xl font-bold mb-8">Contacts.</h2>
                        <div className="space-y-6">
                            <div>
                                <p className="text-xl mb-2">e-mail :</p>
                                <a
                                    href="mailto:soohobiz96@gmail.com"
                                    className="text-xl select-text hover:text-blue-400 hover:underline"
                                >
                                    soohobiz96@
                                    <br />
                                    gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Edu 카드 */}
                    <div className="w-full sm:w-[250px] h-[320px] bg-black rounded-lg p-8 border border-gray-600">
                        <h2 className="text-4xl font-bold mb-8">Edu.</h2>
                        <div className="space-y-8">
                            <div>
                                <p className="text-xl">
                                    SSAFY 12th
                                    <br />
                                    Certificate.
                                </p>
                            </div>
                            <div>
                                <p className="text-xl">
                                    Chung-Ang
                                    <br />
                                    University
                                    <br />
                                    Business
                                    <br />
                                    Administration.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Projects 카드 */}
                    <div className="w-full sm:w-[250px] h-[320px] bg-black rounded-lg p-8 border border-gray-600 relative">
                        <h2 className="text-4xl font-bold mb-8">Projects.</h2>
                        <ul className="space-y-8">
                            <li>
                                <Link
                                    href="/projects/muinus"
                                    className="block text-xl transition-all duration-300 hover:text-blue-400 hover:scale-105 hover:underline focus-visible:text-blue-400 focus-visible:underline"
                                >
                                    무인 편의점 플랫폼
                                    <br />
                                    Muinus.
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/projects/soonamu"
                                    className="block text-xl transition-all duration-300 hover:text-blue-400 hover:scale-105 hover:underline focus-visible:text-blue-400 focus-visible:underline"
                                >
                                    난산증 어린이를 위한<br />교육 앱, 수나무.
                                </Link>
                            </li>
                        </ul>
                        <div className="absolute bottom-4 right-4">
                            <p className="text-sm text-gray-400">click each project for more info</p>
                        </div>
                    </div>

                    {/* Tech Stack 카드 */}
                    <Link
                        href="/techstack"
                        className="block w-full sm:w-[250px] h-[320px] bg-black rounded-lg p-8 border border-gray-600 relative transition-all duration-300 hover:shadow-xl hover:shadow-white/20 hover:scale-105 focus-visible:shadow-xl focus-visible:shadow-white/20"
                    >
                        <h2 className="text-4xl font-bold mb-8">Tech Stack.</h2>
                        <div className="absolute bottom-4 right-4">
                            <p className="text-sm text-gray-400">click here for more info</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
