import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar/navbar";

const Home = () => {
  return (
    <>
      <h1>Hello </h1>
      <Link to={"/Navbar"}> Click me </Link>
    </>
  );
};

export default Home;
