import React from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import UseActionStateHook from './components/useActionStateHook'
import UseCallbackHook from './components/UseCallbackHook'

// App 컴포넌트를 분리하여 Router 내부에서 useLocation을 사용
function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div>
      {isHome ? (
        <nav>
          <Link to="/useActionStateHook">
            <button 
             style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#00b894",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              margin: "10px"
             }}
            >
              useActionStateHook 예제
            </button>
          </Link>
          <Link to="/useCallbackHook">
            <button 
             style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#00b894",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              margin: "10px"
             }}
            >
              useCallbackHook 예제
            </button>
          </Link>
        </nav>
      ) : null}
      <Routes>
        <Route path="/useActionStateHook" element={<UseActionStateHook />} />
        <Route path="/useCallbackHook" element={<UseCallbackHook />} />
      </Routes>
    </div>
  )
}

// 메인 App 컴포넌트
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
