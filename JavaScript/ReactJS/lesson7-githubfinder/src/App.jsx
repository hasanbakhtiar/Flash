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
    };
  }

  searchForm = (k) => {
    axios
      .get(`https://api.github.com/search/users?q=${k}`)
      .then((res) => this.setState({ users: res.data.items }));
  };
  render() {
    return (
      <>
        <Nav />
        <Search comingKeyword={this.searchForm} />
        <UserList allusers={this.state.users} />
      </>
    );
  }
}

export default App;
