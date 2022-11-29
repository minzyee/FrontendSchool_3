// npx create-react-app my-app --template basic-react
// cd my-app
// npm i react-router-dom styled-components axios
import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import UserContext from "./context/UserContext";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import Home from "./pages/Home/Home";
import "./reset.css"; // 우선은 css로 두고, 나중에 styled-components로 만들겁니다.
import "./global.css";

// Route는 연결해주는 녀석인가? Home / pages 두개인거같은데
function App() {
  // 실제로는 로그인이 되는 로직이 들어가야 합니다.
  const [userId, setUserId] = useState(1)
  const [isLogin, setIsLogin] = useState(false)

  return (
    <UserContext.Provider value={{userId, isLogin}}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
            />
          <Route
            path="/blog/:id"
            element={<BlogDetail/>}
            />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;