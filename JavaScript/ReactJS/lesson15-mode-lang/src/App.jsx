import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import { ProductProvider } from './context/ProductContext'
import { ModeContext, ModeProvider } from './context/ModeContext'
import './sass/style.scss';
const Main = () => {
  const [mode] = useContext(ModeContext);
  return (
    <div className={mode}>
      <ProductProvider>
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        </Container>
      </ProductProvider>
    </div>
  )
}


const App = () => {
  return (
    <BrowserRouter>
      <ModeProvider>
        <Main />
      </ModeProvider>
    </BrowserRouter>
  )
}

export default App