import React from "react";
import heroImg from "../assets/img/webp/hero-img.webp";
import search from "../assets/img/svg/search.svg";
import trust from "../assets/img/svg/trust.svg";
import star from "../assets/img/svg/start.svg";

import Header from "./Header";

function Hero() {
  return (
    <>
      <section id="Hero" className="bg-black pb-sm-5  position-relative">
        <span className="shadow_bg_hero position-absolute z_index-1"></span>{" "}
        <span className="shadow_bg_hero1 position-absolute z_index-1"></span>{" "}
        <div className="pt-3" style={{ zIndex: "102", position: "relative" }}>
          {" "}
          <Header />
        </div>
        <div className="container mt-xl-5 pt-lg-5">
          <div className="row pb-5">
            <div className="col-lg-6">
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-offset="100"
                style={{ zIndex: "12" }}
              >
                <h1
                  style={{ zIndex: "12" }}
                  className=" ff_konexy fw-normal fs_72 text-white mb-0 mt-4 Verticle_line position-relative"
                >
                  WordPress <span className="d-lg-block">Development</span>{" "}
                  Agency
                </h1>
                <h3 className=" ff_gilroy_bold text-white fs_24 mb-0 mt-md-4 mt-2 pt-1">
                  for Enterprise + Friendly Team{" "}
                </h3>
                <p className="ff_gilroy_normal text-white fs_16 opacity-07 mb-0 mt-md-4 mt-2 pt-1">
                  Vipe Studio is a WordPress Agency for development - a
                  long-term partner for any WordPress service. Websites
                  and,online shops development, maintenance and customization is
                  what we do best.
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-offset="100"
                  className="mt-4 pt-1  align-items-center d-flex gap-4"
                >
                  <a
                    className="ff_gilroy_normal Primary_btn d-inline-block text-white fs_16 opacity-07"
                    href="#"
                  >
                    Get Started
                  </a>

                  <a
                    className="ff_gilroy_normal secondary_btn d-inline-block text-white fs_16 opacity-07"
                    href="#"
                  >
                    <svg
                      className=" me-2"
                      width="25"
                      height="25"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 0C7.16429 0 0 7.16429 0 16C0 24.8357 7.16429 32 16 32C24.8357 32 32 24.8357 32 16C32 7.16429 24.8357 0 16 0ZM21.1464 16.2464L13.3464 21.9214C13.3037 21.9522 13.2533 21.9705 13.2008 21.9744C13.1482 21.9784 13.0957 21.9678 13.0488 21.9438C13.0019 21.9198 12.9626 21.8834 12.9351 21.8385C12.9075 21.7936 12.8929 21.7419 12.8929 21.6893V10.3464C12.8927 10.2937 12.9071 10.2419 12.9346 10.1968C12.962 10.1518 13.0014 10.1152 13.0484 10.0912C13.0954 10.0671 13.1481 10.0566 13.2007 10.0606C13.2533 10.0647 13.3037 10.0833 13.3464 10.1143L21.1464 15.7857C21.1833 15.8118 21.2133 15.8463 21.2341 15.8864C21.2548 15.9265 21.2657 15.9709 21.2657 16.0161C21.2657 16.0612 21.2548 16.1057 21.2341 16.1458C21.2133 16.1858 21.1833 16.2204 21.1464 16.2464Z"
                        fill="white"
                      />
                    </svg>
                    What is Vipe? (1min)
                  </a>
                </div>
              </div>
            </div>
            <div style={{ zIndex: "12" }} className="col-lg-6 mt-5 mt-lg-0">
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-offset="200"
                className=" d-flex position-relative "
              >
                <img className="w-100 Hero_img" src={heroImg} alt="img" />
                <div className="trushpiolet d-none d-sm-flex align-items-sm-start flex-column position-absolute px-3">
                  <img className="mt-1 w-75 " src={trust} alt="icon-img" />
                  <img className="mt-2 w-75" src={star} alt="icon-img" />
                  <p className="ff_jost fw-normal fs_16 text-white mt-2">
                    Rated 5.0 Excellent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ marginTop: "-1px" }}
        id="Heroes"
        className=" header_bottom pb-sm-5 pb-4 pt-4"
      >
        <div className="container pt-xxl-5">
          <div className="row">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="100"
              className="col-lg-6 "
            >
              <h2 className="ff_konexy fs_35 fw-normal text-white">
                Tell us more....
              </h2>

              <p
                style={{ zIndex: "12", position: "relative" }}
                className="ff_gilroy_normal text-white fs_16 opacity_07 mb-0"
              >
                Lectus vitae est ultrices sed. Sit aliquam commodo hac donec
                augue in quis. Magna vel orci sem neque fringilla et lectus
                laoreet.
              </p>
            </div>
            <div className="col-lg-6">
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-offset="100"
                className="d-flex flex-column align-items-lg-end mt-4 mt-lg-0"
              >
                <div className=" search_input w_sm_75 w-100 d-flex justify-content-between align-items-center pe-4">
                  <input
                    className="w-100 py-3 ps-sm-4 ps-2 pe-2"
                    type="text"
                    placeholder="What do you need assistance with?		"
                  />
                  <a href="#">
                    {" "}
                    <img src={search} alt="icon" />
                  </a>
                </div>
                <div className="d-flex justify-content-between align-items-center w_sm_75 w-100 mt-2">
                  {" "}
                  <span>
                    {" "}
                    <a
                      style={{ zIndex: "12", position: "relative" }}
                      className=" ff_gilroy_normal text_hover fs_16 text-white ps-2"
                      href="#"
                    >
                      <svg
                        className="circle me-1"
                        width="16"
                        height="19"
                        viewBox="0 0 16 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_26_772)">
                          <path
                            d="M5.71505 16L8.00001 13.7143V14.8571C9.13095 14.8573 10.2365 14.5219 11.1767 13.8934C12.117 13.2649 12.8496 12.3716 13.2819 11.3265C13.7141 10.2814 13.8266 9.13161 13.6051 8.02258C13.3835 6.91355 12.8379 5.89517 12.0373 5.09638L13.648 3.4781C14.3949 4.22041 14.9874 5.10333 15.3912 6.07588C15.795 7.04843 16.0022 8.09133 16.0008 9.14438C16.0008 13.5619 12.4198 17.1429 8.00229 17.1429H8.00077V18.2857L5.71505 16ZM0.000767779 9.14286C0.00610111 4.72686 3.58477 1.14819 8.00001 1.14286H8.00077V0L10.2865 2.28571L8.00077 4.57143V3.42857H7.99925C6.86831 3.42864 5.76281 3.7642 4.82265 4.39279C3.88249 5.02138 3.14994 5.91474 2.7177 6.95982C2.28546 8.0049 2.17296 9.15471 2.39444 10.2638C2.61592 11.3728 3.16142 12.3912 3.96191 13.1901L2.35277 14.8084C1.60627 14.0705 1.01386 13.1916 0.609962 12.2228C0.206062 11.254 -0.00127238 10.2146 5.87461e-06 9.16495V9.1421V9.14362L0.000767779 9.14286Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_26_772">
                            <rect width="16" height="18.2857" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <span className=" ff_gilroy_normal text_hover fs_16 text-white">
                      or
                    </span>
                    <a
                      style={{ zIndex: "12", position: "relative" }}
                      className=" ff_gilroy_normal text_hover fs_16 text-white ps-1"
                      href="#"
                    >
                      send us an inquire?{" "}
                    </a>
                  </span>
                  <a
                    style={{ zIndex: "12", position: "relative" }}
                    className=" ff_gilroy_normal text_hover fs_16 text-white"
                    href="#"
                  >
                    Learn more about...
                  </a>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
