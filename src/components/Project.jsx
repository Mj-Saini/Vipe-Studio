import React from "react";
import textIimg from "../assets/img/webp/text-img.webp";

function Project() {
  return (
    <section className="bg-white py-lg-5 py-4 ">
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-6">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="100"
              className="d-flex justify-content-center"
            >
              {" "}
              <img
                className="w-100 w_sm_75 w_lg_100 pe-lg-4"
                src={textIimg}
                alt="IMG"
              />
            </div>
          </div>
          <div className="col-lg-6 mt-md-5 mt-5 mt-lg-0">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="100"
              className="d-flex ps-lg-4 justify-content-center flex-column h-100"
            >
              <h2 className=" ff_konexy fw-normal fs_48 text-black mb-0">
                <span className="text_violet">Agile WordPress</span> Development
                Project management{" "}
              </h2>
              <p className=" ff_gilroy_normal fs_16 text-balck opacity_07 mb-0 mt-2 pt-sm-1">
                Suspendisse consequat egestas arcu et et. Viverra quis euismod
                neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
                Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum.
                Lacus tortor sollicitudin risus eget euismod in bibendum turpis.{" "}
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
        </div>
      </div>
    </section>
  );
}

export default Project;
