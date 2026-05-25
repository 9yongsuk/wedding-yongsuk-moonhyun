# 💍 구용석 ♥ 전문현 모바일 청첩장

> **2026.08.16 SUN · 라도무스 아트센터 루미니스홀**

## 🎬 주요 기능

- 영화 컨셉 디자인 (필름 캐러셀, 영화관 모드, 엔드 크레딧)
- 한지 손찢기 효과 (6군데 섹션 전환)
- 자동 회전 웨딩 티켓 (10초마다)
- 잔잔한 BGM (뮤팟 - 숲 속 드라이브)
- 실시간 방명록 (Firebase Realtime Database)
- 카운트다운 + 인터랙티브 갤러리

## 📂 파일 구조

```
wedding-site/
├── index.html              ← 메인 청첩장
├── vercel.json             ← Vercel 배포 설정
├── README.md               ← 이 파일
├── FIREBASE_SETUP.md       ← Firebase 연동 가이드 ⭐
├── assets/
│   ├── bgm.mp3            ← 배경음악 (숲 속 드라이브)
│   └── README_BGM.txt
└── images/
    ├── cover.jpg
    ├── photo_*.jpg (18장)
    ├── thumbs/photo_*.jpg (18장)
    └── tear_*.png (한지 마스크 9장)
```

## 🚀 배포

```bash
cd C:\Users\zige7\Documents\Wedding-Invitation
git add .
git commit -m "Add Firebase guestbook, BGM, music credit"
git push
```

## 🔥 Firebase 방명록 설정 (필수!)

**`FIREBASE_SETUP.md` 파일을 열어서 따라하세요.** 약 10분 소요.

설정 안 해도 청첩장은 작동하지만, 방명록은 각자 브라우저에만 저장됩니다.

## ✏️ 사용자가 채워야 할 부분

`index.html`에서:

1. **`[은행명] [계좌번호]`** — 6개 모두 (신랑측 3명, 신부측 3명)
2. **`copyAccount('계좌번호')`** — 6개 버튼 인자도 실제 번호로
3. **Firebase 설정값** — `FIREBASE_SETUP.md` 참고

## 📞 정보

- 신랑: **구용석** (Yongsuk Ku) — 부 구동완 · 모 이선자
- 신부: **전문현** (Moonhyun Jeon) — 부 전경재 · 모 육근미
- 일시: 2026년 8월 16일 일요일 오후 1시 30분
- 장소: 라도무스 아트센터 루미니스홀
