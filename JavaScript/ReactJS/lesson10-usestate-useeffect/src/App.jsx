import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './examples/Login'
import Products from './pages/Products'

const App = () => {
   return <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/products' element={<Products />}></Route>
    </Routes>
   </BrowserRouter>
}
export default App