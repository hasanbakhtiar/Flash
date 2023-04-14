import React, { Component } from "react";
import SingleCard from "./components/SingleCard";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      product:[]
    };
  }
  componentDidMount(){
    // axios.get('https://fakestoreapi.com/products')
    // .then(res=>this.setState({product:res.data}))


    const fetchApi =async()=>{
        const comingdata = await axios.get('https://fakestoreapi.com/products') 
        this.setState({product:comingdata.data})
    }

    fetchApi();
    
    
  }
  

  render() {

    return (
      <>
        <h1 className="text-center my-5">Products</h1>
        <div className="container">
          <div className="row">
            {this.state.product.length===0 ? <h1>Loading...</h1> :    this.state.product.map(item=>{
              return <SingleCard propData={item} />
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
