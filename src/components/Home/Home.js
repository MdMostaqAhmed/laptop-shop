import React from "react";
import "./Home.css";
import laptop from "../../Images/Laptop.png";

const Home = () => {
  return (
    <div className="home-body">
      <div>
        <h1>LAPTOP HOUSE</h1>
        <h1 className="best-choice">Your Best Choice</h1>
      </div>
      <img src={laptop} alt="" />
    </div>
  );
};

export default Home;
