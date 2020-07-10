import React from "react";
import Banner from "../Banner/Banner";
import Pricing from "../Pricing/Pricing";
import AboutUs from "../AboutUs/AboutUs";
import Testomonials from "../Testimonials/Testimonials";
import SocialMedia from '../SocialMedia/SocialMedia';
import Footer from '../Footer2/Footer';

export default function (props) {
  return (
    <>
      <Banner />
      <Pricing />
      <AboutUs/>
      <Testomonials/>
      <SocialMedia/>
      <Footer/>
    </>
  );
}
