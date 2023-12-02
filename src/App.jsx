import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/common/navbar";
import Footer from "./components/common/footer";
import Home from "./components/common/home";
import About from "./components/common/about";
import SignOut from "./components/common/signout";
import Login from "./components/common/login";
import { useContext } from "react";

import { useAuth } from "./contexts/auth.context";
import SignUpBiz from "./components/common/signUpBiz";
import MyCards from "./components/common/mycards";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <header className="pb-3">
        <navbar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-cards" element={<MyCards />} />
          <Route path="/Login" element={<Login redirect="/" />} />
          <Route path="/sign-up" element={<signUp redirect="/login" />} />
          <Route
            path="/sign-up-biz"
            element={<SignUpBiz redirect="/my-cards" />}
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
