import './App.css'
import Catalog from './components/Catalog/Catalog'
import Create from './components/Create/Create'
import Navbar from './components/Header/Navbar/Navbar'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import Register from './components/Register/Register'
import Showcase from './components/Showcase/Showcase'

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Showcase />
      <div className="main">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/create' element={<Create />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
      </div>
    </>
  )
}

export default App
