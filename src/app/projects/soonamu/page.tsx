"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import ProjectLayout from "@/components/ProjectLayout";

// public/soonamu 폴더에 있는 이미지 파일 목록
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

/**
 * 이미지를 겹쳐 두고 현재 이미지만 불투명하게 표시해 크로스페이드로 전환하는 컴포넌트
 */
function ImageSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // 전환 시간을 고려하여 1.5초 간격으로 이미지 전환
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 1500);
        return () => clearInterval(intervalId);
    }, []);

    return (
        // aside 패딩 안쪽을 기준으로 이미지를 겹쳐 배치하기 위한 래퍼
        <div className="relative w-full h-full">
            {images.map((src, index) => (
                <Image
                    key={src}
                    src={src}
                    alt={index === currentIndex ? `수나무 앱 화면 ${index + 1}` : ""}
                    aria-hidden={index !== currentIndex}
                    className={`absolute inset-0 m-auto object-contain rounded-lg transition-opacity duration-500 ease-in-out ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                    width={1000}
                    height={350}
                    priority={index === 0}
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
            ))}
        </div>
    );
}

export default function SoonamuPage() {
    return (
        <ProjectLayout
            subtitle="난산증 어린이들을 위한 App, 수나무. (25.02.24 ~ 25.05.22)"
            aside={<ImageSlideshow />}
        >
            {/* 프로젝트 개요 */}
            <p className="font-bold text-3xl">프로젝트 개요</p>
            <ul className="pl-8 text-2xl list-disc">
                <li>
                    <span className="font-bold">목표 :</span> 난산증 학생을 위한 맞춤형 수학 교육 플랫폼
                </li>
                <li>
                    <span className="font-bold">배경 :</span> BASA 프로그램의 디지털 전환을 통한 검사자 업무 부담 완화 및 학습 효율성 증대
                </li>
                <li>
                    <span className="font-bold">핵심 기능 :</span>
                    <div className="mt-2">
                        <table className="table-auto border border-gray-300 text-xl">
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
                    </div>
                </li>
            </ul>
            <br />

            {/* 담당 역할 및 기여 */}
            <p className="font-bold text-3xl">담당 역할 및 기여</p>
            <ul className="pl-8 text-2xl list-disc">
                <li>
                    <span className="font-bold">역할 :</span> 프론트엔드 개발 리드, 발표 기획
                </li>
                <li>
                    <span className="font-bold">기여 :</span>
                    <ul className="pl-8 list-disc text-xl mt-1">
                        <li>숫자 인식 기능 및 핵심 컴포넌트 제작</li>
                        <li>앱 디자인 총괄</li>
                    </ul>
                </li>
            </ul>
            <br />

            {/* 사용 기술/이유 */}
            <p className="font-bold text-3xl">사용 기술/이유</p>
            <ul className="pl-8 text-2xl list-disc">
                <li>
                    <span className="font-bold">주요 사용 기술 :</span> Flutter
                </li>
                <li>
                    <span className="font-bold">선택 배경 :</span>
                    <ul className="pl-8 list-disc text-xl mt-1">
                        <li>높은 접근성과 사용자 편의성 우선 고려</li>
                        <li>개발 기간을 고려한 크로스 플랫폼 선택</li>
                        <li>Flutter의 풍부한 커뮤니티</li>
                    </ul>
                </li>
            </ul>
            <br />

            {/* 주요 기여 내용 */}
            <p className="font-bold text-3xl">주요 기여 내용</p>
            <ul className="pl-8 text-2xl list-disc">
                <li className="mb-4">
                    <span className="font-semibold">재사용 가능한 컴포넌트 설계 및 개발</span>
                    <ul className="pl-8 list-disc text-xl mt-1">
                        <li>
                            <span className="font-medium">상세:</span> 프로젝트 요구사항을 분석하여 5개 유형으로 체계화하고, 그 중 <b>Drag & Drop</b>, <b>Drag & Drop 2</b>, <b>숫자 인식 컴포넌트</b>를 담당하여 모듈화된 컴포넌트 개발
                        </li>
                        <li>
                            <span className="font-medium">결과:</span> 코드 재사용성 향상 및 개발 효율성 극대화를 통한 개발 시간 30% 단축
                        </li>
                    </ul>
                </li>
                <li className="mb-4">
                    <span className="font-semibold">핵심 기능 아키텍처 설계 및 구현</span>
                    <ul className="pl-8 list-disc text-xl mt-1">
                        <li>
                            <span className="font-medium">1단계:</span> Google ML Kit를 활용한 기본 숫자 인식 기능 구현
                        </li>
                        <li>
                            <span className="font-medium">2단계:</span> 사용자 데이터 축적 후 개인화 모델 구축을 통한 숫자 인식 시스템 개발
                        </li>
                    </ul>
                </li>
                <li className="mb-4">
                    <span className="font-semibold">UI/UX 디자인 총괄</span>
                    <ul className="pl-8 list-disc text-xl mt-1">
                        <li>
                            <span className="font-medium">상세:</span> Figma 기반 앱 컬러 시스템 구축 및 문제 페이지 디자인 품질 관리
                        </li>
                    </ul>
                </li>
            </ul>
            <br />

            {/* 프로젝트 회고 및 인사이트 */}
            <p className="font-bold text-3xl">프로젝트 회고 및 인사이트</p>
            <ul className="pl-8 text-2xl list-disc">
                <li>
                    사용자 경험 최적화와 하드웨어 성능 요구사항 간의 균형점을 찾는 것이 핵심 과제였습니다. 특히 공익적 목적의 앱이라는 특성상 접근성을 보장하기 위해 기능의 우선순위를 명확히 하고, 목적에 부합하는 최적화된 솔루션을 구현하는 것의 중요성을 깨달았습니다.
                </li>
            </ul>
        </ProjectLayout>
    );
}
