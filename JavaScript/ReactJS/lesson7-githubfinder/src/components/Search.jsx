import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      keyword: "",
      press: false,
    };
  }

  formSubmit = (e) => {
    e.preventDefault();
    this.props.comingKeyword(this.state.keyword);
    setTimeout(() => {
      this.props.checkPress(this.state.press);
    }, 1000);
  };

  render() {
    return (
      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <div className="col-6 my-5">
            <form onSubmit={this.formSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  onChange={(e) => {
                    this.setState({ keyword: e.target.value, press: true });
                  }}
                />
                <button
                  className="btn btn-success"
                  type="submit"
                  id="button-addon2"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
