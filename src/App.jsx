import { useState } from 'react';
import './App.css'; 
import './index.css'; 
import Card from './components/Card';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="bg-neutral-700">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Card />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
