"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Portfolio() {
    const router = useRouter();
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (heroRef.current) {
            heroRef.current.style.opacity = "0";
            heroRef.current.style.transform = "translateY(0px)";
            setTimeout(() => {
                if (heroRef.current) {
                    heroRef.current.style.opacity = "1";
                    heroRef.current.style.transform = "translateY(0px)";
                }
            }, 100);
        }
        if (contentRef.current) {
            contentRef.current.style.opacity = "0";
            contentRef.current.style.transform = "translateY(40px)";
        }

        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    const fadeStart = 0;
                    const fadeEnd = 200;

                    // Hero 섹션 애니메이션
                    let heroOpacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
                    heroOpacity = Math.max(0, Math.min(1, heroOpacity));
                    const heroTranslateY = Math.min(40, (scrollY / (fadeEnd - fadeStart)) * 40);

                    if (heroRef.current) {
                        heroRef.current.style.opacity = heroOpacity.toString();
                        heroRef.current.style.transform = `translateY(${heroTranslateY}px)`;
                    }

                    // Content 섹션 애니메이션
                    let contentOpacity = (scrollY - fadeStart) / (fadeEnd - fadeStart);
                    contentOpacity = Math.max(0, Math.min(1, contentOpacity));
                    const contentTranslateY = 40 - Math.min(40, (scrollY / (fadeEnd - fadeStart)) * 40);

                    if (contentRef.current) {
                        contentRef.current.style.opacity = contentOpacity.toString();
                        contentRef.current.style.transform = `translateY(${contentTranslateY}px)`;
                    }

                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleCardClick = () => {
        router.push("/techstack");
    };

    const soonamuClick = () => {
        router.push("/projects/soonamu");
    };

    return (
        <div>
            {/* Hero 섹션 */}
            <div
                ref={heroRef}
                className="flex items-center justify-start gap-6 h-screen px-16 select-none transition-all duration-700"
                style={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    pointerEvents: "auto",
                }}
            >
                <Image
                    src="/selfie.png"
                    alt="프로필 사진"
                    className="object-cover rounded-lg"
                    width={300}
                    height={300}
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div>
                    <h1 className="text-8xl font-bold">
                        Hi, I am
                        <br /> Sooho Lee.
                    </h1>
                    <h2 className="text-4xl font-bold">Frontend Engineer</h2>
                </div>
            </div>

            {/* 콘텐츠 섹션 */}
            <div
                ref={contentRef}
                className="min-h-screen p-6 select-none transition-all duration-700"
                style={{
                    opacity: 0,
                    transform: "translateY(40px)",
                    pointerEvents: "auto",
                }}
            >
                {/* About 섹션 */}
                <div className="mb-4">
                    <h1 className="text-6xl font-bold mb-4">About</h1>
                    <hr className="border-white border-2" />
                </div>

                <div className="mb-16">
                    <p className="text-4xl font-bold leading-relaxed">
                        Backend, Frontend, Designer를 잇는 소통의 다리,
                        <br />
                        협업을 완성하는 프론트엔드 개발자입니다.
                    </p>
                </div>

                {/* 개선된 카드 그리드 */}
                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 md:gap-4">
                    {/* Contacts 카드 */}
                    <div className="w-[250px] h-[320px] bg-black rounded-lg p-8 border border-gray-600">
                        <h2 className="text-4xl font-bold mb-8">Contacts.</h2>
                        <div className="space-y-6">
                            <div>
                                <p className="text-xl mb-2">e-mail :</p>
                                <p className="text-xl select-text">
                                    soohobiz96@
                                    <br />
                                    gmail.com
                                </p>
                            </div>
                            <div>
                                <p className="text-xl mb-2">Phone:</p>
                                <p className="text-xl select-text">+82 010-4915-9751</p>
                            </div>
                        </div>
                    </div>

                    {/* Edu 카드 */}
                    <div className="w-[250px] h-[320px] bg-black rounded-lg p-8 border border-gray-600">
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
                    <div className="w-[250px] h-[320px] bg-black rounded-lg p-8 border border-gray-600 relative">
                        <h2 className="text-4xl font-bold mb-8">Projects.</h2>
                        <div className="space-y-8">
                            <div>
                                <p className="text-xl">
                                    무인 편의점 플랫폼
                                    <br />
                                    Muinus.
                                </p>
                            </div>
                            <div>
                                <p
                                    className="text-xl cursor-pointer transition-all duration-300 hover:text-blue-400 hover:scale-105 hover:underline hover:shadow-lg"
                                    onClick={soonamuClick}
                                >
                                    난산증 어린이를 위한<br />교육 앱, 수나무.
                                </p>
                            </div>
                        </div>
                        <div className="absolute bottom-4 right-4">
                            <p className="text-sm text-gray-400 transition-colors cursor-pointer">
                                click each project for more info
                            </p>
                        </div>
                    </div>

                    {/* Tech Stack 카드 */}
                    <div
                        className="w-[250px] h-[320px] bg-black rounded-lg p-8 border border-gray-600 relative transition-all duration-300 hover:shadow-xl hover:shadow-white/20 hover:scale-105 cursor-pointer"
                        onClick={handleCardClick}
                    >
                        <h2 className="text-4xl font-bold mb-8">Tech Stack.</h2>
                        <div className="absolute bottom-4 right-4">
                            <p className="text-sm text-gray-400">
                                click here for more info
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
