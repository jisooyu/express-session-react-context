import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Landing from './components/Landing';
import DashBoard from './components/DashBoard'
import Login from './components/Login'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/display' element={<DashBoard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
