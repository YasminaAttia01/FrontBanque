//Allow clients to set up notifications for account activities, such as low balance alerts or large transactions.

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  Paper,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Arial, sans-serif",
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const NotificationSettings = () => {
  const [lowBalanceAlert, setLowBalanceAlert] = useState(false);
  const [largeTransactionAlert, setLargeTransactionAlert] = useState(false);

  const handleLowBalanceAlertChange = (event) => {
    setLowBalanceAlert(event.target.checked);
  };

  const handleLargeTransactionAlertChange = (event) => {
    setLargeTransactionAlert(event.target.checked);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
        <Box marginTop={2}>
          <Typography variant="h4">Notification Settings</Typography>
        </Box>

        <Divider />

        <Box marginTop={2}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">Set Up Notifications</Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={lowBalanceAlert}
                    onChange={handleLowBalanceAlertChange}
                  />
                }
                label="Low Balance Alert"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={largeTransactionAlert}
                    onChange={handleLargeTransactionAlertChange}
                  />
                }
                label="Large Transaction Alert"
              />
            </FormGroup>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default NotificationSettings;
