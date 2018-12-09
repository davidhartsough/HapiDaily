import React from "react";
import Goals from "./Goals";
import Impacts from "./Impacts";
import People from "./People";

export default ({ tabIndex }) => {
  switch (tabIndex) {
    case 0:
      return <Goals />;
    case 1:
      return <Impacts />;
    case 2:
      return <People />;
    default:
      return <Goals />;
  }
};
