import React from "react";
import { Svg, Path, Defs, Image, ClipPath } from "glamorous";

// import BaseIcon from "./BaseIcon"; // eslint-disable-line

// const BaseSvg = props => (
//   <Svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
//     <Path
//       fillRule="evenodd"
//       d="M7.288 14.022L3.34 10.074 2 11.414l5.288 5.288L18.65 5.34 17.31 4z"
//     />
//   </Svg>
// );

export default props => (
  <Svg
    className="fan15 fan12"
    xmlns="http://www.w3.org/2000/svg"
    width="480"
    height="480"
    viewBox="0 0 480 480"
    {...props}
  >
    {props.children}
  </Svg>
);
