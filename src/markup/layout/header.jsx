import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sticky from "react-stickynode";
import logo from "../../images/logo.png";
import logoWhite from "../../images/logo-white.png";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFormOpen, setIsSearchBtn] = useState(false);
  const quikSearchClose = () => setIsSearchBtn(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuLinkClick = () => {
    if (window.innerWidth <= 991) {
      setIsMenuOpen(false);
    }
  };

  const handleMenuCloseClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth >= 768);
    };

    // Check the screen size on initial render and whenever the window is resized
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuItems = [
    {
      id: "home",
      name: "Home",
      linkName: "home",
    },
    {
      id: "metodologia",
      name: "Metodologia",
      linkName: "methodology",
    },
    {
      id: "aboutus",
      name: "Sobre mim",
      linkName: "about",
    },
    {
      id: "testimonial",
      name: "Depoimentos",
      linkName: "testimonial",
    },
  ];

  return (
    <header className="header header-transparent rs-nav">
      <Sticky enabled={true} className="sticky-header navbar-expand-lg">
        <div className="menu-bar clearfix">
          <div className="container-fluid clearfix">
            <div className="menu-logo logo-dark">
              <img src={logo} alt="" />
            </div>

            <button
              className={`navbar-toggler collapsed menuicon justify-content-end ${
                isMenuOpen ? "open" : ""
              }`}
              type="button"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className="secondary-menu">
              <ul>
                <li className="num-bx">
                  <a href="https://wa.me/5564984028193">
                    <i className="fas fa-phone-alt"></i>
                    <span>(+55) 64 98402-8193</span>
                  </a>
                </li>
                <li className="btn-area">
                  <ScrollLink
                    to="appointment"
                    smooth={true}
                    duration={200}
                    offset={-70}
                    className="btn btn-secondary shadow"
                  >
                    CONTATE-ME{" "}
                    <i className="btn-icon-bx fas fa-chevron-right"></i>
                  </ScrollLink>
                </li>
              </ul>
            </div>

            <div
              className={`menu-links navbar-collapse collapse justify-content-end ${
                isMenuOpen ? "show" : ""
              }`}
              id="menuDropdown"
            >
              <div className="menu-logo">
                <Link to="/">
                  <img src={logoWhite} alt="" />
                </Link>
              </div>

              <ul className="nav navbar-nav">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <ScrollLink
                      to={item.linkName}
                      smooth={true}
                      duration={200}
                      offset={-70} // ajuste se o header estiver cobrindo
                      onClick={handleMenuLinkClick}
                    >
                      {item.name}
                    </ScrollLink>
                  </li>
                ))}
              </ul>

              <ul className="social-media">
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/"
                    className="btn btn-primary"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.google.com/"
                    className="btn btn-primary"
                  >
                    <i className="fab fa-google"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/"
                    className="btn btn-primary"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/"
                    className="btn btn-primary"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>

              <div className="menu-close" onClick={handleMenuCloseClick}>
                <i className="ti-close"></i>
              </div>
            </div>
          </div>
        </div>
      </Sticky>

      <div className={`nav-search-bar ${isSearchFormOpen ? "show" : ""}`}>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Type to search"
          />
          <span>
            <i className="ti-search"></i>
          </span>
        </form>
        <span id="searchRemove" onClick={quikSearchClose}>
          <i className="ti-close"></i>
        </span>
      </div>
    </header>
  );
};

export default Header;
