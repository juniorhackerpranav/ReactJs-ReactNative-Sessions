import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactInfo from './pages/ContactInfo'
import ProductPage from './pages/ProductPage'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './Navbar' 
import Products from './pages/Products'


export default function App() {
  return (
    <div>

      <BrowserRouter>
        {/* Always putting the components that require the react router functionality inside the BrowserReouter */}
        <Navbar></Navbar>
        <Routes>

          <Route path='/' element={<Home data={"This is some Props passed to the Home Component"} />}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/contact' Component={Contact}></Route>
          {/* Nested route */}
          <Route path='/contact/myinfo' Component={ContactInfo}></Route>

          <Route path='/product' Component={Products}></Route>
          <Route path='/product/:productId' Component={ProductPage}></Route>

          <Route path='*' Component={NotFound}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
