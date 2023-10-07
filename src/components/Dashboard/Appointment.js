import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { blue, red } from "@mui/material/colors";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  useDeleteAppointmentMutation,
  useGetAllAppointSingleDateQuery,
} from "../../app/features/appointment/appointmentApi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useGetScheduleQuery } from "../../app/features/schedule/schedule";

const Appointment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [deleteAppointment] = useDeleteAppointmentMutation();
  const { data: allAppointment } = useGetAllAppointSingleDateQuery({
    date: new Date(startDate),
  });
  const { user } = useSelector((state) => state.persisted.user);

  const handleAppointmentDelete = async (id) => {
    const sentData = {
      email: user && user?.email,
      id,
    };

    const result = await deleteAppointment(sentData);
    if (result) {
      toast("Your appointment deleted successfully!", {
        toastId: "delete-alert",
      });
    }
  };

  return (
    <Box
      sx={{
        padding: {
          md: "10px",
        },
      }}
    >
      <Typography fontWeight="600" fontSize="22px">
        {" "}
        Manage Appointments
      </Typography>

      <Box marginTop="10px" marginBottom="20px">
        <Typography fontSize="18px" fontWeight="500">
          Select Date
        </Typography>
        <DatePicker
          showIcon
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </Box>

      <Box>
        <TableContainer component={Paper} sx={{ background: blue[200] }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
              >
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Patient Name
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Email
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Service
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Appointment Date
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allAppointment &&
                allAppointment?.data.map((row) => (
                  <TableRow key={row?._id} sx={{ "td, th": { border: 1 } }}>
                    <TableCell align="center" component="th" scope="row">
                      {row?.name}
                    </TableCell>
                    <TableCell align="center">{row?.patientEmail}</TableCell>
                    <TableCell align="center">{row?.service}</TableCell>
                    <TableCell align="center">
                      {new Date(row?.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ backgroundColor: red[500] }}
                        onClick={() => handleAppointmentDelete(row?._id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* {myAppointData && <Typography marginTop="200px">No Data Found</Typography>} */}
      </Box>
    </Box>
  );
};

export default Appointment;
