import React from "react";
import PropTypes from "prop-types";
import {
  IconButton,
  Typography,
  Divider,
  Button,
  ThemeProvider,
} from "@mui/material"; // Import from MUI v5
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddIcon from "@mui/icons-material/Add";
import { Title } from "../Typography/title";
import { ColorScheme } from "../../utils/theme";
import { Theme } from "../../utils/CustomThemeProvider";
import {
  useAccountsCardStyles,
  useNoAccountsCardStyles,
} from "./styles/AccountCard-style";

const AccountsCard = ({
  svg,
  currencyIcon,
  fullCurrencyText,
  balance,
  iban,
  onAccountClicked,
}) => {
  const classes = useAccountsCardStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.svg}>{svg}</div>
        <Title title={fullCurrencyText} fontSize={18} />
        <div>
          <IconButton
            style={{ color: ColorScheme.PRIMARY }}
            onClick={onAccountClicked}
          >
            <NavigateNextIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      <Typography style={{ margin: "0 auto", marginTop: "24px" }} variant="h4">
        {currencyIcon}
        {balance}
      </Typography>
      <Divider style={{ marginTop: 24 }} light />
      <Typography
        style={{
          marginTop: "14px",
          letterSpacing: 1,
          color: "rgba(0, 0, 0, 0.3)",
        }}
        component="p"
      >
        {!!iban ? iban : "XXXX APL0 0099 YYYY ZZZZ 78"}
      </Typography>
    </>
  );
};

AccountsCard.propTypes = {
  svg: PropTypes.node,
  currencyIcon: PropTypes.string,
  fullCurrencyText: PropTypes.string,
  balance: PropTypes.number,
  iban: PropTypes.string,
  onAccountClicked: PropTypes.func,
};

const NoAccountsCard = ({ onCreateNewAccountClicked }) => {
  const classes = useNoAccountsCardStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Button
          style={{
            fontWeight: "bold",
            textTransform: "none",
            letterSpacing: 1,
          }}
          color="primary"
          variant="contained"
          startIcon={<AddIcon />}
          onClick={onCreateNewAccountClicked}
        >
          Create new account
        </Button>
      </ThemeProvider>
    </div>
  );
};

NoAccountsCard.propTypes = {
  onCreateNewAccountClicked: PropTypes.func,
};

export { AccountsCard, NoAccountsCard };
