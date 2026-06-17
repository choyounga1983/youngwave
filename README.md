# Young Wave Creative — Website

한국과 동남아(아세안)를 잇는 인플루언서 마케팅 에이전시 **Young Wave Creative**의 공식 웹사이트입니다.
정적(static) 사이트라 별도 서버 없이 바로 동작하며, GitHub Pages로 무료 배포할 수 있습니다.

---

## 미리보기

`index.html` 파일을 브라우저로 열면 바로 확인됩니다. (영상 자동재생 등 일부 기능은 배포 후 https 환경에서 완전히 동작합니다.)

## 페이지 구성

- `index.html` — 홈 (히어로 영상 릴, 아시아 네트워크, 자체 제작 콘텐츠, 주요 프로젝트, 서비스, 인플루언서, 클라이언트, 강점, CTA)
- `influencers.html` — 인플루언서 풀 (국가·카테고리 필터)
- `services.html` — 서비스 6종
- `about.html` — 회사 소개 / 연혁 / 관계사
- `contact.html` — 제휴 문의 폼

## 폴더 구조

```
website/
├─ index.html / influencers.html / services.html / about.html / contact.html
├─ css/style.css            # 전체 스타일 (블랙 테마)
├─ js/
│  ├─ data.js               # 인플루언서 데이터 + 6개 언어 번역
│  ├─ media.js              # 영상·프로젝트·클라이언트·강점·관계사 데이터
│  └─ app.js                # 렌더링/언어전환/필터/영상 로직
└─ assets/
   ├─ youngwave-logo.png, brooks-logo.png, *-yellow.png
   ├─ partners/             # 관계사 로고
   ├─ clients/              # 클라이언트 로고 (slug.png)
   └─ influencers/          # 인플루언서 프로필 사진 (slug.jpg) — README 참고
```

## 다국어

우측 상단 드롭다운으로 **한국어 · English · Tiếng Việt · ไทย · Indonesia · 中文** 전환. 번역은 `js/data.js`와 `js/media.js`에 있습니다.

## 콘텐츠 수정 방법

- **인플루언서 추가/수정**: `js/data.js`의 `INFLUENCERS` 배열
- **프로필 사진 교체**: `assets/influencers/` 폴더에 `slug.jpg`로 저장 (파일명은 `assets/influencers/README.txt` 참고). 없으면 자동으로 모노그램 표시
- **클라이언트 로고**: `assets/clients/` 폴더에 `slug.png`
- **영상·프로젝트·강점**: `js/media.js`

## GitHub Pages 배포

1. GitHub에서 새 저장소(repository) 생성
2. 이 폴더(`website`)의 **내용물 전체**를 저장소에 업로드
3. 저장소 **Settings → Pages → Source: main branch / root** 선택 후 저장
4. 몇 분 뒤 `https://<사용자명>.github.io/<저장소명>/` 주소로 공개됩니다

---

© Young Wave Creative × Brooks Global · Korea – Southeast Asia
