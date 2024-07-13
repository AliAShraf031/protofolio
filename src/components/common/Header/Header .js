import logo from "../../assets/images/download.png";
import { Link, NavLink } from "react-router-dom";
import HeaderCss from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  // const [toogle, setToogle] = useState(false);
  return (
    <header>
      <div className={HeaderCss["container"]}>
        <img src={logo} alt="" />

        {/* <ul className={HeaderCss["nav-links"]}>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/protofolio">Protofolio</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul> */}

        <div>
          <button
            class="btn btn-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div
            className="offcanvas offcanvas-end "
            style={{ backgroundColor: "#2d2e2e" }}
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                style={{ backgroundColor: "white" }}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body" style={{ backgroundColor: "#2d2e2e" }}>
              <ul className={HeaderCss["nav-links"]}>
                <li>
                  <Link to="/">Home </Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/protofolio">Protofolio</Link>
                </li>
                <li>
                  <Link to="/testimonials">Testimonials</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
