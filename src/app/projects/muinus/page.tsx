import type { Metadata } from "next";
import ProjectLayout from "@/components/ProjectLayout";
import VideoSlideshow from "@/components/VideoSlideshow";
import { getProject } from "@/data/projects";

const project = getProject("muinus");

export const metadata: Metadata = {
    title: project.title,
    description: `${project.summary}, ${project.title} 프로젝트 소개`,
};

// public/muinus 폴더의 시연 영상 목록
const videoFiles = Array.from({ length: 8 }, (_, i) => `/muinus/${i + 1}.mp4`);

export default function MuinusPage() {
    return (
        <ProjectLayout
            project={project}
            index={0}
            media={<VideoSlideshow videos={videoFiles} poster={project.thumbnail} label="Muinus 서비스 시연 영상" />}
        >
            {/* 프로젝트 개요 */}
            <h2>프로젝트 개요</h2>
            <ul>
                <li>
                    <strong>목표 :</strong> 무인 아이스크림 매장 차별화 솔루션 개발
                </li>
                <li>
                    <strong>배경 :</strong> 포화된 무인매장 시장에서 차별화된 서비스로 점주 매출 증대 지원
                </li>
                <li>
                    <strong>핵심 기능 :</strong>
                    <ul className="feature-grid">
                        <li>위치 기반 매장 검색</li>
                        <li>제품별 매장 추천</li>
                        <li>디지털 쿠폰 시스템</li>
                        <li>실시간 점주 상담 서비스</li>
                    </ul>
                </li>
            </ul>

            {/* 담당 역할 및 기여 */}
            <h2>담당 역할 및 기여</h2>
            <ul>
                <li>
                    <strong>역할 :</strong> 서비스 기획 및 프론트엔드 개발 리드
                </li>
                <li>
                    <strong>기여 :</strong>
                    <ul>
                        <li>위치 기반 매장 검색 시스템 구현</li>
                        <li>효율적인 전역 상태 관리 아키텍처 설계</li>
                    </ul>
                </li>
            </ul>

            {/* 사용 기술/이유 */}
            <h2>사용 기술/이유</h2>
            <ul>
                <li>
                    <strong>주요 사용 기술 :</strong> React
                </li>
                <li>
                    <strong>선택 배경 :</strong>
                    <ul>
                        <li>높은 접근성과 사용자 편의성 우선 고려</li>
                        <li>앱 설치 없이 즉시 이용 가능한 웹 기반 서비스로 설계</li>
                        <li>크로스 플랫폼 호환성 확보</li>
                    </ul>
                </li>
            </ul>

            {/* 기여 내용 목록 */}
            <h2>기여 내용 목록</h2>
            <ul>
                <li>
                    <strong>카카오맵을 활용한 위치 기반 매장 검색 시스템</strong>
                    <ul>
                        <li>
                            <strong>상세:</strong> Geolocation API를 활용하여 사용자의 현재 위치를 기반으로 주변 등록 매장을 조회하는 기능 개발. 맵 로딩 성능 최적화를 위해 맵 객체를 전역변수로 관리
                        </li>
                        <li>
                            <strong>결과:</strong> 페이지 로딩 시간 평균 20% 단축으로 사용자 경험 개선
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>통합 키오스크 솔루션 개발</strong>
                    <ul>
                        <li>
                            <strong>상세:</strong> 매장 운영 효율성 향상을 위한 자체 키오스크 및 결제 시스템 구축, 바코드 스캔 기능을 포함한 재고 관리 연동 시스템 구현으로 플랫폼 생태계 강화
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>사용자 중심 UI/UX 설계</strong>
                    <ul>
                        <li>
                            화면 공간 최적화를 위한 레이어 기반 바텀 네비게이션 설계
                        </li>
                    </ul>
                </li>
            </ul>

            {/* 프로젝트 회고 및 성장 포인트 */}
            <h2>프로젝트 회고 및 성장 포인트</h2>
            <ul>
                <li>
                    프로젝트 진행 과정에서 기획 외 추가 요구사항에 대한 우선순위 설정과 팀원 간 합의 도출 경험을 통해 프로젝트 관리 및 커뮤니케이션 역량을 크게 향상시켰습니다. 제한된 개발 기간 내에서 프로젝트 목표와 팀원 요구사항 간의 균형점을 찾고, 이를 효과적으로 설득하고 조율하는 과정에서 리더십과 협업 능력을 배양할 수 있었습니다.
                </li>
            </ul>
        </ProjectLayout>
    );
}
