import React, { Component } from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import UserList from "./components/UserList";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      checkuser:""
    };
  }

  searchForm = (k) => {
    axios
      .get(`https://api.github.com/search/users?q=${k}`)
      .then((res) => this.setState({ users: res.data.items }));
  };
  comingPress=(c)=>{
    if (c) {
      this.setState({checkuser:"no user"})
      document.querySelector('img').style.display = 'none';
    }else{
      this.setState({checkuser:""})
    }
  }
  

  render() {
    return (
      <>
        <Nav />
        <Search comingKeyword={this.searchForm} checkPress={this.comingPress} />
       {this.state.users.length === 0? <h1 className="text-center">{this.state.checkuser}</h1>: <UserList allusers={this.state.users} />}
       <div  className="d-flex justify-content-center"><img  width={100} src="https://media2.giphy.com/avatars/mycanopy/XdGkY2Hljyqi.gif" alt="" /></div>
      </>
    );
  }
}

export default App;
