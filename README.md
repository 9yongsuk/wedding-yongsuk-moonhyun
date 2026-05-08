# 구용석 ♥ 전문현 모바일 청첩장

> 2026.08.16 SUN · 라도무스 아트센터 루미니스홀

## 📂 폴더 구조
```
wedding-site/
├── index.html              # 청첩장 본체
├── vercel.json             # Vercel 배포 설정
├── README.md               # 이 문서
└── images/
    ├── cover.jpg           # 커버 화면 배경 사진
    ├── photo_*.jpg         # 본문 갤러리 원본 (18장, 1600px)
    └── thumbs/
        └── photo_*.jpg     # 갤러리 썸네일 (정사각형 600px, 18장)
```

## 🚀 GitHub 업데이트 방법

기존 GitHub 저장소(`wedding-yongsuk-moonhyun`)에 새 파일을 업데이트:

```bash
cd C:\Users\zige7\Documents\Wedding-Invitation

# 새 파일들을 폴더에 덮어쓴 후
git add .
git commit -m "Add photos, embed Naver map, fix English names"
git push
```

→ Vercel이 자동 감지해서 30초 안에 재배포!

### ⚠️ 주의: 이미지 폴더 통째로 추가
- `images/` 폴더가 새로 추가되어 약 11MB 정도 됩니다
- GitHub 무료 플랜으로 충분히 처리 가능 (저장소당 1GB까지)
- 첫 push는 시간이 좀 걸릴 수 있어요 (10초~1분)

---

## ✏️ 아직 채워야 할 부분

`index.html`에서 검색(Ctrl+F)으로 찾아 변경:

### 1. 계좌번호 (총 6명)
`[은행명] [계좌번호]` 검색 → 본인 정보로 변경
복사 버튼의 `'계좌번호'` 자리에도 실제 번호 입력

### 2. 방명록 샘플
초기 샘플 메시지 2개가 있음. 실제 사용 시 메시지 자체는 방문자가 작성하므로 그대로 둬도 OK.

---

## 🔄 사진 변경하기

### 갤러리 사진 추가/교체
1. 새 사진을 `images/` 폴더에 `photo_XXXXX.jpg` 형태로 저장
2. `images/thumbs/` 폴더에 같은 이름으로 정사각형 썸네일 저장 (600x600 권장)
3. `index.html`의 JavaScript 부분에서 `photos` 배열에 파일명 추가

### 커버 사진 변경
`images/cover.jpg` 파일을 새 사진으로 덮어쓰기 (가로 1920px 권장)

### 시네마 씬 사진 변경 (초대합니다 섹션)
현재 사용된 사진:
- SCENE 01: `photo_02298.jpg` (계단)
- SCENE 02: `photo_02215.jpg` (대나무 베일)
- SCENE 03: `photo_00081.jpg` (정원)
- SCENE 04: `photo_01194.jpg` (클로즈업)

`index.html`에서 SCENE 01 ~ SCENE 04의 `<img class="scene-media" src="..." />` 부분 변경

---

## 🗺️ 지도 정보

라도무스 아트센터 정보가 자동 임베드되어 있습니다.
- 카카오맵 임베드 (메인)
- 네이버맵 / 카카오맵 외부 링크 버튼

도로명 주소: 대전광역시 유성구 동서대로 639

---

## 🎬 적용된 효과

- ✅ 커버 사진 (Ken Burns 효과 — 천천히 줌인/줌아웃)
- ✅ 따뜻한 그라디언트 오버레이 (어둡지만 무섭지 않은 무드)
- ✅ 영화 슬레이트 로딩 화면
- ✅ 가로로 흐르는 필름 스트립 디바이더
- ✅ 캘린더 결혼 날짜 펄스 효과
- ✅ 실시간 카운트다운
- ✅ 영화 티켓 3D 플립 (탭하면 뒤집힘)
- ✅ 갤러리 자동 스크롤 필름 릴
- ✅ 갤러리 클릭 시 라이트박스 (큰 사진 보기)
- ✅ 스크롤 시 페이드 인 애니메이션
- ✅ 카카오톡 공유 미리보기 (Open Graph)

---

## 📞 문의 정보

- **장소 문의**: 라도무스 아트센터 042-823-5220
- **신랑**: 구용석 (Yongsuk Ku)
- **신부**: 전문현 (Moonhyun Jeon)
- **결혼식**: 2026년 8월 16일 일요일 오후 1시 30분

---

## 🛠️ Vercel 자동 재배포

GitHub에 push 하면 Vercel이 자동으로 감지하고 재배포합니다.
- 배포 진행 상황: https://vercel.com 대시보드 → 프로젝트 → Deployments
- 평균 30초 ~ 1분 소요

배포 후 URL 확인은 Vercel 대시보드의 `Domains` 섹션 참고.
