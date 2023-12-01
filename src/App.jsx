import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import SignUp from './components/common/signUp';
import Login from './components/common/login';
import { useContext } from 'react';
import usersService from './services/usersService';
import { authContext } from './contexts/auth.context';

function App() {
  const { user, login, logout, signUp } = useContext(authContext);


  return (
    <div className="app d-flex flex-column min-vh-100">
    <header className='pb-3'>
      <Navbar />
    </header>
    <main className='flex-fill container'>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login onSubmit={login} redirect="/" />} />
        <Route path="/sign-up" element={<SignUp  onSubmit={signUp} redirect="/login"/>} />
        <Route path="/about" element ={<About />} />
      </Routes>


    </main>
    <footer>
      <Footer />
    </footer>

    </div>
  );
}

export default App;
