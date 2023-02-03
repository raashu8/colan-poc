import React from "react";
import { useScrollTrigger } from "@material-ui/core";

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(props.children, {
    // className: trigger ? "scroll-Effect" : "non-effect",
    style: {
      background: trigger ? "#d9e4ff70" : "transparent",
      backdropFilter: trigger ? "blur(17px)" : "",
      transition: trigger ? "0.3s" : "0.5s",
      width: trigger ? "86%" : "",
      marginRight: trigger ? "13px" : "0px",
      marginTop: trigger ? "10px" : "0px",
      borderRadius: trigger ? "17px" : "0px",
    },
  });
};

const ScrollToColor01 = (props) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToColor01;
