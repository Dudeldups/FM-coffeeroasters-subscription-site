import "./Footer.scss";

import { Link } from "react-router-dom";

import CoffeeroastersLogo from "../CoffeeroastersLogo";
import FacebookLogo from "../FacebookLogo";
import TwitterLogo from "../TwitterLogo";
import InstagramLogo from "../InstagramLogo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <CoffeeroastersLogo />

        <nav className="footer__nav">
          <Link to="/">Home</Link>
          <Link to="about">About us</Link>
          <Link to="subscribe">Create your plan</Link>
        </nav>

        <div className="footer__logoContainer">
          <a href="#">
            <FacebookLogo />
          </a>
          <a href="#">
            <TwitterLogo />
          </a>
          <a href="#">
            <InstagramLogo />
          </a>
        </div>
      </div>
    </footer>
  );
}
