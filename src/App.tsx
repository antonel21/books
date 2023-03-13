import React from 'react';
import NavBar from './components/nav-bar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/single-pokemon/:id" element={<></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
