import React from "react";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
//import Carousel from "react-responsive-carousel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//var Carousel = require("react-responsive-carousel").Carousel;

const Pitchdeck = () => {
  return (
    <React.Fragment>
      <center>
        <div style={{ maxWidth: 1000 }} className="pitch-deck ">
          <h1 className="heading">Pitchdeck</h1>
          {/* <img style={{ maxHeight: "800px", maxWidth: "800px" }} src={img1}></img>
      <img style={{ maxHeight: "800px", maxWidth: "800px" }} src={img2}></img>
      <img style={{ maxHeight: "800px", maxWidth: "800px" }} src={img3}></img>
      <img style={{ maxHeight: "800px", maxWidth: "800px" }} src={img4}></img>
      <img style={{ maxHeight: "800px", maxWidth: "800px" }} src={img5}></img>
      <img style={{ maxHeight: "800px", maxWidth: "800px" }} src={img6}></img> */}
          <br />
          <center>
            <Carousel
              showArrows={true}
              //onChange={onChange}
              //onClickItem={onClickItem}
              //onClickThumb={onClickThumb}
            >
              <div>
                <img
                  alt=""
                  style={{ maxHeight: 1000, maxWidth: 1000 }}
                  src={img1}
                />
              </div>
              <div>
                <img
                  alt=""
                  style={{ maxHeight: 1000, maxWidth: 1000 }}
                  src={img2}
                />
              </div>
              <div>
                <img
                  alt=""
                  style={{ maxHeight: 1000, maxWidth: 1000 }}
                  src={img3}
                />
              </div>
              <div>
                <img
                  alt=""
                  style={{ maxHeight: 1000, maxWidth: 1000 }}
                  src={img4}
                />
              </div>
              <div>
                <img
                  alt=""
                  style={{ maxHeight: 1000, maxWidth: 1000 }}
                  src={img5}
                />
                <a
                  className="legend"
                  href="https://www.youtube.com/watch?v=eUxRJvDZuFQ&feature=youtu.be"
                >
                  Click Here For Demo
                </a>
              </div>
              <div>
                <img
                  alt=""
                  style={{ maxHeight: 1000, maxWidth: 1000 }}
                  src={img6}
                />
              </div>
            </Carousel>
          </center>
        </div>
      </center>
    </React.Fragment>
  );
};

export default Pitchdeck;
