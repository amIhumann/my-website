import React, { useState, useEffect, useContext, createContext } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import List from './components/admin/list'
import Add from './components/admin/add'
import Navbar from './components/admin/navbar'
import axios from 'axios';
import { GlobalState } from './index'
import jwt_decode from "jwt-decode";

export const AdminState = createContext(null);

const Admin = () => {
  const url = useContext(GlobalState).url;
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const redirect = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);
  
  const refreshToken = async () => {
      try {
          await axios.get(`${url}token`, { withCredentials: true });
      } catch (error) {
          if (error.response) {
              redirect("/");
          }
      }
  }

  const axiosJWT = axios.create({
    baseURL: url,
    timeout: 30000,
    headers: {'Authorization': `Bearer ${token}`},
    withCredentials: true
  });

  axiosJWT.interceptors.request.use(async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
          const response = await axios.get(`${url}token`, { withCredentials: true });
          config.headers.Authorization = `Bearer ${response.data.accessToken}`;
          setToken(response.data.accessToken);
          const decoded = jwt_decode(response.data.accessToken);
          setName(decoded.username);
          setExpire(decoded.exp);
      }
      return config;
  }, (error) => {
      return Promise.reject(error);
  });

  return (
    <>
      <AdminState.Provider value={{axiosJWT}}>
        <Routes>
              <Route exact path="/" element={<><Navbar username={name} /><List /></>} />
              <Route path="/:type/:table">
                <Route index element={<><Navbar username={name} /><Add /></>} />
                <Route path=":id" element={<><Navbar username={name} /><Add /></>} />
              </Route>
        </Routes>
      </AdminState.Provider>
    </>
  );
};

export default Admin;
