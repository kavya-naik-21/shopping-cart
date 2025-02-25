import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-gray-400 flex justify-end">
      <div className="w-2/3 mt-3 h-20">
        <Link to="/">
          <button className="bg-pink-700 p-6 mr-10 rounded-2xl">Home</button>
        </Link>
        <Link to="/create">
          <button className="bg-amber-700 p-6 rounded-2xl">
            Create Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
