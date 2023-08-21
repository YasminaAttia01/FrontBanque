//Allow clients to update their profile information, such as contact details and address.
import React, { useState } from "react";
import "./Style/profileanage.css"; // Import the CSS file
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
import { teal } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  palette: {
    primary: {
      main: teal[700],
    },
    secondary: {
      main: "#1976d2",
    },
  },
});

const ProfileUpdate = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement profile update logic
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="container">
        <Box className="title">
          <Typography variant="h4" color="primary">
            Update Profile
          </Typography>
        </Box>

        <Divider className="divider" />

        <Box className="paper">
          <Typography variant="h6" className="form-title">
            Update Contact Details
          </Typography>
          <form onSubmit={handleSubmit} className="form">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Full Name"
                  fullWidth
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="form-field"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-field"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Phone Number"
                  fullWidth
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="form-field"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  multiline
                  rows={4}
                  fullWidth
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-field"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="submit-button"
                >
                  Update Profile
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ProfileUpdate;
