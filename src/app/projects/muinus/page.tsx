"use client";
import { useState } from 'react';

// public/muinus 폴더에 있는 비디오 파일 목록
const videoFiles = [
    '/muinus/1.MP4',
    '/muinus/2.MP4',
    '/muinus/3.MP4',
    '/muinus/4.MP4',
    '/muinus/5.MP4',
    '/muinus/6.MP4',
    '/muinus/7.MP4',
    '/muinus/8.MP4',
];

/**
 * 비디오를 순차적으로 자동 재생하는 컴포넌트
 */
function VideoSlideshow() {
    // 현재 재생 중인 비디오의 인덱스를 관리하는 상태
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    // 비디오 재생이 끝나면 호출되는 함수
    const handleVideoEnded = () => {
        // 다음 비디오 인덱스로 변경 (마지막 비디오면 처음으로 돌아감)
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoFiles.length);
    };

    return (
        <video
            // key를 변경하여 React가 비디오 태그를 새로 렌더링하도록 함 (안정적인 재생 전환)
            key={currentVideoIndex}
            src={videoFiles[currentVideoIndex]}
            autoPlay  // 자동 재생
            muted     // 자동 재생을 위해 필수 (브라우저 정책)
            onEnded={handleVideoEnded} // 재생이 끝나면 다음 비디오 재생
            controls={false} // 컨트롤러 숨김
            className="object-cover rounded-lg"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
    );
}

export default function MuinusPage() {
    // 헤더 높이(px)
    const HEADER_HEIGHT = 110;

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
                        <p className="text-3xl">무인 편의점 플랫폼, Muinus. (25.01.06 ~ 25.02.21)</p>
                    </div>
                    <hr className="border-white border-2" />
                </div>
            </div>

            {/* 본문 + 비디오 */}
            <div
                className="flex w-full"
                style={{
                    paddingTop: HEADER_HEIGHT, // 헤더만큼 아래로 내림
                    height: `calc(100vh - 0px)`, // 전체 높이
                }}
            >
                {/* 본문: 스크롤 가능 */}
                <main className="flex-1 overflow-y-auto p-8 text-2xl bg-black">
                    {/* 프로젝트 개요 */}
                    <p className="font-bold text-3xl">프로젝트 개요</p>
                    <ul className="pl-8 text-2xl list-disc">
                        <li>
                            <span className="font-bold">목표 :</span> 무인 아이스크림 매장 차별화 솔루션 개발
                        </li>
                        <li>
                            <span className="font-bold">배경 :</span> 포화된 무인매장 시장에서 차별화된 서비스로 점주 매출 증대 지원
                        </li>
                        <li>
                            <span className="font-bold">핵심 기능 :</span>
                            <div className="mt-2">
                                <table className="min-w-max table-auto border border-gray-300 text-xl">
                                    <tbody>
                                    <tr>
                                        <td className="border px-4 py-2 text-center">위치 기반 매장 검색</td>
                                        <td className="border px-4 py-2 text-center">제품별 매장 추천</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2 text-center">디지털 쿠폰 시스템</td>
                                        <td className="border px-4 py-2 text-center">실시간 점주 상담 서비스</td>
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
                            <span className="font-bold">역할 :</span> 서비스 기획 및 프론트엔드 개발 리드
                        </li>
                        <li>
                            <span className="font-bold">기여 :</span>
                            <ul className="pl-8 list-disc text-xl mt-1">
                                <li>위치 기반 매장 검색 시스템 구현</li>
                                <li>효율적인 전역 상태 관리 아키텍처 설계</li>
                            </ul>
                        </li>
                    </ul>
                    <br />

                    {/* 사용 기술/이유 */}
                    <p className="font-bold text-3xl">사용 기술/이유</p>
                    <ul className="pl-8 text-2xl list-disc">
                        <li>
                            <span className="font-bold">주요 사용 기술 :</span> React
                        </li>
                        <li>
                            <span className="font-bold">선택 배경 :</span>
                            <ul className="pl-8 list-disc text-xl mt-1">
                                <li>높은 접근성과 사용자 편의성 우선 고려</li>
                                <li>앱 설치 없이 즉시 이용 가능한 웹 기반 서비스로 설계</li>
                                <li>크로스 플랫폼 호환성 확보</li>
                            </ul>
                        </li>
                    </ul>
                    <br />

                    {/* 기여 내용 목록 */}
                    <p className="font-bold text-3xl">기여 내용 목록</p>
                    <ul className="pl-8 text-2xl list-disc">
                        <li className="mb-4">
                            <span className="font-semibold">카카오맵을 활용한 위치 기반 매장 검색 시스템</span>
                            <ul className="pl-8 list-disc text-xl mt-1">
                                <li>
                                    <span className="font-medium">상세:</span> Geolocation API를 활용하여 사용자의 현재 위치를 기반으로 주변 등록 매장을 조회하는 기능 개발. 맵 로딩 성능 최적화를 위해 맵 객체를 전역변수로 관리
                                </li>
                                <li>
                                    <span className="font-medium">결과:</span> 페이지 로딩 시간 평균 20% 단축으로 사용자 경험 개선
                                </li>
                            </ul>
                        </li>
                        <li className="mb-4">
                            <span className="font-semibold">통합 키오스크 솔루션 개발</span>
                            <ul className="pl-8 list-disc text-xl mt-1">
                                <li>
                                    <span className="font-medium">상세:</span> 매장 운영 효율성 향상을 위한 자체 키오스크 및 결제 시스템 구축, 바코드 스캔 기능을 포함한 재고 관리 연동 시스템 구현으로 플랫폼 생태계 강화
                                </li>
                            </ul>
                        </li>
                        <li className="mb-4">
                            <span className="font-semibold">사용자 중심 UI/UX 설계</span>
                            <ul className="pl-8 list-disc text-xl mt-1">
                                <li>
                                    화면 공간 최적화를 위한 레이어 기반 바텀 네비게이션 설계
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <br />

                    {/* 프로젝트 회고 및 성장 포인트 */}
                    <p className="font-bold text-3xl">프로젝트 회고 및 성장 포인트</p>
                    <ul className="pl-8 text-2xl list-disc">
                        <li>
                            프로젝트 진행 과정에서 기획 외 추가 요구사항에 대한 우선순위 설정과 팀원 간 합의 도출 경험을 통해 프로젝트 관리 및 커뮤니케이션 역량을 크게 향상시켰습니다. 제한된 개발 기간 내에서 프로젝트 목표와 팀원 요구사항 간의 균형점을 찾고, 이를 효과적으로 설득하고 조율하는 과정에서 리더십과 협업 능력을 배양할 수 있었습니다.
                        </li>
                    </ul>
                </main>

                {/* 비디오: 오른쪽에 고정 */}
                <aside
                    className="w-1/3 hidden lg:flex justify-center items-center p-8"
                    style={{
                        position: "sticky",
                        top: HEADER_HEIGHT,
                        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
                        minWidth: 0,
                    }}
                >
                    {/* 여기에 비디오 슬라이드쇼 컴포넌트를 삽입 */}
                    <VideoSlideshow />
                </aside>
            </div>
        </div>
    );
}
