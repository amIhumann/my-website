import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Admin from './Admin';
import Login from './components/admin/login'
import Add from './components/admin/add'
import Navbar from './components/admin/navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<><Navbar /><Admin /></>} />
        <Route path="/add/:table" element={<><Navbar /><Add /></>} />
      </Routes>
    </Router>
  </>
);

