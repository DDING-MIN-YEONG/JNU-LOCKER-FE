# JNU-Locker

<div align="center">
<b>학생용 테스트 계정</b>

email : test@jnu.ac.kr

password : testpassword123!

<b>위원회용 테스트 계정</b>

email : test@example.com

password : abcde12345!

</div>

<div align="center">
  
<h1>프로젝트 소개</h1>
</div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/0ebf71c7-88a4-4c8f-b26c-7558a7980022" width="400"/>
</div>

## 목차<a id="목차"></a>

> - [🎯 기획 의도](#기획-의도)
> - [🌐 서비스 소개](#서비스-소개)
> - [🔗 배포 링크](#배포-링크)
> - [👥 팀원 소개](#팀원-소개)
> - [🖥️ 시스템 구조](#시스템-구조)
> - [🛠️ 기술 스택](#기술-스택)
> - [🌱 브랜치 관리 전략](#브랜치-관리-전략)
> - [🚀 주요 기능 소개](#주요-기능-소개)
> - [📚 자료 모음](#자료-모음)

| 내용          | 설명                                        |
| ------------- | ------------------------------------------- |
| 프로젝트 이름 | JNU-Locker                                  |
| 한줄 소개     | 전남대학교 학생들을 위한 사물함 신청 서비스 |
| 개발 기간     | 2025.03 - 진행중                            |

> <p align="center">전남대학교 사물함 신청 플랫폼입니다.</p>

## 🎯 기획 의도 <a id="기획-의도"></a>

기존에는 사물함 배정을 위해 특정 시간에 직접 줄을 서서 신청해야 하는 불편함이 있었으나, JNU-Locker를 통해서 시간과 장소에 구애받지 않고 사물함을 신청할 수 있게 되었습니다. 또한 학생회 입장에서도 사물함 신청 및 관리 업무를 더욱 체계적이고 편리하게 수행할 수 있습니다.

## 🌐 서비스 소개 <a id="서비스-소개"></a>

### ✨전남대학교 학생들이 온라인으로 간편하게 사물함을 신청하고, 학생회가 효율적으로 관리할 수 있는 통합 플랫폼✨

#### 🔐 회원가입 및 학생 인증

◦ 전남대학교 학생만 이용할 수 있도록 학교 이메일(@jnu.ac.kr) 형식에 대한 유효성 검사를 실시합니다.

◦ 실제 학생임을 인증하기 위해 입력된 학교 이메일로 인증 코드를 발송하여, 본인 확인 절차를 거쳐 서비스 이용 자격을 검증합니다.

◦ 이를 통해 학교 구성원만이 안전하게 서비스를 이용할 수 있는 환경을 조성하였습니다.

#### 🔑 인증/인가

◦ Access Token과 Refresh Token을 사용하여 사용자 정보가 탈취되었을 때 위험을 줄이고 Refresh Token으로 Access Token을 갱신하여 로그인 상태를 안전하게 유지하여 불필요한 로그인 없이 편리한 사용자 경험을 제공합니다.

<br>

#### ✏️ 공지사항

◦ 학생회는 공지사항 작성 기능을 통해 사물함 이용 규칙, 중요 일정들을 학생들에게 전달할 수 있고 수정할 수 있습니다.

◦ 학생들은 학과 정보 페이지에서 학생회가 작성한 공지사항을 한눈에 확인할 수 있고 과거 공지사항 내역을 쉽게 찾아볼 수 있습니다.

<br>

#### 🗨️ 이벤트

◦ 학생회는 이벤트 생성 기능을 통해 사물함 신청에 관한 이벤트의 제목, 신청 기간, 사용 가능한 사물함 정보를 설정할 수 있고 생성된 이벤트는 언제든지 수정이 가능합니다.

◦ 학생들은 학과 정보 페이지에서 학생회가 생성한 이벤트를 한눈에 확인할 수 있고 과거 이벤트 내역을 쉽게 찾아볼 수 있습니다.

<br>

#### 📜 신청 목록

◦ 학생회는 사물함 이벤트 신청 목록을 한눈에 확인할 수 있습니다.

<br>

#### 💻 반응형 웹

◦ 데스크톱, 태블릿, 모바일까지 모든 화면 크기에 최적화된 반응형 웹 디자인을 적용하여 접근성을 향상시켰습니다.

<br>

## 🔗 배포 링크 <a id="배포-링크"></a>

학생용 메인 페이지 : https://www.jnu-locker.site/

<br>

학생회용 메인 페이지 : https://www.jnu-locker.site/committee

## 👥 팀원 소개 <a id="팀원-소개"></a>

<h3 align="center">백엔드</h3>

<div align="center">

| [강명덕](https://github.com/Profile-exe)                                                                | [서영우](https://github.com/westzeroright)                                                              |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/user-attachments/assets/871df70d-b8d1-47cb-8ce6-ed29e2d3e9d5" width="100"> | <img src="https://github.com/user-attachments/assets/1eb63d83-6bef-493f-9ad0-6bd3eabfcdda" width="100"> |

</div>

<h3 align="center">프론트엔드</h3>

<div align="center">

| [심민보](https://github.com/smb0123)                                                                    |
| ------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/user-attachments/assets/e73c9af5-3d47-4a66-a2b6-cc7c94af1fc9" width="100"> |

</div>

## 🖥️ 시스템 구조 <a id="시스템-구조"></a>

### FE 시스템 구조

```
 ┣ public
 ┃ ┣ fonts        # 폰트
 ┃ ┣ icons        # 아이콘
 ┃ ┗ images        # 이미지
 ┣ src
 ┃ ┣ api          # API 관련 로직
 ┃ ┃ ┣ committee  # 학생회 관련 API
 ┃ ┃ ┣ student    # 학생 관련 API
 ┃ ┃ ┣ common     # 공통 API
 ┃ ┃ ┣ instance   # axios 인스턴스
 ┃ ┃ ┗ dtos       # DTO
 ┃ ┣ app   # 페이지
 ┃ ┣ components   # 컴포넌트
 ┃ ┃ ┣ common     # 공통 컴포넌트
 ┃ ┃ ┣ design-system     # 디자인 시스템
 ┃ ┃ ┗ Layout   # 레이아웃 관련 컴포넌트
 ┃ ┣ constants    # 상수
 ┃ ┣ functions        # 기능적 함수
 ┃ ┣ hooks        # 커스텀 훅
 ┃ ┣ styles       # 전역 스타일
 ┃ ┣ types        # TypeScript 타입 정의
 ┃ ┗ utils        # 유틸리티 함수

```

## 🛠️ 기술 스택 <a id="기술-스택"></a>

<div>
<img src="https://img.shields.io/badge/Next.js-61DAFB?style=for-the-badge&logo=Next.js&logoColor=white">
<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/-tanstack--query-FF4154?style=for-the-badge&logo=react-query&logoColor=white">
<img src="https://img.shields.io/badge/SCSS-61DAFB?style=for-the-badge&logo=SCSS&logoColor=white">

</div>

## 🌱 브랜치 관리 전략 <a id="브랜치-관리-전략"></a>

### 브랜치 구조

- **main 브랜치**
  - 배포 가능한 최종 코드를 관리하는 브랜치로, 안정화된 코드만 머지합니다.
- **dev 브랜치**
  - 개발 중인 기능을 통합하는 브랜치입니다.
- **feature 브랜치**
  - dev 브랜치에서 각 기능을 개발하기 위한 브랜치로, 팀원들의 상호 코드리뷰를 진행할 수 있습니다.
- **hotfix 브랜치**
  - 긴급한 버그나 오류 수정이 필요할 때 사용하는 브랜치입니다.

### 협업 플로우

<img width="500" alt="브랜치전략" src="https://github.com/user-attachments/assets/ec840dc7-2809-4997-ad09-8743fb6091d6">

- 위의 협업 플로우 차트는 팀원들이 협력하는 방식과 브랜치 간 관계를 나타냅니다.

### Git 작업 단위

1. **브랜치 생성**
   - 작업을 시작하기 위해 팀 저장소의 최신 코드를 로컬로 가져오고, 새로운 기능을 위한 브랜치를 생성합니다.
2. **커밋(Commit)**
   - [커밋 컨벤션](https://github.com/DDING-MIN-YEONG/JNU-LOCKER-FE/wiki/Git#commit-%EC%BB%A8%EB%B2%A4%EC%85%98)에 따라 커밋 메시지를 작성합니다.
3. **푸시(Push)**
   - 로컬 작업을 완료한 후 원격 브랜치로 푸시합니다.
4. **PR(Pull Request) 생성**

   - 팀원들에게 코드 검토를 요청하기 위해 PR을 생성하고, 일관된 PR 템플릿을 사용합니다.

5. **리뷰 및 피드백**
   - 팀원들이 PR을 확인하고 코드 리뷰를 진행합니다. 피드백이 있을 경우, 반영 후 커밋하여 PR을 업데이트 합니다.
6. **병합(Merge)**
   - 리뷰가 완료되고 `Merge Commit` 전략으로 병합합니다.

#### 위키 링크 연결해야함.

## 🚀 주요 기능 소개 <a id="주요-기능-소개"></a>

<div align="center">

| 기능                        | 이미지                                                                                                                | 설명                                                                                                                                                                                             |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **회원가입**                | <img src="https://github.com/user-attachments/assets/9886fac9-bab6-4b9d-b2e0-9d8e96fbfda9" width="300"/>              | 전남대학교 학생만 이용할 수 있도록 이메일 input에 유효성 검사를 하였고 실제 학생임을 인증하기 위해서 해당 이메일로 인증 코드를 발송하여 인증하게 하여 학생만 서비스를 이용할 수 있게 하였습니다. |
| **학과 정보 페이지**        | <img src="https://github.com/user-attachments/assets/936e5f74-7ceb-402f-b3f1-c74988904f50" width="300"/>              | 자신의 학과에 해당하는 공지 사항과 사물함 신청 이벤트에 대한 정보를 확인할 수 있습니다.                                                                                                          |
| **사물함 신청 페이지**      | <img src="https://github.com/user-attachments/assets/458e8123-e843-4dc2-b055-93d148b3b364" width="300"/> | 학생은 사물함 번호를 확인할 수 있고 사물함을 신청할 수 있습니다. 또한 자신이 신청한 사물함에 대해 확인하고 취소할 수 있습니다.                                                                   |
| **사물함 신청 현황 페이지** | <img src="https://github.com/user-attachments/assets/82146a3e-1371-43c8-9961-e6a6026e51c2" width="300"/> | 위원회는 특정 이벤트에 대하여 사물함 신청 현황을 확인할 수 있습니다.                                                                                                                             |
| **공지사항 생성 페이지**    | <img src="https://github.com/user-attachments/assets/4d01afad-e8b9-4e90-b5f6-2532dbfe8a99" width="300" height="150"/> | 위원회는 공지사항을 생성할 수 있습니다. 공지사항 생성에는 제목, 내용, 공지사항 참여 학과에 대한 정보를 입력할 수 있습니다.                                                                       |
| **이벤트 생성 페이지**      | <img src="https://github.com/user-attachments/assets/015d022c-7e6a-4913-9366-262322b69298" width="300" height="150"/> | 위원회는 이벤트를 생성할 수 있습니다. 이벤트 생성에는 제목, 생성 시작 시간, 생성 마감 시간, 사물함 신청 참여 학과, 사물함에 대한 층, 접두사, 범위에 대한 정보를 입력할 수 있습니다.              |     

</div>

## 📚 자료 모음 <a id="자료-모음"></a>

<div>
📙 [Swagger 문서](https://api.dev.jnu-locker.site/swagger-ui/index.html)
<br>
📝 [팀 노션](https://westzeroright.notion.site/19f0a6bd00e680769aedc4ce443a6f53?pvs=4)
<br>

</div>

## How to Start

```bash
# 저장소 복제
git clone https://github.com/DDING-MIN-YEONG/JNU-LOCKER-FE.git

# 종속성 설치
npm install

# 개발 서버 실행
npm start

# 프로덕션 빌드
npm run build

```
