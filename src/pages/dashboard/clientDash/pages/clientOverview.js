/*Display an overview of the client's accounts, including balances and account types.
Show recent transactions and pending transactions.
Allow clients to filter transactions by date, type, or amount. */
import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TransactionHistoryIcon from "@mui/icons-material/History";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ClientProfile from "./ClientProfile"; // You can implement this component separately

const ClientOverviewPage = () => {
  return (
    <Container>
      <Box marginTop={2}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Avatar sx={{ width: 100, height: 100 }} />
                <Typography variant="h6">Client Name</Typography>
                <Typography variant="body2">
                  Account Number: XXXXXXXXX
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant="body1">
                  <AccountBalanceIcon /> Account Balance: $10,000
                </Typography>
                <Typography variant="body1">Total Transactions: 50</Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant="body1">
                  <TransactionHistoryIcon /> Transaction History
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant="body1">
                  <ContactMailIcon /> Contact Bank
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      <Box marginTop={2}>
        {/* Display other sections here (Account Summary, Recent Transactions, Contact History, etc.) */}
        {/* You can also include the ClientProfile component */}
        <ClientProfile />
      </Box>
    </Container>
  );
};

export default ClientOverviewPage;
