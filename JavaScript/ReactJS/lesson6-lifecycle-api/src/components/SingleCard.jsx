import React, { Component } from "react";

class SingleCard extends Component {
  render() {
    const { image, title, desc } = this.props.propData;
    return (
      <div className="col-12 col-sm-6 col-md-4">
        <div className="card">
          <img src={image}  className="card-img-top" alt={image} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href="/" className="btn btn-primary">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleCard;
