import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Landing from './components/Landing';
import DashBoard from './components/DashBoard'


function App() {

  return (
    <div className='container'>
      <Router>
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
