import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AdminRoute } from './components/guard/AdminRoute';
import { Header } from './layout/Header'
import { Footer } from './layout/Footer'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login';
import { AuthProvider } from './context/authContext';
import { UserAdmin } from './pages/Admin/UserAdmin/UserAdmin';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path='/' element={<AdminRoute><Home /></AdminRoute>} />
            <Route path='/login' element={<Login />} />
            <Route path='/user-admin' element={<AdminRoute><UserAdmin /></AdminRoute>} />
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
