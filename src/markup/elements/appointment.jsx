import React, { Component } from "react";

// Images
import lineBg from "../../images/appointment/line-bg.png";
import appMobile from "../../images/appointment/mobile.png";
import appWomen from "../../images/appointment/women.png";
import canada from "../../images/appointment/canada.png";
import Australia from "../../images/appointment/Australia.png";
import uk from "../../images/appointment/UnitedKingdom.png";

import AppointmentForm from "./appointment-form";

class aboutSection extends Component {
  render() {
    return (
      <>
        <section id="appointment" className="section-area account-wraper1">
          <div className="container-fluid">
            <div
              className="appointment-inner section-sp2"
              style={{
                backgroundImage: "url(" + lineBg + ")",
                backgroundRepeat: " no-repeat",
                backgroundPosition: "20px 140px",
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-5 col-lg-6 col-md-6">
                    <AppointmentForm />
                  </div>
                  <div className="col-xl-7 col-lg-6 col-md-6">
                    <div className="appointment-thumb">
                      <img src={appMobile} alt="" />
                      <div className="images-group">
                        <img className="img1" src={appWomen} alt="" />
                        {/* <img className="img2" src={Australia} alt=""/> */}
                        <img className="img3" src={canada} alt="" />
                        {/* <img className="img4" src={canada} alt=""/> */}
                        <img className="img5" src={Australia} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img className="pt-img1 animate1" src={uk} alt="" />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default aboutSection;
