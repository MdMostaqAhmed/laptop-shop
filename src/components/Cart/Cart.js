import React from "react";
import { Card } from "react-bootstrap";
import "./Cart.css";

const Cart = (props) => {
  const { name, comment, rating } = props.review;
  return (
    <div>
      <Card className="review-card">
        <Card.Body>
          <h3>Name: {name}</h3>
          <p>Comment: {comment}</p>
          <h5>Rating: {rating}</h5>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cart;
