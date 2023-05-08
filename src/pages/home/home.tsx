import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>Hello </h1>
      <Link to="..">
        <p>link</p>
      </Link>
    </>
  );
};

export default Home;
