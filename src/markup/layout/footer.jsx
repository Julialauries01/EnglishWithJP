import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

// Images
import Logo from "../../images/logo.png";
import footerBg from "../../images/background/footer.jpg";
import instagram from "../../images/social/instagram.png";

class FooterSection extends Component {
  render() {
    const menuItems = [
      { id: "home", name: "Home", linkName: "home" },
      { id: "methodology", name: "Metodologia", linkName: "methodology" },
      { id: "about", name: "Sobre mim", linkName: "about" },
      { id: "testimonial", name: "Depoimentos", linkName: "testimonial" },
    ];

    return (
      <footer
        className="footer"
        style={{ backgroundImage: "url(" + footerBg + ")" }}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="widget widget_info">
                  <div className="footer-logo">
                    <Link to="/">
                      <img src={Logo} alt="Logo" />
                    </Link>
                  </div>
                  <div className="ft-contact">
                    <p>
                      Aprender inglês pode ser leve e transformador. Aqui você
                      encontra aulas práticas e dinâmicas para alcançar seus
                      objetivos. Vamos juntos nessa jornada?{" "}
                    </p>
                    <div className="contact-bx">
                      <a
                        href="https://wa.me/5564984028193"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="icon">
                          <i className="fas fa-phone-alt"></i>
                        </div>
                      </a>
                      <div className="contact-number">
                        <span>Contate-me</span>
                        <h4 className="number">(64) 98402-8193</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-6">
                <div className="widget footer_widget ml-50">
                  <h3 className="footer-title">Links Rápidos</h3>
                  <ul>
                    {menuItems.map((item) => (
                      <li key={item.id}>
                        <ScrollLink
                          to={item.linkName}
                          smooth={true}
                          duration={600}
                          offset={-70}
                          className="footer-link"
                        >
                          {item.name}
                        </ScrollLink>
                      </li>
                    ))}
                    {/* Link externo de contato */}
                    <li>
                      <Link to="/contact-us" className="footer-link">
                        Contato
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-6">
                <div className="widget footer_widget">
                  <h3 className="footer-title">Meus serviços</h3>
                  <ul>
                    <li>
                      <span>Aulas de inglês para brasileiros</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="widget widget_form">
                  <h3 className="footer-title">Entre em contato</h3>
                  <form
                    className="subscribe-form subscription-form mb-30"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="ajax-message"></div>
                    <div className="input-group">
                      <input
                        name="email"
                        required
                        className="form-control"
                        placeholder="Endereço de Email"
                        type="email"
                      />
                    </div>
                    <a
                      href="mailto:joaopedro@englishwithjp.com.br"
                      className="btn btn-secondary shadow w-100"
                    >
                      Contate-me agora
                    </a>
                  </form>

                  <div className="footer-social-link">
                    <ul>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.instagram.com/englishwith_jp"
                        >
                          <img src={instagram} alt="Instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="footer-bottom">
            <div className="row">
              <div className="col-12 text-center">
                <p className="copyright-text">
                  Copyright © 2024 Design & Developed by{" "}
                  <a
                    href="http://linkedin.com/in/julialauries/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-secondary"
                  >
                    Julia Laurie
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterSection;
