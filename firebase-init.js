// 注意：這裡不需要 import，直接使用 firebase 全域變數
const firebaseConfig = {
  apiKey: "AIzaSyBclIEMW3BAP7EhRA3LERq7tX5Xyvx46Tw",
  authDomain: "fabe-648d0.firebaseapp.com",
  projectId: "fabe-648d0",
  storageBucket: "fabe-648d0.firebasestorage.app",
  messagingSenderId: "527188546182",
  appId: "1:527188546182:web:aa41d1e3952a73728cf707",
  measurementId: "G-7SJ142YF1W"
};

// 使用 firebase.initializeApp
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

console.log("Firebase 初始化成功！");