import React, { Component } from 'react'
import SingleCard from '../components/SingleCard';

export class Products extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(comingdata => this.setState({data:comingdata}))
    }
  render() {
    return (
      <div className='row'>

        <h1 className='text-center my-5'>Products</h1>
                {this.state.data.map(item=>(
                    <SingleCard title={item.title} price={item.price} photo={item.image}/>
                ))}
      </div>
    )
  }
}

export default Products