import React from "react";
import { Link } from "react-router-dom";
import flowerLogo from "../images/logaster-2020-08-t-lily-logo-4.png"

const Navbar = () => {
  return (
    <div className="navbar-dark bg-dark shadow">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
              <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                  <Link class="navbar-brand" to="/">
                  <img src={flowerLogo} alt=""  className="logo"/>
                    Lily's Garden
                  </Link>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <Link
                          class="nav-link active"
                          aria-current="page"
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" className="nav-link active"
                          aria-current="page"  to="aboutus">
                          About Us
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link"  className="nav-link active"
                          aria-current="page"to="/services">
                          Services
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" className="nav-link active"
                          aria-current="page" to="/contactus">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
