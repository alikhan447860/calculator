import React from "react";
import  ReactDOM  from "react-dom";
import * as fetch from "./App";

ReactDOM.render(
  <>
    <ol><li>
      Ali khan
    </li>
    <li> {
      fetch.name
    }</li>
    </ol>
  </>,
  document.getElementById("root")
)