import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"
function Home() {
  return (
    <div className="home">
      <button>
        <Link to="/signUp">Sign Up</Link>
      </button>
      <button>
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
}

export default Home;
