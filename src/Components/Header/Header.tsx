import { useEffect, useState } from "react";
import useToggle from "../../hooks/useToggle";
import { NavLink } from "react-router-dom";

import closeIcon from "/assets/shared/mobile/icon-close.svg";
import hamburgerIcon from "/assets/shared/mobile/icon-hamburger.svg";
import CoffeeroastersLogo from "../CoffeeroastersLogo";

import "./Header.scss";

export default function Header() {
  const [isHamburgerOpen, toggleIsHamburgerOpen] = useToggle(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <CoffeeroastersLogo />

      <button
        className="hamburgerButton"
        onClick={toggleIsHamburgerOpen}
        aria-pressed={isHamburgerOpen}
        aria-label="toggle navigation menu">
        <span className="sr-only" aria-live="polite">
          {isHamburgerOpen ? "menu is open" : "menu is closed"}
        </span>
        <img
          src={isHamburgerOpen ? closeIcon : hamburgerIcon}
          alt=""
          width="16"
          height="15"
        />
      </button>

      <nav className="header__nav">
        <NavLink to="/" onClick={toggleIsHamburgerOpen}>
          Home
        </NavLink>
        <NavLink to="about" onClick={toggleIsHamburgerOpen}>
          About us
        </NavLink>
        <NavLink to="subscribe" onClick={toggleIsHamburgerOpen}>
          Create your plan
        </NavLink>
      </nav>
    </header>
  );
}
