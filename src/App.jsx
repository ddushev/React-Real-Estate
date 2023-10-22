import './App.css'
import Buy from './components/Buy/Buy'
import Sell from './components/Sell/Sell'
import Navbar from './components/Header/Navbar/Navbar'
import Home from './components/Home/Home'
import SignIn from './components/SignIn/SignIn'
import Logout from './components/Logout/Logout'
import SignUp from './components/SignUp/SignUp'
import Showcase from './components/Showcase/Showcase'
import Footer from './components/Footer/Footer'

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Showcase />
      <div className="main">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
