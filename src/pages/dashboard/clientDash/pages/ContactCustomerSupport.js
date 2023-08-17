//Provide a communication channel for clients to reach out to customer support.
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

const ContactSupportPage = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // Handle submit logic here
    console.log(`Subject: ${subject}\nMessage: ${message}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
        <Box marginTop={2}>
          <Typography variant="h4">Contact Customer Support</Typography>
        </Box>

        <Divider />

        <Box marginTop={2}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">Send a Message to Support</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Subject"
                  fullWidth
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  fullWidth
                  multiline
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={!subject || !message}
            >
              Send
            </Button>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ContactSupportPage;
