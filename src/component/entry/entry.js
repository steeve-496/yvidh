import React, { Component } from "react";
import "./Entry.css";

export default class entry extends Component {
  render() {
    return (
      <div className="EntryContainer">
        <div className="MyEntry">
          <video src="./assets/0219(2).mp4" autoPlay muted loop></video>
        </div>
        <div className="text">
          <img className="yvidhText" src="./assets/Untitled-1.png" alt="Yivdh"/>
        </div>
      </div>
    );
  }
}
