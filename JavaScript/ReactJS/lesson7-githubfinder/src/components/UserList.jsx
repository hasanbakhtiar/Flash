import React, { Component } from "react";
import SingleCard from "./SingleCard";

class UserList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row g-5">
          {this.props.allusers.map((items) => {
            return <SingleCard alldata={items} />;
          })}
        </div>
      </div>
    );
  }
}

export default UserList;
