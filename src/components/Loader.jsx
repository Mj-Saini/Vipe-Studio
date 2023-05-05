import React, { useEffect, useState } from "react";
function Loader() {
  const [loader, setloader] = useState(false);
  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 5500);
  }, []);
  {
    if (loader === false) {
      document.body.style.overflow = "initial";
      // document.body.classList = "overflow-initial bg-danger";
      document.documentElement.scrollTop = 0;
    } else {
      document.body.classList = "overflow-initial";
      document.documentElement.scrollTop = 0;
    }
  }
  return (
    <>
      {loader ? (
        <section
          style={{ zIndex: "1123" }}
          className=" min-vh-100 position-fixed h-100 w-100 bg-black"
        >
          {" "}
          <div id="loader-2">
            {" "}
            <div className="loader-content">
              <span></span> <span></span> <span></span> <span></span>{" "}
              <span></span>
              <span></span>{" "}
            </div>{" "}
          </div>{" "}
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export default Loader;
