# CLAUDE.md

이수호 포트폴리오 사이트 (Next.js 15 App Router, React 19, TypeScript, Tailwind CSS v4). 구조와 디자인은 README.md 참고.

## 명령어

- 패키지 매니저는 **npm만** 사용 (yarn.lock 없음)
- `npm run build`: 빌드 + 타입 체크 + lint
- `npm run dev` / `npm run start`

## 작업 규칙

- PR이 병합된 뒤 후속 작업은 **최신 main에서 브랜치를 다시 시작**할 것. 병합된 브랜치에 계속 커밋하면 충돌이 남 (PR #3에서 발생)
- PR 병합 방식은 **merge commit** 사용
- 변경 후 `npm run build`와 실제 화면 확인(Playwright 스크린샷)으로 검증하고, Vercel 미리보기 배포 성공을 확인한 뒤 병합
- 프로젝트 소개 문구는 사용자가 작성한 내용이므로, 새 문구를 추가하거나 바꿀 때는 사용자에게 확인
- 애니메이션은 `prefers-reduced-motion`을 따르고, JS 없이도 콘텐츠가 보여야 함

## 배포와 도메인

- Vercel이 GitHub `main`을 자동 배포
- 도메인 `sooho.me`: 가비아 DNS 사용, `@`는 Vercel A 레코드, `www`는 Vercel CNAME. `sooho.me`로 접속하면 `www.sooho.me`로 리디렉트
- 2026-09-30 연결 직후 "안전하지 않음"(이전 소유자의 만료된 인증서)이 보였던 문제는 **일시적 현상으로 해결됨**. 실제 서버는 Vercel 발급 인증서를 정상 제공(SSL Labs A+). 같은 증상이 다시 보이면 먼저 사용자 기기의 DNS 캐시를 의심할 것

## 원격 작업 환경 참고

- Playwright의 Chromium은 H.264를 재생하지 못함. 영상 재생 여부는 실제 브라우저에서 확인해야 함 (영상은 H.264로 인코딩되어 있음)
- 외부 HTTPS는 프록시를 거치므로 실제 인증서를 직접 볼 수 없음. SSL Labs API와 crt.sh로 확인
- `dig`가 없음. DNS 조회는 `https://dns.google/resolve?name=...&type=...` 사용
