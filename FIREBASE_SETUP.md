# 🔥 Firebase Realtime Database 설정 가이드

**왜 필요한가요?** 방명록에 다른 분들이 남긴 메시지를 모두가 볼 수 있게 하려면 데이터를 클라우드에 저장해야 해요. Firebase는 구글의 무료 서비스로, 결혼식 방명록 정도의 트래픽은 무료 플랜으로 충분합니다.

**작업 시간**: 약 10분  
**난이도**: 어렵지 않아요. 화면 따라하기만 하면 됩니다.

---

## 1단계: Firebase 프로젝트 만들기

1. https://console.firebase.google.com 접속 (구글 로그인)
2. **"프로젝트 만들기"** 클릭
3. 프로젝트 이름: `wedding-yongsuk-moonhyun` (아무거나 OK)
4. Google Analytics: **"사용 안 함"** 선택 (방명록엔 필요 없음) → 계속
5. 잠시 기다리면 프로젝트 생성 완료

## 2단계: Realtime Database 만들기

1. 왼쪽 메뉴에서 **"빌드 → Realtime Database"** 클릭
2. **"데이터베이스 만들기"** 클릭
3. 위치: **"singapore (asia-southeast1)"** 또는 **"us-central"** 둘 다 OK
4. 보안 규칙: **"테스트 모드에서 시작"** 선택 (30일간 누구나 읽기/쓰기 가능)
5. **"사용 설정"** 클릭

## 3단계: 보안 규칙 설정 (중요!)

테스트 모드는 30일 후 만료되니까, 정식 규칙을 만들어요.

1. Realtime Database 페이지에서 **"규칙"** 탭 클릭
2. 다음 내용으로 교체 후 **"게시"** 클릭:

```json
{
  "rules": {
    "guestbook": {
      ".read": true,
      ".write": true,
      "$msgId": {
        ".validate": "newData.hasChildren(['name', 'msg', 'timestamp']) && newData.child('name').isString() && newData.child('name').val().length <= 30 && newData.child('msg').isString() && newData.child('msg').val().length <= 500"
      }
    }
  }
}
```

이 규칙은:
- 누구나 방명록 읽기/쓰기 가능
- 이름은 30자 이하
- 메시지는 500자 이하
- 필수 필드(name, msg, timestamp) 검증

## 4단계: 웹 앱 등록 + 설정값 받기

1. 프로젝트 홈으로 돌아가서 위쪽의 **"</>"** 아이콘 클릭 (웹 앱 추가)
2. 앱 닉네임: `wedding-invitation` (아무거나)
3. Firebase Hosting 설정: **체크 안 함**
4. **"앱 등록"** 클릭
5. 다음과 같은 코드가 나옵니다:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "wedding-yongsuk-moonhyun.firebaseapp.com",
  databaseURL: "https://wedding-yongsuk-moonhyun-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wedding-yongsuk-moonhyun",
  storageBucket: "wedding-yongsuk-moonhyun.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcd1234efgh5678"
};
```

이 값을 통째로 복사해두세요.

⚠️ **databaseURL이 안 보이면**: Realtime Database를 안 만든 거예요. 2단계로 돌아가세요. URL은 `https://...firebasedatabase.app` 형태입니다.

## 5단계: index.html에 설정값 넣기

1. `index.html` 파일을 메모장 또는 VS Code로 열기
2. `Ctrl + F`로 **`YOUR_API_KEY`** 검색
3. 다음 블록을 찾아서 4단계에서 받은 값으로 교체:

```javascript
// 변경 전
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// 변경 후 (예시 - 본인 값 넣기)
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "wedding-yongsuk-moonhyun.firebaseapp.com",
  databaseURL: "https://wedding-yongsuk-moonhyun-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wedding-yongsuk-moonhyun",
  storageBucket: "wedding-yongsuk-moonhyun.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcd1234efgh5678"
};
```

저장하고 git push 하면 끝!

## 6단계: Firebase 콘솔에 도메인 추가

배포된 청첩장에서 Firebase에 접근할 수 있도록 도메인을 등록해야 해요.

1. Firebase 콘솔 → 왼쪽 메뉴 **"빌드 → Authentication"** 클릭
2. ⚠️ Authentication을 안 쓰니까 이 단계 건너뛰어도 됩니다 (대부분 자동으로 허용됨)

만약 청첩장에서 메시지가 안 등록되면:
1. Firebase 콘솔 → **"프로젝트 설정"** (좌상단 ⚙️) → 일반
2. 아래로 스크롤 → **"승인된 도메인"** 확인
3. Vercel 도메인 (예: `wedding-yongsuk-moonhyun.vercel.app`) 추가

## ✅ 작동 확인

1. 청첩장 페이지 열기
2. 방명록 섹션에서 "첫 번째 축하 메시지를 남겨주세요 ♥" 안내가 보이면 Firebase 연결 성공
3. WRITE A MESSAGE 버튼으로 메시지 작성
4. 즉시 방명록에 표시되면 성공!
5. 다른 폰/PC로 같은 페이지 열어서 방금 쓴 메시지가 보이는지 확인

## 📊 무료 사용량

Firebase Realtime Database 무료 플랜 (Spark):
- 동시 접속: 100명
- 저장 용량: 1GB
- 월 다운로드: 10GB

결혼식 청첩장 정도면 100% 무료로 충분합니다.

## ❓ 문제 해결

**메시지가 안 보여요**
→ 브라우저 F12 → Console 탭에서 빨간 에러 확인  
→ "Permission denied" 에러: 3단계 보안 규칙 다시 확인  
→ "Invalid API key": 4단계 설정값 잘못 복사된 것

**Firebase 안 쓰고 싶어요**
→ 그냥 그대로 두면 됩니다. 코드에 placeholder가 있으면 자동으로 로컬 모드로 작동해요 (각자 브라우저에만 저장).

---

문제 생기면 Firebase 콘솔의 Realtime Database 페이지에서 "데이터" 탭을 보면 실시간으로 메시지가 쌓이는 게 보입니다. 거기에 안 쌓이면 5단계 설정값을 다시 확인해주세요.
