"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function SoonamuPage() {
    // 헤더 높이(px)
    const HEADER_HEIGHT = 110;

    // 이미지 파일 목록
    const images = [
        "/soonamu/1.png",
        "/soonamu/2.png",
        "/soonamu/3.png",
        "/soonamu/4.png",
        "/soonamu/5.png",
        "/soonamu/6.png",
        "/soonamu/7.png",
        "/soonamu/8.png",
    ];

    // 두 개의 이미지 슬롯과 현재 활성화된 슬롯을 관리하는 상태
    const [imageSlots, setImageSlots] = useState([images[0], images[1] || images[0]]);
    const [activeSlot, setActiveSlot] = useState(0); // 0 또는 1
    const [currentIndex, setCurrentIndex] = useState(0);

    // 1초 간격으로 이미지를 부드럽게 전환
    useEffect(() => {
        const intervalId = setInterval(() => {
            // 다음 이미지 인덱스 계산
            const nextIndex = (currentIndex + 1) % images.length;
            const nextImageSrc = images[nextIndex];

            // 현재 비활성화된 슬롯을 찾아 다음 이미지로 업데이트
            const inactiveSlot = 1 - activeSlot;
            const newImageSlots = [...imageSlots];
            newImageSlots[inactiveSlot] = nextImageSrc;
            setImageSlots(newImageSlots);

            // 활성 슬롯을 토글하여 페이드 효과 트리거
            setActiveSlot(inactiveSlot);
            setCurrentIndex(nextIndex);
        }, 1500); // 전환 시간을 고려하여 1.5초로 간격 조정 (원하시면 1000ms로 줄여도 됩니다)

        return () => clearInterval(intervalId);
    }, [currentIndex, activeSlot, images.length, imageSlots]);

    return (
        <div className="relative min-h-screen bg-black select-none">
            {/* 상단 헤더 - 고정 */}
            <div
                className="w-full fixed top-0 left-0 z-30 bg-black bg-opacity-90"
                style={{ height: HEADER_HEIGHT, minHeight: HEADER_HEIGHT }}
            >
                <div className="flex flex-col px-6 pt-6 pb-2">
                    <div className="flex items-center gap-6">
                        <h1 className="text-6xl font-bold mb-4">Project</h1>
                        <p className="text-3xl">난산증 어린이들을 위한 App, 수나무. (25.02.24 ~ 25.05.22)</p>
                    </div>
                    <hr className="border-white border-2" />
                </div>
            </div>

            {/* 본문 + 이미지 */}
            <div
                className="flex w-full"
                style={{
                    paddingTop: HEADER_HEIGHT,
                    height: `calc(100vh - 0px)`,
                }}
            >
                {/* 본문: 스크롤 가능 */}
                <main className="flex-1 overflow-y-auto p-8 text-2xl bg-black">
                    {/* ... (기존 본문 내용과 동일) ... */}
                    <p className="font-bold text-3xl">프로젝트 개요</p>
                    <li className="pl-8 text-2xl">목표 : 난산증 학생을 위한 맞춤형 수학 교육 플랫폼</li>
                    <li className="pl-8 text-2xl">
                        배경 : BASA 프로그램의 디지털 전환을 통한 검사자<br />
                        <span className="inline-block ml-[3.8em]"></span>
                        업무 부담 완화 및 학습 효율성 증대
                    </li>
                    <li className="pl-8">핵심 기능</li>
                    <span className="inline-block ml-[2.8em] pt-2">
                        <table className="min-w-max table-auto border border-gray-300">
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2 text-center">숫자 인식 기능</td>
                                    <td className="border px-4 py-2 text-center">통계 페이지 제공</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 text-center">자동 채점 및 오류 분석</td>
                                    <td className="border px-4 py-2 text-center">개인별 맞춤 학습 제공</td>
                                </tr>
                            </tbody>
                        </table>
                    </span>
                    <br /><br />
                    <p className="font-bold text-3xl">담당 역할 및 기여</p>
                    <li className="pl-8">역할 : 프론트엔드 개발 리드, 발표 기획</li>
                    <li className="pl-8">기여
                        <ul>
                            <li className="pl-8">- 숫자 인식 기능 및 핵심 컴포넌트 제작</li>
                            <li className="pl-8">- 앱 디자인 총괄</li>
                        </ul>
                    </li>
                    <br />
                    <p className="font-bold text-3xl">사용 기술/이유</p>
                    <li className="pl-8">주요 사용 기술 : Flutter</li>
                    <li className="pl-8">선택 배경</li>
                    <li className="pl-8">높은 접근성과 사용자 편의성 우선 고려</li>
                    <li className="pl-8">개발 기간을 고려한 크로스 플랫폼 선택</li>
                    <li className="pl-8">Flutter의 풍부한 커뮤니티</li>
                    <br/>
                    {/* 기여 내용 추가 */}
                    <p className="font-bold text-3xl">주요 기여 내용</p>
                    <ul className="pl-8 list-disc text-2xl">
                        <li className="mb-4">
                            <span className="font-semibold">재사용 가능한 컴포넌트 설계 및 개발</span>
                            <ul className="pl-8 list-disc text-2xl">
                                <li>
                                    <span className="font-medium">상세:</span> 프로젝트 요구사항을 분석하여 5개 유형으로 체계화하고, 그 중 <b>Drag & Drop</b>, <b>Drag & Drop 2</b>, <b>숫자 인식 컴포넌트</b>를 담당하여 모듈화된 컴포넌트 개발
                                </li>
                                <li>
                                    <span className="font-medium">결과:</span> 코드 재사용성 향상 및 개발 효율성 극대화를 통한 개발 시간 30% 단축
                                </li>
                            </ul>
                        </li> <br/>
                        <li>
                            <span className="font-semibold">핵심 기능 아키텍처 설계 및 구현</span>
                            <ul className="pl-8 list-disc text-2xl">
                                <li>
                                    <span className="font-medium">1단계:</span> Google ML Kit를 활용한 기본 숫자 인식 기능 구현
                                </li>
                                <li>
                                    <span className="font-medium">2단계:</span> 사용자 데이터 축적 후 개인화 모델 구축을 통한 숫자 인식 시스템 개발
                                </li>
                            </ul>
                        </li> <br/>
                        <li>
                            <span className="font-semibold">UI/UX 디자인 총괄</span>
                            <ul className="pl-8 list-disc text-2xl">
                                <li>
                                    <span className="font-medium">상세:</span> Figma 기반 앱 컬러 시스템 구축 및 문제 페이지 디자인 품질 관리
                                </li>
                            </ul>
                        </li> <br/>
                        <li>
                            <span className="font-semibold">프로젝트 회고 및 인사이트</span>
                            <ul className="pl-8 list-disc text-2xl">
                                <li>
                                    사용자 경험 최적화와 하드웨어 성능 요구사항 간의 균형점을 찾는 것이 핵심 과제였습니다. 특히 공익적 목적의 앱이라는 특성상 접근성을 보장하기 위해 기능의 우선순위를 명확히 하고, 목적에 부합하는 최적화된 솔루션을 구현하는 것의 중요성을 깨달았습니다.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </main>

                {/* 이미지: 부드럽게 전환되는 효과 적용 */}
                <aside
                    className="relative w-1/3 hidden lg:flex justify-center items-center p-8" // 부모 요소에 'relative' 추가
                    style={{
                        position: "sticky",
                        top: HEADER_HEIGHT,
                        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
                        minWidth: 0,
                    }}
                >
                    {imageSlots.map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt={`수나무 프로젝트 이미지 슬라이드 ${index + 1}`}
                            className={`absolute inset-0 object-cover rounded-lg transition-opacity duration-500 ease-in-out ${
                                activeSlot === index ? 'opacity-100' : 'opacity-0'
                            }`}
                            width={1000}
                            height={350}
                            priority
                            style={{ maxHeight: "100%", maxWidth: "100%" }}
                        />
                    ))}
                </aside>
            </div>
        </div>
    );
}
