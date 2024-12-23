## 초기 세팅

이 프로젝트는 다음 기술 스택을 사용합니다:

- **Vite JS**: 빠른 빌드 도구
- **React**: 사용자 인터페이스 라이브러리
- **TypeScript**: 정적 타입을 지원하는 자바스크립트
- **ESLint**: 코드 품질 및 일관성 유지
- **Prettier**: 코드 포매팅 도구
- **Path Alias**: 모듈 경로 단순화


### 폴더 구조
```
SIDE-PROJECT-HANDINHAND-ROOT/
├── public/             # 정적 리소스 (빌드 시 그대로 복사됨)
│   ├── favicon.ico     # 파비콘
│   └── .../
│
├── src
│    ├── assets # image,font(정적 파일) 관리
│    │     ├── img/
│    │     ├── font/
│    │     └── .../
│   ├── components/     # 컴포넌트 폴더
│   │   ├── Todo/       # 도메인(기능)별 컴포넌트 (예시)
│   │   │   ├── TodoList.tsx
│   │   │   └── TodoItem.tsx
│   │   └── common/         # 재사용 가능한 UI 컴포넌트
│   │   │   ├── Button/     # 버튼 컴포넌트 (예시)
│   │   │   │   ├── Button.tsx 
│   │   │   │   └── Button.styled.ts 
│   │   │   └── Input/      # Input 컴포넌트 (예시)
│   │   │       ├── Input.tsx
│   │   │       └── Input.styled.ts 
│   ├── supabase/       # Supabase 설정과 로직
│   │   ├── supabase-config.ts  # Supabase 초기화 설정 (예시)
│   │   ├── supabase-auth.ts    # Supabase 인증 로직 (예시)
│   │   ├── supabase-db.ts      # Supabase 데이터베이스 로직 (예시)
│   │   └── .../
│   ├── hooks/          # 커스텀 훅
│   │   ├── useAuth.ts          # 사용자 인증 상태를 가져오는 훅 (예시)
│   │   ├── useFetch.ts         # 데이터 페칭용 훅 (예시)
│   │   └── .../
│   ├── layouts/        # 페이지 레이아웃
│   │   ├── MainLayout.tsx      # 기본 레이아웃 (예시)
│   │   ├── AuthLayout.tsx      # 인증 페이지 전용 레이아웃 (예시)
│   │   └── .../
│   ├── pages/          # 라우트에 연결된 페이지 컴포넌트
│   │   ├── Home.tsx            # 홈 페이지 (예시)
│   │   ├── Login.tsx           # 로그인 페이지 (예시)
│   │   ├── NotFound.tsx        # 404 페이지 (예시)
│   │   └── .../
│   ├── router/         # 라우터 설정
│   │   ├── index.tsx   # React Router 설정
│   │   └── .../
│   ├── store/          # 상태 관리 로직
│   │   ├── index.ts            # Redux 스토어 설정
│   │   ├── authSlice.ts        # 사용자 인증 상태 관리 (예시)
│   │   └── .../
│   ├── styles/         # 전역 스타일 정의
│   │   ├── globalStyles.ts     # 글로벌 스타일 설정
│   │   ├── theme.ts            # Styled-Components 테마 정의
│   │   └── .../
│   ├── types/          # 타입스크립트 타입 정의
│   │   ├── api.ts              # 외부 API나 response 타입
│   │   ├── store.ts            # 상태관리 타입
│   │   ├── components.ts       # 공통 컴포넌트 타입
│   │   └── .../
│   ├── utils/          # 유틸리티 함수
│   │   ├── formatDate.ts       # 날짜 포맷 유틸리티
│   │   ├── debounce.ts         # 디바운스 함수
│   │   └── .../
│   ├── App.tsx         # App 컴포넌트
│   └── index.tsx       # ReactDOM 렌더링
├── .commitlintrc.json  # CommitLint 설정 파일
├── .eslintrc.cjs       # ESLint 설정 파일
├── .prettierrc         # Prettier 설정 파일
├── tsconfig.json       # TypeScript 설정 파일
├── tsconfig.node.json  # Node.js 환경 TypeScript 설정 파일
├── vite.config.ts      # Vite 설정 파일
├── .env                # 환경 변수 파일
├── package.json        # 패키지 및 종속성 정보
└── package-lock.json
```

### Commit & PR 컨벤션

컨벤션

- 커밋 컨벤션
   - ex ) feat: 홈페이지 스타일링 [#이슈번호]
   - feat : 새로운 기능 추가
   - fix : 버그 수정
   - docs : 문서 작성 및 수정
   - style : 마크업 및 스타일링
   - refactor : 코드 리펙토링
   - test : 테스트 코드, 리펙토링 테스트 코드 추가
   - setting : 빌드 업무 수정, 패키지 매니저 수정

- 브랜치 컨벤션
   - ex ) feat/login-signup-148
   - 이슈 브랜치에서 PR 올리면 검토 후 develop 브랜치로 병합

   - 함수 또는 클래스 이름 컨벤션
   - 본인만 아는 이름 사용 x
   - 함수, 변수 이름: Camel Case (ex. userName, handleOnclick)
   - 컴포넌트 이름: Pascal Case (ex. Button)

### 설치 방법

1. **레포지토리 클론**

   먼저, GitHub 레포지토리를 로컬에 클론합니다.

   ```bash
   git clone https://github.com/Hoonshi/Side-project-HandinHand.git
   cd Side-project-HandinHand
   ```
