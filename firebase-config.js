// ============================================================
// Firebase + Google Form 설정 파일 (한 번만 수정하면 됨)
// ============================================================
//
// 이 파일은 외부 서비스 연결에 필요한 키들을 담고 있어요.
// index.html은 이 파일의 키를 건드리지 않으니까 한 번 채워두면 영구히 사용됩니다.
//
// ⚠️ Firebase: 방명록용
// ⚠️ Google Form: RSVP(참석 여부) 응답 수집용
//
// ============================================================

// === Firebase (방명록) ===
window.firebaseConfig = {
  apiKey: "AIzaSyAi-XOSdXWUFbxVwVcoxOwbAvrclZtL6Xk",
  authDomain: "wedding-yongsuk-moonhyun.firebaseapp.com",
  databaseURL: "https://wedding-yongsuk-moonhyun-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wedding-yongsuk-moonhyun",
  storageBucket: "wedding-yongsuk-moonhyun.firebasestorage.app",
  messagingSenderId: "439645140996",
  appId: "1:439645140996:web:0141c7e0b5a96111f69d51"
};

// === Google Form (RSVP 참석 응답) ===
// Google Form 만든 후 form action URL과 각 항목 entry ID를 넣어주세요.
// 자세한 방법은 RSVP_SETUP.md 참고
window.GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeZkFoFbUSBNtY_RbzD7KPwvHYLEnNsQ1H3Vy6I264fRNn5Lg/formResponse";
window.GOOGLE_FORM_FIELDS = {
  side:   "entry.2070403685",  // 참석 구분
  attend: "entry.230160818",   // 참석 여부
  name:   "entry.912300672",   // 성함
  count:  "entry.591852111",   // 참석 인원
  meal:   "entry.16989888",    // 식사 여부
  msg:    "entry.662138258"    // 전하실 말씀
};
