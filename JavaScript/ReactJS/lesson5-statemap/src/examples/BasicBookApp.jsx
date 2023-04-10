import React, { Component } from 'react'

class BasicBookApp extends Component {
  constructor(){
    super();
    this.state={
      bookPhoto:'https://novella.az/wp-content/uploads/2020/08/Webp.net-compress-image499.jpg',
      bookName:"1984",
      bookAuther:"George Orwell",
      pageCount:300
    }
  }
  
  nextBook=()=>{
    this.setState({
      bookPhoto:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81tNnqcHxlL.jpg',
      bookName:"The Adventures of Sherlock Holmes",
      bookAuther:"Arthur Conan Doyle",
      pageCount:600
    })
  }
  

  prevBook=()=>{
    this.setState({
      bookPhoto:'https://novella.az/wp-content/uploads/2020/08/Webp.net-compress-image499.jpg',
      bookName:"1984",
      bookAuther:"George Orwell",
      pageCount:300
    })
  }
  
  render() {
    return (
      <div className='container mt-5'>
        <div className="card" style={{width: '18rem'}}>
          <img src={this.state.bookPhoto} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.state.bookName}</h5>
            <p className="card-text">{this.state.bookAuther}</p>
            <p className="card-text">{this.state.pageCount}</p>
            <a href="#" className="btn btn-warning me-3" onClick={this.prevBook}>Prev Book</a>
            <a href="#" className="btn btn-primary" onClick={this.nextBook}>Next Book</a>
          </div>
        </div>
      </div>
    )
  }
}

export default BasicBookApp