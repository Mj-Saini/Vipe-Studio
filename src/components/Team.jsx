import React from "react";
import person from "../assets/img/webp/three-person.webp";

function Team() {
  return (
    <section id="Team" className=" pb-md-5 pb-4 bg_color_Team mb-md-5 mb-4">
      <div className="container mt-sm-4 mt-2 pt-2">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-6">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="100"
              className="d-flex justify-content-center flex-column h-100 py-4 pt-md-5 mt-xl-4 mb-0"
            >
              <h2 className=" ff_konexy fw-normal fs_48 text-black mb-0">
                Team Full of Stars
              </h2>
              <p className=" ff_gilroy_normal fs_16 text-balck opacity_07 mb-0 mt-2 pt-sm-1">
                Suspendisse consequat egestas arcu et et. Viverra quis euismod
                <span className="d-xxl-block">
                  neque luctus bibendum. Fringilla in nibh fringilla vulputate
                  in. Elit,
                </span>{" "}
                ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus
                tortor{" "}
                <span className="d-xxl-block">
                  sollicitudin risus eget euismod in bibendum turpis.
                </span>
              </p>
              <span className=" mt-sm-4 mt-3 pt-sm-2">
                <a
                  className="ff_gilroy_normal Primary_btn explore text-white fs_16 opacity-07"
                  href="#"
                >
                  Explore
                </a>
              </span>
            </div>
          </div>
          <div className="col-lg-6 mt-md-5 mt-4  mt-lg-0">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="100"
              className="d-flex justify-content-lg-end justify-content-center pt-lg-5 pt-xxl-0 ps-xl-3"
            >
              {" "}
              <img className="img  translate_y" src={person} alt="IMG" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
