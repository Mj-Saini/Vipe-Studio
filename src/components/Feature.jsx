import React from "react";
import life from "../assets/img/svg/life.svg";
import news from "../assets/img/svg/yahoo.svg";
import topic from "../assets/img/svg/topic.svg";
import finance from "../assets/img/svg/finance.svg";

function Feature() {
  return (
    <>
      <section className="py-lg-5 py-4 bg_color_Team">
        <div className="container py-lg-5">
          <h2 className=" ff_konexy fw-normal fs_48 text-black">Featured on</h2>
          <div className="overflow-auto">
            <div className="d-flex justify-content-between align-items-center mt-lg-5 my-2 w_1290">
              <img className="logo-icon" src={news} alt="yahoo" />
              <img className="logo-icon" src={finance} alt="yahoo" />
              <img className="logo-icon" src={news} alt="yahoo" />
              <img className="logo-icon" src={topic} alt="yahoo" />
              <img className="logo-icon" src={life} alt="yahoo" />
              <img className="logo-icon" src={topic} alt="yahoo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feature;
