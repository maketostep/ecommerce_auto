import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from "../pages/Home.jsx";
import Contacts from "../pages/Contacts.jsx";
import Cabinet from "../pages/Cabinet.jsx";


ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Home />}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="cabinet" element={<Cabinet/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)