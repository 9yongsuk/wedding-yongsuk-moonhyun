# 구용석 ♥ 전문현 모바일 청첩장 (밝은 톤 버전)

> 2026.08.16 SUN · 라도무스 아트센터 루미니스홀

## 🎨 이번 버전의 변경점

예시 사이트(레포쿠 템플릿)의 무드를 참고해 세 가지를 반영했습니다.
참고 사이트의 코드/이미지를 복제하지 않고, 분위기만 차용했습니다.

1. **밝은 크림/아이보리 톤으로 전면 변경**
   - 어두운 시네마 배경 → 밝은 크림 배경 + 진한 먹색 텍스트
   - 사진을 가리던 어두운 오버레이 제거, 화사하게
2. **절제된 구성으로 재배치**
   - 큰 사진(풀블리드)이 화면을 채우고 텍스트는 간결하게
   - 인사말 → 큰 사진 → 인용구 → 큰 사진 흐름
3. **잔잔한 BGM + 인터랙션**
   - 우측 상단 음악 토글 버튼 (이퀄라이저 애니메이션)
   - 부드러운 페이드인, 티켓 플립, 갤러리 스와이프

## 📂 폴더 구조
```
wedding-site/
├── index.html
├── vercel.json
├── README.md
├── assets/
│   └── README_BGM.txt   ← BGM 넣는 방법 안내
└── images/
    ├── cover.jpg
    ├── photo_*.jpg (18장)
    └── thumbs/
        └── photo_*.jpg (18장)
```

## 🎵 배경음악(BGM) 넣기

현재 음악 파일은 비어 있습니다. (네트워크 제한으로 자동 다운로드 불가)
`assets/README_BGM.txt` 안내를 따라 직접 넣어주세요.

요약:
1. 저작권 없는 잔잔한 곡 다운로드 (pixabay.com/music 추천)
2. 파일명을 `bgm.mp3`로 변경
3. `assets/` 폴더에 넣기
4. git push → 적용

음악 파일이 없어도 청첩장은 정상 작동합니다.

## 🚀 GitHub 업데이트

기존 폴더 `C:\Users\zige7\Documents\Wedding-Invitation` 내용을
이 zip 압축 푼 것으로 **전부 교체**한 뒤:

```bash
cd C:\Users\zige7\Documents\Wedding-Invitation
git add .
git commit -m "Redesign: bright cream tone, refined layout, BGM toggle"
git push
```

→ Vercel 자동 재배포 (30초~1분)

⚠️ images 폴더 통째로 포함되어야 사진이 보입니다.

## ✏️ 채워야 할 부분

`index.html`에서 `[은행명]` `[계좌번호]` 검색 → 6명분 계좌 정보 입력
복사 버튼의 `'계좌번호'` 자리에도 실제 번호 입력

## 📞 정보
- 신랑: 구용석 (Yongsuk Ku) — 부 구동완 · 모 이선자
- 신부: 전문현 (Moonhyun Jeon) — 부 전경재 · 모 육근미
- 일시: 2026년 8월 16일 일요일 오후 1시 30분
- 장소: 라도무스 아트센터 루미니스홀 (대전 유성구 동서대로 639)
- 문의: 042-823-5220
