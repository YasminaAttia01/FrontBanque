//Enable clients to reset their password or update their security settings
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
import { green } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  palette: {
    primary: {
      main: green[700],
    },
    secondary: {
      main: "#1976d2",
    },
  },
});

const SecuritySettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement password update logic
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{
          padding: "20px",
          backgroundColor: "#f7f7f7",
          minHeight: "100vh",
        }}
      >
        <Box marginTop={2}>
          <Typography variant="h4" color="primary">
            Security Settings
          </Typography>
        </Box>

        <Divider />

        <Box marginTop={2}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">Reset Password</Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Current Password"
                    type="password"
                    fullWidth
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="New Password"
                    type="password"
                    fullWidth
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Confirm New Password"
                    type="password"
                    fullWidth
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={
                      !currentPassword ||
                      !newPassword ||
                      newPassword !== confirmNewPassword
                    }
                  >
                    Update Password
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SecuritySettings;
