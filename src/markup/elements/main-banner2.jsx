import React, { Component } from "react";
import { Link as ScrollLink } from "react-scroll";

// Import Images
import bg2 from "../../images/main-banner/bg2.jpg";
import logoImg from "../../images/main-banner/logo.png";

class aboutSection2 extends Component {
  render() {
    return (
      <>
        <div
          className="main-banner"
          style={{ backgroundImage: "url(" + bg2 + ")" }}
        >
          <div className="container inner-content">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6 col-sm-7">
                <h6 className="title-ext mb-5 text-primary">
                  Aulas de inglês com foco em conversação
                </h6>
                <h2>
                  Aulas dinâmicas e personalizadas para você ganhar confiança
                  falando inglês desde a primeira aula.
                </h2>
                {/* Botão com scroll suave */}
                <ScrollLink
                  to="appointment" // 👈 id da seção alvo
                  smooth={true}
                  duration={800} // tempo da animação
                  offset={-70} // ajuste se tiver header fixo
                  className="btn mt-5 btn-dark btn-lg shadow"
                >
                  Quero estudar inglês agora!
                </ScrollLink>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-5">
                <div className="banner-img">
                  <img src={logoImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default aboutSection2;
