// Components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/entertainment">Entertainment</Link></li>
        <li><Link to="/technology">Technology</Link></li>
        <li><Link to="/sports">Sports</Link></li>
        <li><Link to="/business">Business</Link></li>
        <li><Link to="/health">Health</Link></li>
        <li><Link to="/science">Science</Link></li>
      </ul>
      <button onClick={subscribeToNews}>Subscribe</button>
    </nav>
  );
}

const subscribeToNews = () => {
  // Logic for subscribing to notifications
};

export default NavBar;