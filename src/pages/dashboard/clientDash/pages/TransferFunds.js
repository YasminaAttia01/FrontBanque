//Enable clients to transfer funds between their own accounts.
//Support inter-account transfers and transfers to other bank accounts.

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  Paper,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
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

const TransferFunds = () => {
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = () => {
    // Handle transfer logic here
    console.log(`Transferred ${amount} from ${fromAccount} to ${toAccount}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
        <Box marginTop={2}>
          <Typography variant="h4">Transfer Funds</Typography>
        </Box>

        <Divider />

        <Box marginTop={2}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">
              Transfer Money Between Accounts
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>From Account</InputLabel>
                  <Select
                    value={fromAccount}
                    onChange={(e) => setFromAccount(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {/* Populate with account options */}
                  </Select>
                  <FormHelperText>Select the source account</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>To Account</InputLabel>
                  <Select
                    value={toAccount}
                    onChange={(e) => setToAccount(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {/* Populate with account options */}
                  </Select>
                  <FormHelperText>
                    Select the destination account
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Amount"
                  fullWidth
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              onClick={handleTransfer}
              disabled={!fromAccount || !toAccount || !amount}
            >
              Transfer
            </Button>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default TransferFunds;
