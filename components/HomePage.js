import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Product App</h1>
    <p>This product app is made to demo
    <a target="_blank" href="https://medium.com/@codingindepth"> Coding In Depth</a> stories.
    </p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;