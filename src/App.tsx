import './App.css'
import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bodystyle from './components/Bodystyle';
import Footer from './components/Footer';




const App: React.FC = () => {


  return (
    <div>
      <Navbar />
      <Hero />
      <Bodystyle />
      <Footer />

  </div>
  )
}

export default App
