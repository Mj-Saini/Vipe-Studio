import React from "react";
import life from "../assets/img/svg/propy.svg";
import news from "../assets/img/svg/cciela.svg";
import topic from "../assets/img/svg/care.svg";
import finance from "../assets/img/svg/spark.svg";

function Term() {
  return (
    <>
      <section className="py-lg-5 py-4 bg_color_Team">
        <div className="container py-lg-5">
          <h2 className=" ff_konexy fw-normal fs_48 text-black">
            Long Term <span className="d-block">WordPress Partner</span>
          </h2>
          <p className=" ff_gilroy_normal fs_16 text-black opacity-75">
            Our motto is the long-term partnership – we will not only develop
            your perfect website, but will{" "}
            <span className="d-lg-block">
              {" "}
              be behind you through the whole process. They already trusted us:
            </span>
          </p>
          <div className="overflow-auto">
            <div className="d-flex justify-content-between align-items-center mt-lg-5 w_1290 pb-2">
              <img className="logo-icon" src={life} alt="yahoo" />
              <img className="logo-icon" src={news} alt="yahoo" />
              <img className="logo-icon" src={topic} alt="yahoo" />
              <img className="logo-icon" src={news} alt="yahoo" />
              <img className="logo-icon" src={finance} alt="yahoo" />
              <img className="logo-icon" src={news} alt="yahoo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Term;
