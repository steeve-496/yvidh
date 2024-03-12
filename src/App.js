import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and other necessary components from react-router-dom
import "./App.css";
import Entry from "./component/entry/entry";
import Home from "./component/home/home";
import Countdown from "./component/countdown/countdown";
import About from "./component/about/about";
import Events from "./component/events/events";
import Technical from "./component/technicalevents/technical";
import Mainpage from "./component/mainPage/mainpage";
import Faq from "./component/faq/faq";
import Featureevent from "./component/featureevent/featureevent";
import { Link } from 'react-router-dom';

function App() {
  const [showSections, setShowSections] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isMainPage, setIsMainPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsNavbarFixed(true);
        setIsMainPage(false);
      } else {
        setIsNavbarFixed(false);
        setIsMainPage(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    // Simulate preloader hiding after 5 seconds
    const timeoutId = setTimeout(() => {
      setShowSections(true);
    }, 6500);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Router> {/* Wrap your entire App component with Router */}
      <div className="App">
        {!showSections && (
          <div className="mainentrycontainer">
            <Entry />
          </div>
        )}
        {showSections && (
          <>
            <section className="Sections" id="mainpage"><Mainpage/></section>
            <div className={`navbarouter ${isNavbarFixed ? 'fixed' : ''}`}>
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                  <a className="navbar-brand" href=""><img src="./assets/home/yvidh.png"  /> </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon btn-light"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="#MainPage">Home</a>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/events">Events</Link> 
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#AboutUs">About</a>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contacts">Contacts</Link> 
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>  
            <section className="intersection"> <img src="./assets/home/frame2.jpg" alt="" /></section>
            <section className="Sections" id="CountDown">
              <Countdown />
            </section>
            <section className="Sections" id="AboutUs">
              <About />
            </section>
            {/* <section className="Sections" id="events">
              <Events />
            </section> */}
            {/* <section className="Sections" id="contacts">
              <Contacts />
            </section> */}
            {/* <section className="Sections" id="credits"></section> */}
            {/* <section className="Sections" id="technical">
              <Technical />
            </section> */}
            {/* <section className="featureeventSec">
                <Featureevent/>
            </section> */}
            <section className="Sections" id="faq"><Faq/></section>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
