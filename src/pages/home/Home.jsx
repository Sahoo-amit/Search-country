import React from "react";
import "./Home.css";
import img from "../../../public/world.png";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <div className="left-home">
        <h1>
          Explore the world, <br /> One country at a time.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
          quis blanditiis. Dicta temporibus, necessitatibus unde aperiam
          laudantium quod itaque vero laborum mollitia culpa, praesentium
          sapiente sit natus asperiores ipsum facilis ea minus, fugit sunt non
          quas tempora porro! Ea, quod!
        </p>
        <button className="explore">
          <Link to="/country">Start Exploring</Link>
          <FaLongArrowAltRight />
        </button>
      </div>
      <div className="right-home">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Home;
