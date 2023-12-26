import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import App from './App';
import Admin from './Admin';
import Login from './components/admin/login'
import Add from './components/admin/add'
import Navbar from './components/admin/navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
window.Buffer = window.Buffer || require("buffer").Buffer;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<><Navbar /><Admin /></>} />
        <Route path="/:type/:table">
          <Route index element={<><Navbar /><Add /></>} />
          <Route path=":id" element={<><Navbar /><Add /></>} />
        </Route>
      </Routes>
    </Router>
  </>
);

