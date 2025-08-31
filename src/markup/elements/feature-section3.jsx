import React, { Component } from "react";

class LatestNewsSection extends Component {
  render() {
    return (
      <>
        <section className="section-sp1 service-wraper2">
          <div className="container">
            <div className="heading-bx text-center">
              <div className="col-lg-6 mb-30"></div>
              <div className="heading-bx">
                <h6 className="title-ext text-secondary">Metodologia</h6>
                <h2 className="title">Mais do que Regras.</h2>
                <p>
                  Aprender inglês é se comunicar, entender culturas e explorar
                  novas possibilidades.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-3 col-sm-6 mb-30">
                <div className="feature-container feature-bx3">
                  {/* <h2 className="counter text-secondary">1</h2> */}
                  <h5 className="ttr-title">Interação e Comunicação</h5>
                  <p>
                    Metodologia internacional e comunicativa, com foco na
                    conversação e prática real do inglês.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-30">
                <div className="feature-container feature-bx3">
                  {/* <h2 className="counter text-secondary">2</h2> */}
                  <h5 className="ttr-title">Aprendizado Contextualizado</h5>
                  <p>
                    O inglês é aprendido de forma significativa, dinâmica e
                    personalizada, respeitando seu ritmo.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-30">
                <div className="feature-container feature-bx3">
                  {/* <h2 className="counter text-secondary">250</h2> */}
                  <h5 className="ttr-title">Recursos Modernos</h5>
                  <p>
                    Uso de ferramentas digitais e tecnologia para tornar a
                    aprendizagem mais imersiva e eficaz.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-30">
                <div className="feature-container feature-bx3">
                  {/* <h2 className="counter text-secondary">800</h2> */}
                  <h5 className="ttr-title">Imersão Completa</h5>
                  <p>
                    Trabalhamos fala, escuta, leitura e escrita, sempre com
                    interação como ponto central para seu aprendizado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default LatestNewsSection;
