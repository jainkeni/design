import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Forgot from './pages/auth/Forgot'
import Reset from './pages/auth/Reset'
import Profile from './pages/Profile'
import Goals from './pages/Goals'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="reset" element={<Reset />} />
        <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="goals" element={<ProtectedRoute><Goals /></ProtectedRoute>} />
      </Route>
    </Routes>
  )
}
