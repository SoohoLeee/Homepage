# Sooho Lee · Portfolio

프론트엔드 개발자 **이수호**의 개인 포트폴리오 웹사이트입니다.
자기소개, 연락처, 학력, 프로젝트, 기술 스택을 한 곳에서 보여줍니다.

## 페이지 구성

| 경로 | 내용 |
| --- | --- |
| `/` | 메인 페이지. 스크롤에 따라 전환되는 히어로 섹션과 About, Contacts, Edu, Projects, Tech Stack 카드 |
| `/projects/muinus` | **Muinus** – 무인 편의점 플랫폼 (React). 프로젝트 개요, 역할, 기여 내용, 시연 영상 |
| `/projects/soonamu` | **수나무** – 난산증 어린이를 위한 교육 앱 (Flutter). 프로젝트 개요, 역할, 기여 내용, 앱 화면 슬라이드 |
| `/techstack` | 사용 기술과 숙련도 (JavaScript, TypeScript, React, Dart, Flutter, Figma) |

## 기술 스택

- **Framework**: Next.js 15 (App Router), React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Geist (`next/font`)

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx            # 공통 레이아웃, 메타데이터
│   ├── page.tsx              # 메인 페이지
│   ├── globals.css           # 전역 스타일
│   ├── techstack/page.tsx    # 기술 스택 페이지
│   └── projects/
│       ├── muinus/page.tsx   # Muinus 프로젝트 상세
│       └── soonamu/page.tsx  # 수나무 프로젝트 상세
└── components/
    └── ProjectLayout.tsx     # 프로젝트 상세 페이지 공통 레이아웃
public/
├── selfie.png                # 프로필 사진
├── icon/                     # 기술 스택 아이콘
├── muinus/                   # Muinus 시연 영상
└── soonamu/                  # 수나무 앱 화면
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
