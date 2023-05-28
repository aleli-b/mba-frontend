import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import { Header } from './layout/Header'
import { Footer } from './layout/Footer'
import { Home } from './pages/Home'
import { Login } from './pages/Login';
import { AuthProvider } from './context/authContext';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
