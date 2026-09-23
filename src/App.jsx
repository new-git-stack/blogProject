import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home.jsx';
import Header from './Component/Header.jsx';
import Footer from './Component/Footer.jsx';
import Lifestyle from './Pages/Lifestyle.jsx';
import Finance from './Pages/finance.jsx';
import Tech from './Pages/Tech.jsx';
import Security from './Pages/Security.jsx';
import About from './Pages/About.jsx';


function App(){
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/lifestyle" element={<Lifestyle/>} />
          <Route path="/Finance" element={<Finance/>} />
          <Route path="/Tech" element={<Tech/>} />
          <Route path="/Security" element={<Security/>} />
          <Route path="/About" element={<About/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;