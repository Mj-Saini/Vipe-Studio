import React from "react";
import { pcc } from "./../assets/js/Intezer";
import astronaud from "../assets/img/webp/astronot.webp";

function Guide() {
  return (
    <section className="py-lg-5 mb-5 ">
      <div className="container my-5 pb-sm-5">
        <div className="row pb-5 mb-xl-4">
          <div className="col-lg-4">
            <div className="d-flex justify-content-center align-items-center h-100">
              {" "}
              <img
                className="w-100 w_sm_75 w_lg_100"
                src={astronaud}
                alt="imgg"
              />
            </div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0">
            <p className=" ff_gilroy_normal fs_16 text_gray mb-0">
              HAVE YOU SEEN OUR MASCOT?
            </p>
            <h2 className=" ff_konexy fw-normal fs_48 text-black mb-0">
              Success Guides{" "}
            </h2>
            <div className="d-flex gap-2 mt-3 pt-1 flex-wrap">
              <a
                className="guide_btn ff_gilroy_semibold fs_16 text_violet d-inline-block"
                href="#"
              >
                Category-1
              </a>
              <a
                className="guide_btn ff_gilroy_semibold fs_16 text_violet d-inline-block"
                href="#"
              >
                Category-2
              </a>
              <a
                className="guide_btn ff_gilroy_semibold fs_16 text_violet d-inline-block"
                href="#"
              >
                Category-3
              </a>
              <a
                className="guide_btn ff_gilroy_semibold fs_16 text_violet d-inline-block"
                href="#"
              >
                Category-4
              </a>
            </div>
            <div className="row mt-lg-3 justify-content-center">
              {pcc.map((data) => {
                return (
                  <div className="col-md-4 col-sm-6 mt-4">
                    <div className="pcc_card  position-relative z_index0 overflow-hidden py-3 px-3">
                      {/* <div className="overlay_oncard position-absolute"></div> */}

                      <img className="w-100" src={data.img} alt="pcc" />
                      <h2 className=" ff_gilroy_semibold fs_24 text_black mb-0 mt-3">
                        {data.head}
                      </h2>
                      <p className=" ff_gilroy_normal fs_16 text-black opacity_07 mb-0 mt-2">
                        {data.para}
                      </p>
                      <a
                        className="z_index3 ff_gilroy_semibold fs_16 text_violet mt-3 "
                        href="#"
                      >
                        {data.link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guide;
