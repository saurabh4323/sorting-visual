// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => (
  <div className="home-container">
    <h1>Algorithm Visualizer</h1>
    <nav>
      <ul>
        <li>
          <Link to="/sorting">Sorting Visualizer</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Home;
