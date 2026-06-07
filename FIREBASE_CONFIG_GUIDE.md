# 🔑 Firebase 키 입력 안내

## 한 번만 하면 끝나는 작업

이제 Firebase 키를 **`firebase-config.js`** 파일에만 넣어두면,
앞으로 `index.html`을 아무리 자주 덮어써도 키는 그대로 유지돼요.

---

## 작업 방법 (5분)

### 1단계: 이미 가지고 있는 Firebase 키를 찾으세요

Firebase 콘솔 → 본인 프로젝트 → 우측 상단 ⚙️ → **프로젝트 설정**
→ 스크롤 내려서 **"내 앱"** → 등록한 웹 앱 → **"구성"** 또는 **SDK 설정 및 구성**

이런 코드가 나옵니다:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyAi-XOSdXWUFbxVwVcoxOwbAvrclZtL6Xk",
  authDomain: "wedding-yongsuk-moonhyun.firebaseapp.com",
  databaseURL: "https://wedding-yongsuk-moonhyun-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wedding-yongsuk-moonhyun",
  storageBucket: "wedding-yongsuk-moonhyun.firebasestorage.app",
  messagingSenderId: "439645140996",
  appId: "1:439645140996:web:0141c7e0b5a96111f69d51"
};
```

### 2단계: `firebase-config.js` 파일 열기

`C:\Users\zige7\Documents\Wedding-Invitation\firebase-config.js`를
메모장이나 VS Code로 열어주세요.

### 3단계: 값 7개 붙여넣기

각 `"여기에_..._붙여넣기"` 자리를 Firebase에서 받은 값으로 교체:

**바꾸기 전:**
```javascript
window.firebaseConfig = {
  apiKey: "여기에_API_KEY_붙여넣기",
  authDomain: "여기에_AUTH_DOMAIN_붙여넣기",
  databaseURL: "여기에_DATABASE_URL_붙여넣기",
  ...
};
```

**바꾼 후 (예시):**
```javascript
window.firebaseConfig = {
  apiKey: "AIzaSyAi-XOSdXWUFbxVwVcoxOwbAvrclZtL6Xk",
  authDomain: "wedding-yongsuk-moonhyun.firebaseapp.com",
  databaseURL: "https://wedding-yongsuk-moonhyun-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wedding-yongsuk-moonhyun",
  storageBucket: "wedding-yongsuk-moonhyun.firebasestorage.app",
  messagingSenderId: "439645140996",
  appId: "1:439645140996:web:0141c7e0b5a96111f69d51"
};
```

⚠️ **주의사항:**
- 따옴표(`"`)는 그대로 두고, **안의 값만** 바꿔주세요
- 콤마(`,`)도 그대로 둬야 해요
- `window.firebaseConfig = { ... };` 구조 유지

### 4단계: 저장하고 push

```bash
cd C:\Users\zige7\Documents\Wedding-Invitation
git add firebase-config.js
git commit -m "Add Firebase config"
git push
```

---

## ✅ 한 번 설정 후 효과

**앞으로 제가 새 `index.html`을 보내면:**
- 그냥 `index.html`만 덮어쓰면 끝
- `firebase-config.js`는 절대 안 건드리니까 키는 영원히 안전
- 다시 Firebase 키 찾을 필요 없음

---

## ❓ 작동 확인

청첩장 페이지 새로고침 → F12 → Console:
- `✅ Firebase 연결됨` → 성공
- `firebase-config.js 없음 - 로컬 모드로 작동` → 파일이 git에 안 올라감
- `Firebase 설정 안 됨 - 로컬 모드` → 파일은 있는데 키가 placeholder 그대로

---

## 🔒 보안 안내

`firebase-config.js`는 GitHub에 공개되어도 괜찮아요. Firebase API 키는
"비밀번호"가 아니라 "공개 식별자"라서 다른 사람이 봐도 본인 데이터에
접근할 수 없어요 (Firebase 보안 규칙이 그걸 막아줌).

단, 보안 규칙이 `".read": true, ".write": true`라면 누구나 방명록에
글 쓸 수 있긴 합니다. 결혼식 청첩장은 그 정도면 충분해요.
