import { React } from "react";
//import classes from './Navbar.module.css'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav">
      <p className="logo">Logo</p>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu_btn">
        <i className="fas fa-bars"></i>
      </label>

      <ul className="nav__links">
        <li className="navlist">
          <Link className="navlinks" to="/">
            Main
          </Link>
        </li>
        <li className="navlist">
          <Link className="navlinks" to="/ourGame">
            Our Game
          </Link>
        </li>
        <li className="navlist">
          <Link className="navlinks" to="/Discover_games">
            Discover Games
          </Link>
        </li>
        <li className="navlist">
          <Link className="navlinks" to="/Pitchdeck">
            Pitchdeck
          </Link>
        </li>
        <li className="navlist">
          <Link className="navlinks" to="/About">
            About
          </Link>
        </li>
      </ul>

      <Link className="cta" to="/contact">
        <button className="btn">Contact</button>
      </Link>
    </header>
  );
}

// className={`${classes.description} ${classes.yellow}`}
// for
