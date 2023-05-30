import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AdminRoute } from './components/guard/AdminRoute';
import { Header } from './layout/Header'
import { Footer } from './layout/Footer'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login';
import { AuthProvider } from './context/authContext';
import { UserAdmin } from './pages/Admin/UserAdmin/UserAdmin';
import { Upload } from './pages/Upload/Upload';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            {/* <Route path='/' element={<AdminRoute><Home /></AdminRoute>} /> */}
            <Route path='*' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/user-admin' element={<AdminRoute><UserAdmin /></AdminRoute>} />
            <Route path='/upload' element={<AdminRoute><Upload /></AdminRoute>} />
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
