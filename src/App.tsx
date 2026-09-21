import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Safaris from './pages/Safaris';
import Contact from './pages/Contact';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-cream">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/safaris" element={<Safaris />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
