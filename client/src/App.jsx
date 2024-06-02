import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './core/Navbar.jsx'
import Home from './core/Home.jsx'
import Cart from './core/Cart.jsx'
import Contact from './core/Contact.jsx'
import MyAccount from './core/MyAccount.jsx'

const App = () => {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/my-account' element={<MyAccount />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
