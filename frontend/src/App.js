import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Landing from './components/Landing';
import Fatima from './components/Fatima'
import Prague from './components/Prague'
import Faust from './components/Faust'

function App() {

  return (
    <div className='container'>
      <Router>
        {/* <Header /> */}
        <Header />
        <Routes>
          <Route path='/' exact element={<Landing />} />
          <Route path='/fatima' element={<Fatima />} />
          <Route path='/prague' element={<Prague />} />
          <Route path='/faust' element={<Faust />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
