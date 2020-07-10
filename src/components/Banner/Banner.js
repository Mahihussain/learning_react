import React, { useState } from "react";
import BannerImage from "../../deliveries.svg";

const Banner = (props) => {
  return (
    <section className="banner">
      <div className="content">
        <h2> Wave Shape Banner</h2>
        <p>
          lorem ipsam lorem ipsam lorem ipsam lorem ipsam lorem ipsam lorem
          ipsam lorem ipsam lorem ipsam lorem ipsam lorem ipsam lorem ipsam
          lorem ipsam lorem ipsam lorem ipsam lorem ipsam lorem ipsam
        </p>
      </div>
      <div className="banner-img">
        <img src={BannerImage} />
      </div>
      <svg
        className="landing-wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,128L48,149.3C96,171,192,213,288,213.3C384,213,480,171,576,154.7C672,139,768,149,864,176C960,203,1056,245,1152,229.3C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Banner;
