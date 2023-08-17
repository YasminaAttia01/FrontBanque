import React from "react";
import { useBackdropStyles } from "./Backdrop.style";

const Backdrop = (props) => {
  const classes = useBackdropStyles();

  return <div className={classes.backdrop} onClick={props.click} />;
};

export default Backdrop;
