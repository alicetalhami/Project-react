import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./components/home";
import NavBar from "./components/navbar";
import SignUp from "./components/signUp";
import Login from "./components/login";
import SignOut from "./components/signout";
import SignUpBiz from "./components/signUpBiz";
import MyCards from "./components/myCards";
import ProtectedRoute from "./components/common/protectedRoute";
import FavCards from "./components/favCards";


function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <header className="pb-3">
        <NavBar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-cards" element={
           <ProtectedRoute>
          <MyCards />
          </ProtectedRoute>
          } />
          <Route path="/fav-cards" element={
         <ProtectedRoute onlyBiz>
          <FavCards />
          </ProtectedRoute>

          } />
          <Route path="/login" element={<Login redirect="/" />} />
          <Route path="/sign-up" element={<SignUp redirect="/login" />} />
          <Route path="/sign-up-biz"element={<SignUpBiz redirect="/my-cards" />}/>
          <Route path="/sign-out" element={<SignOut />} redirect="/" />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;