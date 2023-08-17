/*Manage and store client documents securely.
Allow agents to upload and access important documents related to client accounts.*/

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DocumentDialog from "./DocumentDialog"; // You can implement this component separately

const DocumentPage = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Sample document data (replace with actual data)
  const documents = [
    {
      id: 1,
      name: "Client Agreement",
      uploadedBy: "Agent A",
      date: "2023-08-15",
    },
    {
      id: 2,
      name: "Identity Proof",
      uploadedBy: "Agent B",
      date: "2023-08-12",
    },
    // Add more documents...
  ];

  return (
    <Container>
      <Box marginTop={2}>
        <Typography variant="h4">Document Management</Typography>
      </Box>

      <Box marginTop={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<CloudUploadIcon />}
          onClick={handleOpenDialog}
        >
          Upload Document
        </Button>
      </Box>

      <Divider />

      <Box marginTop={2}>
        <Typography variant="h6">Uploaded Documents</Typography>
        <List>
          {documents.map((document) => (
            <ListItem key={document.id}>
              <ListItemText
                primary={document.name}
                secondary={`Uploaded by ${document.uploadedBy} on ${document.date}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <DocumentDialog open={openDialog} onClose={handleCloseDialog} />
    </Container>
  );
};

export default DocumentPage;
