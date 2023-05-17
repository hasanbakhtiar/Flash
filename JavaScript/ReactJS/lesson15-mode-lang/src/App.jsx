import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import { ProductProvider } from './context/ProductContext'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ProductProvider>
      <Container>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </Container>
      </ProductProvider>
    </BrowserRouter>
  )
}

export default App