import React, { Component } from "react";

// Import Images
import bg1 from "../../images/main-banner/bg1.jpg";

class aboutSection extends Component {
  render() {
    return (
      <sectio id="home">
        <div
          className="main-banner"
          style={{ backgroundImage: "url(" + bg1 + ")" }}
        ></div>
      </sectio>
    );
  }
}

export default aboutSection;
