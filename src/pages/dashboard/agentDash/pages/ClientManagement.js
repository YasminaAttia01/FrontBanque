/*List of clients associated with the agent.
Provide details about each client's accounts, transactions, and profiles. */
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PersonIcon from "@mui/icons-material/Person";

const theme = createTheme({
  typography: {
    fontFamily: "Arial, sans-serif", // Replace with your chosen font
  },
  palette: {
    primary: {
      main: "#1976d2", // Replace with your primary color
    },
    secondary: {
      main: "#f50057", // Replace with your secondary color
    },
  },
});

const clientsData = [
  {
    id: 1,
    name: "John Doe",
    accounts: [
      { id: 101, type: "Savings", balance: 5000 },
      { id: 102, type: "Checking", balance: 2500 },
    ],
    transactions: [
      { id: 201, type: "Deposit", amount: 1000 },
      { id: 202, type: "Withdrawal", amount: -500 },
    ],
  },
  // Add more client data...
];

const ClientManagementPage = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <Container style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
        <Box marginTop={2}>
          <Typography variant="h4">Client Management</Typography>
        </Box>

        <Divider />

        <Box marginTop={2}>
          <List>
            {clientsData.map((client) => (
              <ListItem
                key={client.id}
                button
                onClick={() => setSelectedClient(client)}
                selected={selectedClient && selectedClient.id === client.id}
              >
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={client.name} />
              </ListItem>
            ))}
          </List>
        </Box>

        {selectedClient && (
          <Box marginTop={2}>
            <Typography variant="h6">Client Details</Typography>
            <Typography>Name: {selectedClient.name}</Typography>
            <Typography>Accounts:</Typography>
            <List>
              {selectedClient.accounts.map((account) => (
                <ListItem key={account.id}>
                  <ListItemIcon>
                    <AccountBalanceIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${account.type}: $${account.balance}`}
                  />
                </ListItem>
              ))}
            </List>
            <Typography>Transactions:</Typography>
            <List>
              {selectedClient.transactions.map((transaction) => (
                <ListItem key={transaction.id}>
                  <ListItemIcon>
                    <ShowChartIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${transaction.type}: $${transaction.amount}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default ClientManagementPage;
