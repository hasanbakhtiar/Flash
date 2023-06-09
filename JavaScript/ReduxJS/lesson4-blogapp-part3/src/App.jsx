import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/admin/Dashboard'
import BlogList from './pages/BlogList'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import AddBlog from './pages/admin/update/AddBlog'
import EditBlog from './pages/admin/update/EditBlog'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
        <Container>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/blogs' element={<BlogList />}></Route>
          <Route path='/admin' element={<Dashboard />}></Route>
          <Route path='/admin/add' element={<AddBlog />}></Route>
          <Route path='/admin/edit/:id' element={<EditBlog />}></Route>
          <Route path='*' element={<Home />}></Route>
        </Routes>
        </Container>
    </BrowserRouter>
  )
}

export default App