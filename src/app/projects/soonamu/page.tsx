import type { Metadata } from "next";
import ImageSlideshow from "@/components/ImageSlideshow";
import ProjectLayout from "@/components/ProjectLayout";
import { getProject } from "@/data/projects";

const project = getProject("soonamu");

export const metadata: Metadata = {
    title: project.title,
    description: `${project.summary}, ${project.title} 프로젝트 소개`,
};

// public/soonamu 폴더의 앱 화면 이미지 목록
const images = Array.from({ length: 8 }, (_, i) => `/soonamu/${i + 1}.png`);

export default function SoonamuPage() {
    return (
        <ProjectLayout
            project={project}
            index={1}
            media={<ImageSlideshow images={images} label="수나무 앱 화면" />}
        >
            {/* 프로젝트 개요 */}
            <h2>프로젝트 개요</h2>
            <ul>
                <li>
                    <strong>목표 :</strong> 난산증 학생을 위한 맞춤형 수학 교육 플랫폼
                </li>
                <li>
                    <strong>배경 :</strong> BASA 프로그램의 디지털 전환을 통한 검사자 업무 부담 완화 및 학습 효율성 증대
                </li>
                <li>
                    <strong>핵심 기능 :</strong>
                    <ul className="feature-grid">
                        <li>숫자 인식 기능</li>
                        <li>통계 페이지 제공</li>
                        <li>자동 채점 및 오류 분석</li>
                        <li>개인별 맞춤 학습 제공</li>
                    </ul>
                </li>
            </ul>

            {/* 담당 역할 및 기여 */}
            <h2>담당 역할 및 기여</h2>
            <ul>
                <li>
                    <strong>역할 :</strong> 프론트엔드 개발 리드, 발표 기획
                </li>
                <li>
                    <strong>기여 :</strong>
                    <ul>
                        <li>숫자 인식 기능 및 핵심 컴포넌트 제작</li>
                        <li>앱 디자인 총괄</li>
                    </ul>
                </li>
            </ul>

            {/* 사용 기술/이유 */}
            <h2>사용 기술/이유</h2>
            <ul>
                <li>
                    <strong>주요 사용 기술 :</strong> Flutter
                </li>
                <li>
                    <strong>선택 배경 :</strong>
                    <ul>
                        <li>높은 접근성과 사용자 편의성 우선 고려</li>
                        <li>개발 기간을 고려한 크로스 플랫폼 선택</li>
                        <li>Flutter의 풍부한 커뮤니티</li>
                    </ul>
                </li>
            </ul>

            {/* 주요 기여 내용 */}
            <h2>주요 기여 내용</h2>
            <ul>
                <li>
                    <strong>재사용 가능한 컴포넌트 설계 및 개발</strong>
                    <ul>
                        <li>
                            <strong>상세:</strong> 프로젝트 요구사항을 분석하여 5개 유형으로 체계화하고, 그 중 <b>Drag & Drop</b>, <b>Drag & Drop 2</b>, <b>숫자 인식 컴포넌트</b>를 담당하여 모듈화된 컴포넌트 개발
                        </li>
                        <li>
                            <strong>결과:</strong> 코드 재사용성 향상 및 개발 효율성 극대화를 통한 개발 시간 30% 단축
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>핵심 기능 아키텍처 설계 및 구현</strong>
                    <ul>
                        <li>
                            <strong>1단계:</strong> Google ML Kit를 활용한 기본 숫자 인식 기능 구현
                        </li>
                        <li>
                            <strong>2단계:</strong> 사용자 데이터 축적 후 개인화 모델 구축을 통한 숫자 인식 시스템 개발
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>UI/UX 디자인 총괄</strong>
                    <ul>
                        <li>
                            <strong>상세:</strong> Figma 기반 앱 컬러 시스템 구축 및 문제 페이지 디자인 품질 관리
                        </li>
                    </ul>
                </li>
            </ul>

            {/* 프로젝트 회고 및 인사이트 */}
            <h2>프로젝트 회고 및 인사이트</h2>
            <ul>
                <li>
                    사용자 경험 최적화와 하드웨어 성능 요구사항 간의 균형점을 찾는 것이 핵심 과제였습니다. 특히 공익적 목적의 앱이라는 특성상 접근성을 보장하기 위해 기능의 우선순위를 명확히 하고, 목적에 부합하는 최적화된 솔루션을 구현하는 것의 중요성을 깨달았습니다.
                </li>
            </ul>
        </ProjectLayout>
    );
}
