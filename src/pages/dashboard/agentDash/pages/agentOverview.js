/*Display an overview of agent-specific activities and tasks.
Show statistics related to the number of clients, transactions, etc. */
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
import TransactionIcon from "@mui/icons-material/LocalAtm";
import CustomerIcon from "@mui/icons-material/People";
import AppointmentIcon from "@mui/icons-material/EventAvailable";
import PerformanceChart from "./PerformanceChart"; // You can implement this component separately

const AgentOverviewPage = () => {
  return (
    <Container>
      <Box marginTop={2}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Avatar sx={{ width: 100, height: 100 }} />
                <Typography variant="h6">Agent Name</Typography>
                <Typography variant="body2">Agent Designation</Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant="body1">
                  <TransactionIcon /> Transactions: 150
                </Typography>
                <Typography variant="body1">Total Amount: $500,000</Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant="body1">
                  <CustomerIcon /> New Customers: 20
                </Typography>
                <Typography variant="body1">
                  Avg. Transaction Time: 5 mins
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant="body1">
                  <AppointmentIcon /> Upcoming Appointments: 3
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      <Box marginTop={2}>
        {/* Display other sections here (Recent Transactions, Customer Engagement, etc.) */}
      </Box>

      <Box marginTop={2}>
        {/* Display PerformanceChart component */}
        <PerformanceChart />
      </Box>
    </Container>
  );
};

export default AgentOverviewPage;
