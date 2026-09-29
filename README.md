# Sooho Lee · Portfolio

프론트엔드 개발자 **이수호**의 개인 포트폴리오 웹사이트입니다.
자기소개, 연락처, 학력, 프로젝트, 기술 스택을 한 곳에서 보여줍니다.

## 페이지 구성

| 경로 | 내용 |
| --- | --- |
| `/` | 메인 페이지. 키네틱 타이포그래피 히어로와 벤토 그리드(소개, 연락처, 프로젝트, 학력, 기술 스택) |
| `/projects/muinus` | **Muinus** – 무인 편의점 플랫폼 (React). 프로젝트 개요, 역할, 기여 내용, 시연 영상 |
| `/projects/soonamu` | **수나무** – 난산증 어린이를 위한 교육 앱 (Flutter). 프로젝트 개요, 역할, 기여 내용, 앱 화면 슬라이드 |
| `/techstack` | 사용 기술과 숙련도 (JavaScript, TypeScript, React, Dart, Flutter, Figma) |

## 디자인

- **Low Light 팔레트**: 낮은 대비의 차분한 다크 톤과 은은한 하이라이트
- **블러 & 그레인**: 번지는 배경 광원과 노이즈 텍스처로 깊이감 표현
- **벤토 그리드**: 메인 페이지 정보를 크기가 다른 카드로 구성
- **키네틱 타이포그래피**: 제목이 단어 단위로 떠오르며 등장
- 모든 애니메이션은 OS의 `모션 줄이기` 설정을 따르며, JavaScript가 꺼져 있어도 콘텐츠가 보입니다.

## 기술 스택

- **Framework**: Next.js 15 (App Router), React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Geist, Noto Sans KR (`next/font`)

페이지는 서버 컴포넌트로 정적 생성하고, 스크롤 등장 효과·슬라이드쇼처럼 브라우저 동작이 필요한 부분만 클라이언트 컴포넌트로 분리했습니다.

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx               # 공통 레이아웃, 폰트, 메타데이터, 배경 효과
│   ├── page.tsx                 # 메인 페이지
│   ├── globals.css              # 디자인 토큰, 배경·모션 효과, 상세 본문 스타일
│   ├── techstack/page.tsx       # 기술 스택 페이지
│   └── projects/
│       ├── muinus/page.tsx      # Muinus 프로젝트 상세
│       └── soonamu/page.tsx     # 수나무 프로젝트 상세
├── components/
│   ├── ProjectLayout.tsx        # 프로젝트 상세 공통 레이아웃
│   ├── SiteNav.tsx              # 서브 페이지 상단 내비게이션
│   ├── Reveal.tsx               # 스크롤 진입 시 등장 효과 (클라이언트)
│   ├── VideoSlideshow.tsx       # 시연 영상 순차 재생 (클라이언트)
│   └── ImageSlideshow.tsx       # 이미지 크로스페이드 슬라이드 (클라이언트)
└── data/
    ├── projects.ts              # 프로젝트 정보 (카드·상세 헤더 공용)
    └── techStacks.ts            # 기술 스택 목록
public/
├── selfie.png                   # 프로필 사진
├── icon/                        # 기술 스택 아이콘
├── muinus/                      # Muinus 시연 영상(H.264), 썸네일
└── soonamu/                     # 수나무 앱 화면
```

## 실행 방법

```bash
npm install     # 의존성 설치
npm run dev     # 개발 서버 실행 (http://localhost:3000)
npm run build   # 프로덕션 빌드
npm run start   # 빌드 결과 실행
npm run lint    # 린트 검사
```

## 연락처

- E-mail: soohobiz96@gmail.com
