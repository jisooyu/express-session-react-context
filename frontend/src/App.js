import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Landing from './components/Landing';
import Rosary from './components/Rosary'
import Fatima from './components/Fatima'
import Prague from './components/Prague'
import Faust from './components/Faust'
import Joyful from './pages/Joyful'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Landing />} />
          {/* <Route path='/rosary' exact element={<Rosary />} /> */}
          <Route path='/fatima' element={<Fatima />} />
          <Route path='/prague' element={<Prague />} />
          <Route path='/faust' element={<Faust />} />
          {/* <Route path='/jouful' element={<Joyful />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
