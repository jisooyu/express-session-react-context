import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Landing from './components/Landing';
import Fatima from './components/Fatima'
import Prague from './components/Prague'
import Faust from './components/Faust'
import Joyful from './pages/Joyful'
import Sorrowful from './pages/Sorrowful'
import { joyfulPrayers } from './prayers/prayers';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Landing />} />
          <Route path='/fatima' element={<Fatima />} />
          <Route path='/prague' element={<Prague />} />
          <Route path='/faust' element={<Faust />} />
          <Route path='/joyful' element={<Joyful prayers={joyfulPrayers} />} />
          <Route path='/sorrowful' element={<Sorrowful />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
