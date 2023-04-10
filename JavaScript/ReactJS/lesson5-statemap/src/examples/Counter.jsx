import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    // this.decrement = this.decrement.bind(this);
    // this.increment = this.increment.bind(this);
    this.state = {
      count: 0,
    };
  }

  decrement = () => {
      if (this.state.count > 0) {
        this.setState({
          count: this.state.count - 1,
        });
      }
  };

  render() {
    return (
      <div className="container mt-5">
        <button className={`btn btn-${this.state.count > 0 ? "danger" : "secondary"} btn-sm me-2`} onClick={this.decrement}>
          -1
        </button>
        <span>{this.state.count}</span>
        <button
          className="btn btn-success btn-sm ms-2"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
