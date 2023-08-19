import React from "react";
import { Alert } from "@material-ui/lab";

const SuccessMessage = ({ message }) => {
  return (
    <Alert variant="outlined" severity="success">
      {message}
    </Alert>
  );
};

const WarningMessage = ({ message }) => {
  return (
    <Alert variant="outlined" severity="warning">
      {message}
    </Alert>
  );
};

const ErrorMessage = ({ message }) => {
  return (
    <Alert variant="outlined" severity="error">
      {message}
    </Alert>
  );
};

export { SuccessMessage, WarningMessage, ErrorMessage };
