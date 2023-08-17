import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";

const DocumentDialog = ({ open, onClose }) => {
  const handleUploadDocument = () => {
    // Logic to upload the document
    onClose();
    // Display a success message or update the document list
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Upload Document</DialogTitle>
      <DialogContent>
        <DialogContentText>Choose a document to upload.</DialogContentText>
        {/* Add file input and other fields */}
        <TextField label="Document Name" fullWidth />
        {/* Add more input fields as needed */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleUploadDocument} color="primary">
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DocumentDialog;
