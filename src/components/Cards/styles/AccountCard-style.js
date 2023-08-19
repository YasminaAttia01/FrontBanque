import { makeStyles } from "@mui/styles";
import React from "react";

const useAccountsCardStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  svg: {
    width: 32,
  },
});

const useNoAccountsCardStyles = makeStyles({
  root: {
    display: "flex",
    marginTop: "62px",
    justifyContent: "center",
  },
});

export { useAccountsCardStyles, useNoAccountsCardStyles };
