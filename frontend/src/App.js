import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './components/Landing';
import DashBoard from './components/DashBoard'
import Header from './components/Header';

function App() {

  return (
    <div className='container'>
      <Router>
        {/* <Header /> */}
        <Header />
        <Routes>
          <Route path='/' exact element={<Landing />} />
          <Route path='/display' element={<DashBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
