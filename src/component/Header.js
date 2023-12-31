import React from "react";
import "./Header.css";
import Logo from "../assets/logo.png";
import Bars from "../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menu, setMenu] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menu === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenu(true)}
        >
          <img src={Bars} style={{ width: "1.5rem", height: "1.5rem" }}></img>
        </div>
      ) : (
        <ul className="menu">
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="home"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="programs"
              span={true}
              smooth={true}
            >
              Program
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="resons"
              span={true}
              smooth={true}
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="plan"
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              span={true}
              smooth={true}
              onClick={() => setMenu(false)}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
