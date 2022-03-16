import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Nav from './components/nav/Nav';
import { Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
