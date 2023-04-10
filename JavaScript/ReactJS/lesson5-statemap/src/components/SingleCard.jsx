import React, { Component } from "react";

class SingleCard extends Component {
  render() {
    return (
      <div className="col-12 col-sm-6 col-md-4">
        <div className="card">
          <img height={300} src={this.props.photo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">
            {this.props.price}$
            </p>
            <p className="card-text">
            {this.props.color}
            </p>

            <p className="card-text">
            {this.props.stock ? "In Stock": "Stock out"}
            </p>
            
            <a href="#" className="btn btn-primary">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleCard;
