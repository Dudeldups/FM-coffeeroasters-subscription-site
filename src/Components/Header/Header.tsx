import { NavLink } from "react-router-dom";

import logo from "/assets/shared/desktop/logo.svg";

import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="coffeeroasters logo" />
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About us</NavLink>
        <NavLink to="subscribe">Create your plan</NavLink>
      </nav>
    </header>
  );
}
