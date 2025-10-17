import './main.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from './components/Layout.jsx';
import Main from './pages/Main.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import PublicRoute from './components/PublicRoute.jsx';

const root = document.getElementById("root");

createRoot(root).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute><Layout><Main /></Layout></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Layout><Login /></Layout></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Layout><Register /></Layout></PublicRoute>} />
        <Route path="/home" element={<PrivateRoute><Layout><Home /></Layout></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Layout><Profile /></Layout></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>,
);