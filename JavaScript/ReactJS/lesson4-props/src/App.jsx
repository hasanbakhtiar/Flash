import React, { Component } from 'react'
import Header from './components/Header'
import CardList from './components/CardList'
import Footer from './components/Footer'
class App extends Component {
  render() {
    return (
        <>
       <Header />
       <CardList />
       <Footer />
      </>
    )
  }
}

export default App