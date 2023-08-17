/*Allow clients to schedule appointments with agents for consultations.
Display upcoming appointments and manage the agent's availability. */
import React from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const AppointmentSchedulingPage = () => {
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleScheduleAppointment = () => {
    // Logic to schedule the appointment
    setOpenDialog(false);
    // Display a success message or update the appointments list
  };

  return (
    <Container>
      <Box marginTop={2}>
        <Typography variant="h4">Appointment Scheduling</Typography>
      </Box>

      <Box marginTop={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<CalendarTodayIcon />}
          onClick={handleOpenDialog}
        >
          Schedule Appointment
        </Button>
      </Box>

      {/* Display list of upcoming appointments here (if available) */}

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Schedule an Appointment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Choose a date and time for your appointment.
          </DialogContentText>
          {/* Add date and time picker fields */}
          <TextField
            label="Date"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Time"
            type="time"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleScheduleAppointment} color="primary">
            Schedule
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AppointmentSchedulingPage;
