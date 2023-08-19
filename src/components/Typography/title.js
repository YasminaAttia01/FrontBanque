import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { ColorScheme } from "../../utils/theme";

const Title = ({ title, fontSize }) => {
  return (
    <Typography
      style={{ fontWeight: "bold", fontSize, color: ColorScheme.PRIMARY }}
    >
      {title}
    </Typography>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
};

export default Title;
