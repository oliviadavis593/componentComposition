import React from "react";
import "./Split.css";

function Split(props) {
  const combinedClassName = `split ${props.className}`;
  return (
    <div className={combinedClassName}>
      {/*This is the content of the split component. Lorem ipsum dolor sit amet
      consectetur.*/}
      {props.children}
    </div>
  );
}

export default Split;

/*==== Component Composition (#2) ======*/
//Reusing Components
//Added some text between <div> elements
//Then added default export statement
//Split.js ===> App.js

/*==== Component Composition (#5) ======*/
//Reusing Components:
//Replaced content inside Split component for props.children
//..so it can take the content of the parent & not the child
//Split.js ===> App.js

/*==== Component Composition (#7) ======*/
//Reusing Components: (Lines: 5 & 7)
//Added code to read the props and create a new combined className
//combinedClassName includes the hardcoded split class & className passed in as a prop (either right or left in this case)
//Split.js ===> Tooltip.js
