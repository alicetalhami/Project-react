import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
    <header className='pb-3'>
      <Navbar />
    </header>
    <main className='flex-fill container'>
      <Home />
      <About />

    </main>
    <footer>
      <Footer />
    </footer>

    </div>
  );
}

export default App;
