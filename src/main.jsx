import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './components/Layout.jsx';
import Main from './pages/Main.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';

const root = document.getElementById("root");

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout><Main /></Layout>} />
      <Route path="/login" element={<Layout><Login /></Layout>} />
      <Route path="/register" element={<Layout><Register /></Layout>} />
    </Routes>
  </BrowserRouter>,
);