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
import ContactUs from "./pages/contact-us";
import Error from "./pages/error-404";
import Booking from "./pages/booking";

class Markup extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route element={<ThemeLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="*" element={<Error />} />
              <Route path="/Booking" element={<Booking />} />
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
