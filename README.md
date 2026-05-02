# 구용석 ♥ 전문현 모바일 청첩장

## 🎬 Vercel 배포 방법

### 방법 1: GitHub + Vercel (추천 ⭐)
가장 안정적이고 수정도 쉬운 방법입니다.

#### 1단계: GitHub에 업로드
1. https://github.com 가입/로그인
2. 우측 상단 `+` → `New repository` 클릭
3. Repository name: `yongseok-munhyun-wedding` (원하는 이름)
4. `Public` 선택 → `Create repository`
5. 다음 화면에서 "uploading an existing file" 클릭
6. `index.html`, `vercel.json`, `README.md` 파일을 드래그&드롭
7. 아래 `Commit changes` 클릭

#### 2단계: Vercel 배포
1. https://vercel.com 접속 → `Sign Up`
2. **GitHub로 가입** (가장 편함)
3. 로그인 후 `Add New...` → `Project` 클릭
4. 방금 만든 `yongseok-munhyun-wedding` 저장소 옆 `Import` 클릭
5. 별도 설정 없이 `Deploy` 클릭
6. 약 30초 대기 → 배포 완료!
7. `your-project-name.vercel.app` 형태의 주소 발급

#### 3단계: 수정하기
- GitHub에서 `index.html` 파일 클릭 → 연필 아이콘으로 직접 편집
- 저장하면 Vercel이 **자동으로 재배포** (약 30초 소요)

---

### 방법 2: Vercel CLI로 바로 배포
컴퓨터에서 명령어로 빠르게 배포하는 방법입니다.

```bash
# Node.js 설치 후
npm install -g vercel

# wedding-site 폴더에서 실행
cd wedding-site
vercel

# 처음 실행 시 로그인 안내 → 이메일 입력하면 인증 메일 받음
# 질문에 모두 Enter (기본값) → 자동 배포
```

---

### 방법 3: 드래그&드롭 (가장 쉬움)
1. https://vercel.com 접속 → 가입
2. 대시보드에서 `Add New...` → `Project`
3. 또는 https://vercel.com/new 에서 폴더를 직접 드래그
4. `wedding-site` 폴더 통째로 업로드 → Deploy

⚠️ 단, 이 방법은 나중에 수정하려면 다시 업로드해야 합니다.
**수정이 잦을 예정이라면 방법 1(GitHub)을 강력 추천합니다.**

---

## 🔧 도메인 연결 (선택)

Vercel에서 기본 제공하는 `xxx.vercel.app` 주소 외에,
원하는 도메인 (예: `yongseok-munhyun.com`)을 연결하고 싶다면:

1. 도메인 구매 (가비아, 후이즈, Namecheap 등)
2. Vercel 프로젝트 → `Settings` → `Domains`
3. 도메인 입력 후 안내 따라 DNS 설정

---

## ✏️ 수정해야 할 항목

`index.html` 파일을 열어서 다음 부분들을 본인 정보로 변경하세요.

### 1. 부모님 성함 (CAST 섹션)
```html
<!-- 신랑 -->
<div class="relation">[신랑 아버지] · [신랑 어머니]의 [장남/차남/아들]</div>

<!-- 신부 -->
<div class="relation">[신부 아버지] · [신부 어머니]의 [장녀/차녀/딸]</div>

<!-- SUPPORTING CAST 영역 -->
<div class="parent-name-kor">[신랑 아버지]</div>
<div class="parent-name-kor">[신랑 어머니]</div>
<div class="parent-name-kor">[신부 아버지]</div>
<div class="parent-name-kor">[신부 어머니]</div>
```

### 2. 결혼식 날짜/시간
- 코드 내 `2026.06.13`, `2026 . 06 . 13 . SAT`, `12:30 PM`, `오후 12시 30분` 검색해서 변경
- JavaScript의 카운트다운: `new Date('2026-06-13T12:30:00+09:00')` 부분 변경
- 캘린더의 `wedding-day` 클래스가 붙은 날짜 변경

### 3. 웨딩홀 정보 (LOCATION 섹션)
```html
<div class="location-name">[웨딩홀 이름]</div>
<div class="location-hall">[층/홀 이름]</div>
<div class="location-addr">[주소를 입력해주세요]</div>
```
교통 안내(SUBWAY, BUS, PARKING)도 함께 수정

### 4. 계좌번호 (ACCOUNT 섹션)
신랑측 3개, 신부측 3개의 `[은행명] [계좌번호]` 부분 변경
복사 버튼의 `onclick="copyAccount('계좌번호')"` 안 계좌번호도 함께 수정

### 5. 카카오 지도 연결 (선택)
지금은 placeholder만 있음. 실제 지도 연결하려면:
- 카카오 지도 API 또는 네이버 지도 임베드 코드 추가
- `<div class="map-placeholder">` 부분을 iframe으로 교체

---

## 📂 폴더 구조
```
wedding-site/
├── index.html       # 청첩장 본체
├── vercel.json      # Vercel 배포 설정
└── README.md        # 이 문서
```

---

## 🎥 영상 출처
모든 배경 영상은 Pexels (https://www.pexels.com)의 무료 라이선스 영상입니다.
- Largo Editt (커버)
- ROMAN ODINTSOV (노을 실루엣)
- Asad Photo Maldives (해변)
- 외 Pexels 작가들

상업적/개인적 사용 모두 무료이며, 수정해서 사용 가능합니다.

---

## 💡 팁
- 모바일에서 미리보기: 데스크톱에서 Chrome 개발자도구(F12) → 모바일 뷰
- 카카오톡 공유 시 미리보기 이미지: `<head>`에 Open Graph 태그 추가 필요 (필요시 요청)
- 청첩장 링크 단축: bit.ly, naver me 등 사용 가능
