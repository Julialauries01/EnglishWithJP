import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Elements
import BackToTop from "./elements/back-top";
import PageScrollTop from "./elements/page-scroll-top";

// Layout
import Header from "./layout/header";
import Footer from "./layout/footer";

// All Pages Router
import Index from "./pages/index";
import Faq from "./pages/faq";
import Error from "./pages/error-404";
import Booking from "./pages/booking";
import Appointment from "../markup/elements/appointment";

// import metodologia from "./elements/testimonial";

class Markup extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route element={<ThemeLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="*" element={<Error />} />
              <Route path="/Booking" element={<Booking />} />
              <Route path="/Appointment" element={<Appointment />} />
              {/* <Route path="/metodologias" element={<metodologia />} /> */}
            </Route>
          </Routes>
          <PageScrollTop />
        </BrowserRouter>
        <BackToTop />
      </>
    );
  }
}

function ThemeLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Markup;
