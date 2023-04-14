import React, { Component } from "react";

class List extends Component {
    componentWillUnmount(){
        alert('deleted');
    }
  render() {
    return <>
    <ul>
        <li>list</li>
    </ul>
    </>;
  }
}


class LifeCycle extends Component{
   state = {display:true}
   delete=()=>{
    this.setState({display:false})
   }
   render(){
        let comp;
        if (this.state.display) {
            comp = <List />
        }
        return(
            <>
                {comp}
                <button onClick={this.delete}>delete</button>
            </>
        )
    }
}





// class LifeCycle extends Component {
//   constructor() {
//     super();
//     // console.log('constructor is running...');
//     this.state = {
//       info: "info",
//     };
//   }
//   //   componentDidUpdate(){
//   //     document.querySelector('h1').style.color = 'red'
//   //     }

//   test = () => {
//     this.setState({
//       info: "updated",
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1>{this.state.info}</h1>
//         <button onClick={this.test}>test</button>
//       </div>
//     );
//   }
// }

export default LifeCycle;
