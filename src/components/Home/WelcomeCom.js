import { Box, Typography, Button } from "@mui/material";

const WelcomeCom = () => {
  return (
    <Box
      sx={{
        display: "flex",
        paddingY: "40px",
        paddingX: {
          xs: "20px",
          md: "400px",
        },
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
        },
        gap: {
            xs: "20px",
            md: "0px"
        }
      }}
    >
      <Box flex={1} sx={{display: {xs: "none"}}} data-aos="fade-right">
        <img
          style={{ width: "400px" }}
          src="https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg"
          alt="photo"
        />
      </Box>
      <Box flex={1} data-aos="fade-right">
        <img
          style={{ width: "300px" }}
          src="https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg"
          alt="photo"
        />
      </Box>
      <Box flex={1} sx={{ paddingRight: { md: "20px" } }} data-aos="fade-left">
        <Typography
          component="h4"
          fontWeight={500}
          fontSize="22px"
          sx={{ marginBottom: "8px" }}
        >
          Welcome to Our Practice
        </Typography>
        <Typography fontSize="12px" component="p">
          Welcome to Performance Dental Center!
        </Typography>
        <Typography fontSize="12px" component="p">
          We’re proud to offer the city of Boulder and its surrounding
          communities high-quality dental care in a relaxed and comfortable
          environment. You’ll find a full range of services for adults and
          teens, designed to meet all your needs.
        </Typography>
        <Button
          variant="contained"
          sx={{ borderRadius: "5px", marginTop: "10px" }}
        >
          Request an appointment
        </Button>
      </Box>
    </Box>
  );
};

export default WelcomeCom;
