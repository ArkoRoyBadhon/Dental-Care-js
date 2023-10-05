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
import {
  useDeleteAppointmentMutation,
  useGetAppointmentWithEmailQuery,
} from "../app/features/appointment/appointmentApi";
import { blue, red } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const MyAppointment = () => {
  const { user } = useSelector((state) => state.persisted.user);
  const { data: myAppointData } = useGetAppointmentWithEmailQuery({
    email: user?.email,
  });
  const [deleteAppointment] = useDeleteAppointmentMutation();
  // console.log(user);
  //   console.log(myAppointData && myAppointData.data);

  const handleImageDelete = async (id) => {
    const sentData = {
      email: user && user?.email,
      id,
    };

    const result = await deleteAppointment(sentData);
    if(result) {
      toast("Your appointment deleted successfully!", {
        toastId: "delete-alert",
      });
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
        My Appointment List
      </Typography>

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
              {myAppointData &&
                myAppointData?.data.map((row) => (
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
                        onClick={() => handleImageDelete(row?._id)}
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

export default MyAppointment;
