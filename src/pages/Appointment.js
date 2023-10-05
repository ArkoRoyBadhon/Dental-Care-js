import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { useGetServicesQuery } from "../app/features/service/serviceApi";
import { toast } from "react-toastify";
import {
  useCreateAppointmentMutation,
  useGetAllAppointSingleDateQuery,
} from "../app/features/appointment/appointmentApi";
import { useSelector } from "react-redux";

const Appointment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedService, setSelectedService] = useState("");
  //   const [countAppoint, setCountAppoint] = useState(10);

  const { user } = useSelector((state) => state.persisted.user);

  const { data: serviceData } = useGetServicesQuery();
  const [createAppointment] = useCreateAppointmentMutation();
  const { data: allAppointment } = useGetAllAppointSingleDateQuery({
    date: new Date(startDate),
  });
  //   const {data: seatCount} = useGetAppointSeatQuery(startDate)

  // console.log(allAppointment && allAppointment.data);
  const alreadyBook =
    allAppointment &&
    allAppointment?.data?.find(
      (item) => item?.patientId === (user && user?.email)
    );

  // console.log("already", alreadyBook);
  // console.log("already user", user && user?.email);

  const currentDate = new Date();
  const nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + 1);
  const nextMaxDate = new Date(currentDate);
  nextMaxDate.setDate(currentDate.getDate() + 8);

  const handleChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleAppointment = () => {
    const appointInfo = {
      appointmentDate: new Date(startDate),
      service: selectedService,
      patientId: user && user?.email,
    };

    if (startDate <= nextDate || startDate >= nextMaxDate) {
      toast("Please select a valid Date!", {
        toastId: "invalid-date",
      });
    } else {
      if (selectedService) {
        if (alreadyBook) {
          toast("You have already booked a appointment in this date!", {
            toastId: "appoint-already",
          });
        } else {
          if (appointInfo?.patientId) {
            createAppointment(appointInfo);
            toast("Successfully Appointment Booked", {
              toastId: "appoint-book",
            });
          } else {
            toast("Please Login First", {
              toastId: "appoint-book-login",
            });
          }
        }
      }
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        paddingX: "60px",
        paddingY: "20px",
      }}
    >
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "24px",
          borderBottom: "4px solid gray",
        }}
      >
        Get Your Appointment Now
      </Typography>

      <Box marginTop="40px">
        <Typography fontSize="18px" fontWeight="500">
          Select Date
        </Typography>
        <DatePicker
          showIcon
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <br />
        <Typography fontSize="10px">
          Please select a date between tomorrow to next 7 days
        </Typography>

        <Typography
          sx={{
            marginTop: "10px",
          }}
        >
          <b>Selected Date:</b> {format(new Date(startDate), "yyyy-MM-dd")}
        </Typography>

        <Typography
          sx={{
            marginTop: "10px",
          }}
        >
          <b>Available Seats:</b>{" "}
          {allAppointment && 10 - allAppointment.data.length}
        </Typography>

        <Typography
          sx={{
            marginTop: "10px",
          }}
        >
          <b>Select a Service:</b>
        </Typography>

        <FormControl size="small" sx={{ minWidth: 120, marginTop: "10px" }}>
          <InputLabel id="demo-simple-select-required-label">
            Service
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={selectedService}
            label="Service *"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {serviceData &&
              serviceData?.data?.map((item) => {
                return (
                  <MenuItem key={item?._id} value={item?.title}>
                    {item?.title}
                  </MenuItem>
                );
              })}
          </Select>
          {/* <FormHelperText>Required</FormHelperText> */}
        </FormControl>
        <Typography
          sx={{
            marginTop: "10px",
          }}
        >
          <b>Selected Service:</b>{" "}
          {selectedService ? selectedService : <span>not selected*</span>}
        </Typography>

        <Box marginTop="20px">
          {allAppointment && allAppointment.data.length < 10 ? (
            <Button onClick={() => handleAppointment()} variant="contained">
              Book your appointment
            </Button>
          ) : (
            <Button
              onClick={() =>
                toast(
                  "This date has no more appointments. Please book another date!",
                  {
                    toastId: "book-appointment",
                  }
                )
              }
              variant="contained"
            >
              Book your appointment
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Appointment;
