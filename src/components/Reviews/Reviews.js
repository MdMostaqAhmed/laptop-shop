import React, { createContext, useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import Cart from "../Cart/Cart";
import "./Reviews.css";

export const ReviewContext = createContext("review");

const Reviews = () => {
  const [reviewData, setReviewData] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviewData(data));
  }, []);

  return (
    <div>
      <h2 className="my-5">All Customer's Reviews</h2>
      <CardGroup>
        {reviewData.map((review) => (
          <Cart key={review.id} review={review}></Cart>
        ))}
      </CardGroup>
    </div>
  );
};

export default Reviews;
