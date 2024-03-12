import React, { useEffect, useRef } from "react";
import { Parallax } from "react-parallax";
import Atropos from "atropos/react";
import "atropos/css";
import "./countdown.css";
import Counter from "./counter";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Countdown() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="countdownContainer">
      <div className="countdown">
        <Parallax
          className="countdownprallax"
          bgImage="./assets/countdown/theyyam2.jpg"
          strength={800}
        ></Parallax>
        <div className="countkathak">
        <div className="kathakali">
            <Atropos className="my-atropos">
              <div data-aos="fade-up-left">
                <img
                  className="kathakimage"
                  src="./assets/countdown/yvidhlogo.svg"
                />
              </div>
            </Atropos>
          </div>
          <div className="countdowndisplay">
            <Counter />
          </div>
          
        </div>
      </div>
    </div>
  );
}
