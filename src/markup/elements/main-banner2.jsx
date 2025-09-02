import React, { Component } from "react";
import { Link } from "react-router-dom";

// Import Images
import bg2 from "../../images/main-banner/bg2.jpg";
import logoImg from "../../images/main-banner/logo.png";
// import ptImg1 from '../../images/shap/trangle-orange.png';
// import ptImg2 from '../../images/shap/square-blue.png';
// import ptImg3 from '../../images/shap/chicle-blue-2.png';
// import ptImg4 from '../../images/shap/plus-orange.png';
// import ptImg5 from '../../images/shap/wave-orange.png';

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
                <Link
                  to="/appointment"
                  className="btn mt-5 btn-dark btn-lg shadow"
                >
                  Quero estudar inglês agora!
                </Link>
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
