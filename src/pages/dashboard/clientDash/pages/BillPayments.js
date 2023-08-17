/*Allow clients to pay bills online, such as utilities, rent, or credit card payments.
Store payee information for easy access. */
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

const payees = [
  { id: 1, name: "Electricity Company", accountNumber: "12345678" },
  { id: 2, name: "Water Company", accountNumber: "87654321" },
  // Add more payees...
];

const BillPaymentPage = () => {
  const [selectedPayee, setSelectedPayee] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayBill = () => {
    // Handle payment logic here
    console.log(`Paid ${amount} to ${selectedPayee}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
        <Box marginTop={2}>
          <Typography variant="h4">Bill Payment</Typography>
        </Box>

        <Divider />

        <Box marginTop={2}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">Pay a Bill</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Select Payee</InputLabel>
                  <Select
                    value={selectedPayee}
                    onChange={(e) => setSelectedPayee(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {payees.map((payee) => (
                      <MenuItem key={payee.id} value={payee.name}>
                        {payee.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>Select a payee from the list</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
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
              onClick={handlePayBill}
              disabled={!selectedPayee || !amount}
            >
              Pay
            </Button>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default BillPaymentPage;
