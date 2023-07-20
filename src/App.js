import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Gallery from './pages/Gallery.js';
import Puja from './pages/Puja.js';
import Footer from './components/Footer.js';
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/puja" element={<Puja />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
