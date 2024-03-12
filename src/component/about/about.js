import React from "react";
import { Parallax } from "react-parallax";
import { useGlitch } from "react-powerglitch";
import "./about.css";

export default function About() {
  const glitch = useGlitch();
  return (
    <div className="aboutMainContainer">
      <Parallax
        className="AboutParallax"
        bgImage="./assets/about/aboutpage.png"
        strength={800}
      ></Parallax>
      <div className="aboutContainer">
        <div className="aboutyvidh">
          <div className="aboutyvidhinner">
            <div className="yvidhimg">
              <span ref={glitch.ref}>
                <img className="mainyvidhimg" src="./assets/about/yvidh.png" alt="yvidh" />
              </span>
            </div>
            <div className="stcetimg">
              <img className="mainstcetimg" src="./assets/about/stcet.png" alt="stcet" />
            </div>
          </div>
        </div>
        <div className="about">
          <div className="aboutheading">
            <h1 className="anta-regular">ABOUT US</h1>
          </div>
          <div className="aboutcontent anta-regular">
            <h4 >

            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
