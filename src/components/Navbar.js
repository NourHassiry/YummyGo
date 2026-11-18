import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

import ReorderIcon from "@mui/icons-material/Reorder";

const NavBar = ({ cartCount }) => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavBar = () => {
    setOpenLinks(!openLinks);
  };

  const links = (
    <>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favorites">❤️ Favorites</Link>
      <Link to="/cart" className="cartLink">
        🛒 Cart
        {cartCount > 0 && <span className="cartBadge">{cartCount}</span>}
      </Link>
    </>
  );

  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/">
          <img src={logo} alt="YummyGo Logo" />
        </Link>
      </div>

      <button className="menuButton" onClick={toggleNavBar}>
        <ReorderIcon />
      </button>

      <div className="hiddenLinks" id={openLinks ? "open" : "close"}>
        {links}
      </div>

      <div className="rightSide">{links}</div>
    </div>
  );
};

export default NavBar;