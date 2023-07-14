import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import Wishlist from './pages/Wishlist'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
        <Container>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<ProductList />}></Route>
          <Route path='/products/:id' element={<ProductDetails />}></Route>
          <Route path='/wishlist' element={<Wishlist />}></Route>
          <Route path='*' element={<Home />}></Route>
        </Routes>
        </Container>
    </BrowserRouter>
  )
}

export default App