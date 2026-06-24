import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h2>UserCards</h2>
      </div>

      <nav>
        <a href="#">Home</a>
        <a href="#">Developers</a>
        <a href="#">Projects</a>
        <a href="#">Community</a>
      </nav>

      <button>Explore</button>
    </header>
  );
};

export default Header;