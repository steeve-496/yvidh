import React, { useState } from "react";
import { Parallax } from "react-parallax";
import "./faq.css";
import Faqmain from "./faqmain";

export default function Fag() {
  const [faqs, setFaqs] = useState([
    {
      question: "Do you have any transportation facilities?",
      answer:
        "No",
      open: true
    },
    {
      question: "Do you have any transportation facilities?",
      answer: "You! The viewer!",
      open: false
    },
    {
      question:
        "How many questions does it take to makes a succesful FAQ Page?",
      answer: "This many!",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <div className="faqmaincontainer">
      <div className="faqcontainer">
        <Parallax
          className="FaqParallax"
          bgImage="./assets/faq/v102_15.png"
          strength={800}
        ></Parallax>
        <div className="faqinnercontainer">
          <div className="faqcontent">
            <div className="faqheading">
              <div><h1>FAQ</h1></div>
            </div>
            <div className="faqmaincontent">
            <div className="faqs">
        {faqs.map((faq, index) => (
          <Faqmain faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
          </div>
          </div>
          
        </div>
        <div className="footercontainer">
          <div className="footercontent">
            <div className="fleft fitem">
              <div className="fleftinner">
                <h5><a className="flefta" href="">WWW.Yvidh.live</a></h5>
              </div>
            </div>
            <div className="fcenter fitem">
              <div className="fcenterinner">
                <div className="fcenterimg">
                <img src="./assets/home/yvidh.png"/>
                </div>
                <div><h5>Powered by Yvidh24</h5></div>
                <div><h5>website committe</h5></div>
                
                
                
              </div>
            </div>
            <div className="fright fitem">
              <div className="frightinner">
                <a href=""><img src="./assets/faq/facebook.png" /></a>
                <a href=""><img src="./assets/faq/instagram.png" /></a>
                <a href=""><img src="./assets/faq/linkedin.png" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
