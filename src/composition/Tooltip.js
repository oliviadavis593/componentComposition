import React from "react";
import "./Tooltip.css";

function Tooltip(props) {
  return (
    <span className="Tooltip">
      <span className="Tooltip-content" style={{ color: props.color }}>
        {props.children}
      </span>
      <div className="Tooltip-message">{props.message}</div>
    </span>
  );
}

export default Tooltip;

/*====== Component Composition ====== (#8) */
//Tooltip Creation:
//Tooltip needs to be inline so they can be used within paragraph text (so a span element works)
//We need two sections inside Tooltip - 1) for text to display - 2) second for message that appears on a hover
//We'll use children prop for normal text & a prop called message for text that'll appear
//Tooltip.js ===> App.js

/*====== Component Composition ====== (#10) */
//Tooltip Color:
//We want maint text of tooltip to have configurable colors
//We can use props and inline styles to achieve this (Line: 7)
//Note:
//We'd normally prefer to use className and CSS to control style
//But here we've used inline styles so this was necessary
//Tooltip.js ===> Split.js
