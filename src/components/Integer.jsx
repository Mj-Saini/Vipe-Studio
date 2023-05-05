import React from "react";
import Intezer from "../assets/js/Intezer";

function Integer() {
  return (
    <section className="py-lg-5 pb-4 pt-3 mb-lg-5 ">
      <div className="container">
        <h2 className=" ff_konexy fw-normal fs_48 text-black mb-0">
          Integer et nisl non
        </h2>
        <div className="row mt-md-5 pt-md-2 justify-content-center">
          {Intezer.map((data) => {
            return (
              <div className="col-lg-4 col-md-6 mt-4">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-offset="200"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    borderRadius: " 16px",
                  }}
                  className="d-flex flex-column over align-items-center justify-content-center pt-lg-5 pt-4 pb-4 px-4 h-100 position-relative overflow-hidden"
                >
                  {/* <div className="overlay_oncard position-absolute"></div> */}
                  <img className="" src={data.img} alt="notes" />
                  <h2 className="ff_inter fw-semibold fs_24 text_black mb-0 mt-lg-5 mt-3 text-center px-sm-3">
                    {data.head}
                  </h2>
                  <p className=" ff_gilroy_normal fs_16 text-black opacity_07 mb-0 mt-3 text-center px-sm-3">
                    {data.pera}
                  </p>
                  <a
                    className="mb-md-3 ff_gilroy_semibold fs_16 text_violet mt-lg-3 pt-1 "
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
    </section>
  );
}

export default Integer;
