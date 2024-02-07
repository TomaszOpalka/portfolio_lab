import {
  HashRouter,
  Route,
  Routes,
  Link,
  NavLink,
  Outlet,
  BrowserRouter
} from 'react-router-dom';
import React, { useRef } from 'react';
import './scss/App.scss';
import Login from './jsx/Login.jsx';
import CreateAcc from './jsx/CreateAcc.jsx';
import Layout from './jsx/Layout.jsx';
import { supabase } from './jsx/Client.jsx';

function App() {
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/createAcc" element={<CreateAcc/>}></Route>
        </Routes> 
    </BrowserRouter>
  );
}

export default App;
