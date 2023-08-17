/*Allow agents to communicate with clients securely.
Provide a messaging interface for discussing financial matters. */
import React, { useState } from "react";
import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";

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

const ClientCommunicationPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        { text: newMessage, sender: "Agent", timestamp: new Date() },
      ]);
      setNewMessage("");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
        <Box marginTop={2}>
          <h2>Client Communication</h2>
        </Box>

        <Divider />

        <Box marginTop={2}>
          <List>
            {messages.map((message, index) => (
              <ListItem
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems:
                    message.sender === "Agent" ? "flex-end" : "flex-start",
                  marginBottom: "10px",
                }}
              >
                <ListItemText
                  primary={message.text}
                  secondary={`${
                    message.sender
                  } - ${message.timestamp.toLocaleString()}`}
                  style={{
                    background:
                      message.sender === "Agent" ? "#1976d2" : "#f5f5f5",
                    color: message.sender === "Agent" ? "#fff" : "#333",
                    padding: "10px",
                    borderRadius: "10px",
                    maxWidth: "70%",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider />

        <Box marginTop={2}>
          <TextField
            label="Message"
            multiline
            rows={3}
            fullWidth
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              onClick={handleSendMessage}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ClientCommunicationPage;
