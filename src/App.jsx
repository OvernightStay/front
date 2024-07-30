import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Greeting } from './components/Greeting';
import { Authorization } from './components/Auth/Authorization';
import { Registration } from './components/Auth/Registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
