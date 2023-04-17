import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      keyword: "",
    };
  }

  formSubmit = (e) => {
    e.preventDefault();
    this.props.comingKeyword(this.state.keyword);
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
                    this.setState({ keyword: e.target.value });
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
