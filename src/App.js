import React from "react";
import "./styles.css";
import Split from "./composition/Split";
import Tooltip from "./composition/Tooltip";

//make 2 tooltip here and another inside the App directly
const firstTooltip = (
  <Tooltip message="tooltip message" color="#126BCC">
    ipsum
  </Tooltip>
);

const secondToolTip = (
  <Tooltip message="another tooltip message" color="hotpink">
    officiis
  </Tooltip>
);

function App() {
  return (
    <main className="App">
      <Split className="left">
        This is the content for the left `Split`. Lorem {firstTooltip}
      </Split>
      <Split className="right">
        This is the content for the right `Split`. ipsum {secondToolTip}
        <Tooltip message="one more tooltip message">Necessitatibus?</Tooltip>
      </Split>
    </main>
  );
}

export default App;

/*==== Component Composition (#1) ======*/
//Reusing Components:
//We can make custom components that can beu used over and over again in different sections of our code base
//Made a basic layout to start with
//App.js ===> Split.js

/*==== Component Composition (#3) ======*/
//Reusing Components:
//Inside browser we can see the Lorem ipsum content displayed
//If we duplicate <Split /> multiple times = it will render that content multiple times!
//Note: <Split /> components inside the parent are called component instances

/*==== Component Composition (#4) ======*/
//Reusing Components:'
//Added content between the two component instances
//Each has their own content
//The content in the parent has not populated in the browser
//We need to use children prop to get the new copy
//App.js ===> Split.js

/*==== Component Composition (#6) ======*/
//Reusing Components:
//We want to style the left side differently than the right
//Create className for each component instance (lines: 8-9)
//Went into Styles.css to style the left & right classes
//Problem:
//The content doesn't show up and nothing has changed in the webpage
//Solution:
//Make Split component configurable (make Split component understand the new classNames)
//When making custom components - they won't use any className props their parent give them - unless we explictly add that feature to our custom component
//App.js ===> Split.js

/*====== Component Composition ====== (#9) */
//Tooltip Creation:
//Import Tooltip component
//Make 3 Tooltips - each with children and a message prop
//App.js ===> Tooltip.js

/*====== Component Composition ====== (#11) */
//Tooltip Color:
//Now we can update instances of Tooltip we created in here
//Added new colors:  (Lines: 7 & 10)
