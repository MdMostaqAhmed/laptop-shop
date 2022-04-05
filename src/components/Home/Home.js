import React, { useEffect, useState } from "react";
import "./Home.css";
import laptop from "../../Images/Laptop.png";
import { Link } from "react-router-dom";
import { CardGroup } from "react-bootstrap";
import Cart from "../Cart/Cart";

const Home = () => {
  const [reviewData, setReviewData] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviewData(data));
  }, []);
  return (
    <div>
      <div className="home-body">
        <div className="laptop-house ">
          <h1>LAPTOP HOUSE</h1>
          <h1 className="best-choice">Your Best Choice</h1>
          <p>
            Configure Your Dream Computer To Run Ubuntu Flawlessly At Great
            Prices! We Can Provide Effective Customised Computing Solutions To
            Meet Any Of Your Requirements. 3 Year Warranty. Lifetime Support. 2
            Day Build Time. Amenities: Ubuntu Powered, 2-3 Day Build Time, 3
            Year Warranty.
          </p>
        </div>
        <img src={laptop} alt="" />
      </div>

      <div>
        <h2 className="my-5">Customer Reviews(3)</h2>
        <CardGroup className="d-flex justify-content-around">
          {reviewData.slice(0, 3).map((review) => (
            <Cart key={review.id} review={review}></Cart>
          ))}
        </CardGroup>
        <Link to="/reviews">
          <button className="btn btn-primary my-5">See All Reviews</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
