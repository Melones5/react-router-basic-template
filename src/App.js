import React from 'react';

import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

import {Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" exact  element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" c element={<Contact/>} />
          <Route component={Error}/>
        </Routes>
    </BrowserRouter>
  );
}


export default App;