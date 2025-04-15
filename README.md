## 프로젝트 소개

영차는 영화나 드라마의 평가를 작성하고 다른 사람의 평가를 볼 수 있는 리뷰 플랫폼입니다.

## 🔧 기술 스택

<div align="center">

|       Type       |                                                                                                           Tool                                                                                                           |
| :--------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     Library      |   ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)   |
|     Language     |                                                 ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)                                                 |
|     Styling      |                                          ![Styled Components](https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)                                           |
|       BaaS       |                                                       ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)                                                        |
| State Management |                                                             ![Zustand](https://img.shields.io/badge/🐻%20Zustand-81c147?style=for-the-badge&logoColor=white)                                                             |
|  Data Fetching   |                                                ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)                                                 |
|    Formatting    | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black) |
| Package Manager  |                                                           ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)                                                            |
| Version Control  |     ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)     |
|  Collaboration   |     ![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white) ![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)      |

</div>

&nbsp;

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

- **커밋 컨벤션**

  - ex ) feat: 홈페이지 스타일링 [#이슈번호]
  - feat : 새로운 기능 추가
  - fix : 버그 수정
  - docs : 문서 작성 및 수정
  - style : 마크업 및 스타일링
  - refactor : 코드 리펙토링
  - test : 테스트 코드, 리펙토링 테스트 코드 추가
  - setting : 빌드 업무 수정, 패키지 매니저 수정

- **브랜치 컨벤션**

  - ex ) feat/login-signup-148
  - 이슈 브랜치에서 PR 올리면 검토 후 develop 브랜치로 병합

  - 함수 또는 클래스 이름 컨벤션
  - 본인만 아는 이름 사용 x
  - 함수, 변수 이름: Camel Case (ex. userName, handleOnclick)
  - 컴포넌트 이름: Pascal Case (ex. Button)

- **폴더 이름 컨벤션**
  - kebab-case (ex. common-ui)

### 품질 관리

- **ESLint**: 정적 코드 분석을 통해 잠재적 문제를 감지하고 일관된 코드 품질을 보장합니다.
- **Prettier**: 개발자가 작성한 코드를 자동으로 포맷팅하여 프로젝트 전반에 걸쳐 일관된 코드 스타일을 유지합니다.
- **Commitlint**: 커밋 메시지가 정해진 규칙을 따르도록 검사하여 명확하고 일관된 커밋 히스토리를 관리합니다.
- **Husky**: Git Hooks를 통해 커밋 전 린트 검사, 푸시 전 테스트 실행 등 자동화된 품질 검사를 수행합니다.

&nbsp;

### 설치 방법

1. **레포지토리 클론**

   GitHub 레포지토리를 로컬에 클론합니다.

   ```bash
   git clone https://github.com/Hoonshi/Side-project-HandinHand.git
   cd Side-project-HandinHand
   ```

## 📆 프로젝트 진행 과정

### 기획 (2024.12.06 ~ 2024.12.23)

프로젝트의 방향성을 설정하고 핵심 기능을 정의하는 시간을 가졌습니다. 팀원들과 함께 요구사항 명세서를 작성하고 서비스 플로우를 구체화했습니다.

### [와이어프레임](https://www.figma.com/design/c1FkQiFQ8nVjxH7ZRbG9l5/%EC%86%90%EC%97%90%EC%86%90%EC%9E%A1%EA%B3%A0?node-id=0-1&p=f&t=NZ8WNOOVIje5VSlb-0) 제작 (2024.12.17 ~ 2024.12.23)

정의된 기능 명세를 바탕으로 Figma를 활용하여 와이어프레임을 제작했습니다. 프로젝트의 일관성을 위해 디자인 시스템을 구축하고 컴포넌트를 설계했습니다.

### 개발 및 퍼블리싱 (2024.12.23 ~ 2025.01.03)

설계된 와이어프레임을 기반으로 핵심 기능을 구현했습니다. 재사용 가능한 UI 컴포넌트들을 직접 설계하고 개발한 후, 세부 기능을 단계적으로 구현했습니다. 매주 스크럼을 통해 진행 상황을 공유하고, 팀원 간 적극적인 코드 리뷰를 진행했습니다. 또한 필요 시, 각 팀원들 간의 DM 및 Zoom 소회의실을 활용한 의견 공유를 통해 문제를 해결해 나갔습니다.

### Supabase 연동 (2025.01.03 ~ 2025.01.22)

Supabase를 BaaS(Backend as a Service)로 도입하여 내장 메서드를 활용한 API를 설계했습니다. 또한 TMDB API를 사용하여 영화, 시리즈 데이터를 사용하였고, 이를 TanStack Query와 연동해 효율적인 데이터 페칭과 상태 관리를 구현했습니다.

&nbsp;

## 손에 손잡고

| [![Chajaesik01](https://avatars.githubusercontent.com/u/127061507?v=4)](http://github.com/Chajaesik01) |            [![Hoonshi](https://avatars.githubusercontent.com/u/182200395?v=4)](https://github.com/Hoonshi)             |                          [![park-chan-hui](https://avatars.githubusercontent.com/u/176368439?v=4)](https://github.com/park-chan-hui)                          | [![duwlsssss](https://avatars.githubusercontent.com/u/92291790?v=4)](https://github.com/duwlsssss) | [![anhyeryeon2](https://avatars.githubusercontent.com/u/100520490?v=4)](https://github.com/anhyeryeon2) |     |
| :----------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: | :-: |
|                              **[차재식](http://github.com/Chajaesik01)**                               |                                        **[전영훈](https://github.com/Hoonshi)**                                        |                                                        **[박찬희](https://github.com/park-chan-hui)**                                                         |                             **[김여진](https://github.com/duwlsssss)**                             |                              **[안혜련](https://github.com/anhyeryeon2)**                               |
|                 디자인 토큰 세팅 <br /> 메인페이지, 유저 리뷰 페이지 퍼블리싱 및 개발                  | 개발 환경 구축, 공통 컴포넌트 제작(별점, 헤더) <br /> 영화, 시리즈 상세페이지 <br /> 검색 결과 페이지 퍼블리싱 및 개발 | 개발 환경 구축, 공통 컴포넌트 제작(포스터 박스, 스켈레톤 - 영화 시리즈, 즐겨찾기, 보관함) <br /> 영화, 시리즈 페이지 <br /> 댓글 상세 페이지 퍼블리싱 및 개발 | supabase 세팅, supabase 소셜 로그인 연동 <br /> 로그인 페이지, 프로필 수정 페이지 퍼블리싱 및 개발 |   공통 컴포넌트 제작(버튼, 인풋, 프로필 박스) <br /> 즐겨찾기 페이지, 보관함 페이지 퍼블리싱 및 개발    |
