import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";
import Home from "./components/common/home";
import About from "./components/common/about";
import SignUp from "./components/common/signUp";
import Login from "./components/common/login";
import { useContext } from "react";

import { useAuth } from "./contexts/auth.context";
import SignOut from "./components/common/signout";
import SignUpBiz from "./components/common/signUpBiz";
import MyCards from "./components/common/myCards";


function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <header className="pb-3">
        <Navbar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-cards" element={<MyCards />} />
          <Route path="/Login" element={<Login redirect="/" />} />
          <Route path="/sign-up" element={<SignUp redirect="/login" />} />
          <Route
            path="/sign-up-biz"
            element={<SignUpBiz redirect="/my-cards"/>}
          />

          <Route path="/sign-out" element={<SignOut redirect="/" />}></Route>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
