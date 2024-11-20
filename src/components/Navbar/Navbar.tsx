"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./Navbar.css";
import { HamburgerMenuClose, HamburgerMenuOpen } from "./Icons";
import Image from "next/image";

function NavBar() {
  const [click, setClick] = useState(false);
  const pathname = usePathname();

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo" style={{ textDecoration: "none" }}>
          <span>{"Daren's Detailed"}</span>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a
              href="https://www.instagram.com/darens.detailed/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-links"
              onClick={handleClick}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 10px",
              }}
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
                style={{ filter: "brightness(0) invert(1)" }} // This makes the icon white
              />
            </a>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          {click ? (
            <span className="icon">
              <HamburgerMenuClose />
            </span>
          ) : (
            <span className="icon">
              <HamburgerMenuOpen />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
