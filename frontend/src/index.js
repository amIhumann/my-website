import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Admin from './Admin';
import Login from './components/admin/login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

window.Buffer = window.Buffer || require("buffer").Buffer;
const root = ReactDOM.createRoot(document.getElementById('root'));
export const GlobalState = createContext(null);
const url = "http://localhost:5000/";
const axiosRequest = axios.create({
  baseURL: url,
  timeout: 30000
});

root.render(
  <>
    <GlobalState.Provider value={{url, axiosRequest}}>
      <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </Router>
    </GlobalState.Provider>
  </>
);

document.querySelector(".loading__page").remove();

