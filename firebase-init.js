// Firebase 初始化：此檔只負責建立一次 Firebase 連線
const firebaseConfig = {
  apiKey: "AIzaSyBclIEMW3BAP7EhRA3LERq7tX5Xyvx46Tw",
  authDomain: "fabe-648d0.firebaseapp.com",
  projectId: "fabe-648d0",
  storageBucket: "fabe-648d0.firebasestorage.app",
  messagingSenderId: "527188546182",
  appId: "1:527188546182:web:aa41d1e3952a73728cf707",
  measurementId: "G-7SJ142YF1W"
};

try {
  // 避免 Firebase 被重複初始化
  window.firebaseApp = firebase.apps.length
    ? firebase.app()
    : firebase.initializeApp(firebaseConfig);

  window.firebaseAuth = firebase.auth();
  window.firebaseDb = firebase.firestore();

  // Analytics 失敗不應影響 Firestore
  try {
    window.firebaseAnalytics = firebase.analytics();
  } catch (analyticsError) {
    console.warn("Firebase Analytics 未啟用：", analyticsError);
  }

  console.log("Firebase 初始化成功");
} catch (error) {
  console.error("Firebase 初始化失敗：", error);
}
