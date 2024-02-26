import { Box, ButtonBase, Typography } from "@mui/material";

const About = () => {
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
        Our Expert Doctors
      </Typography>
      <Box
        sx={{
          display: "flex",
          paddingY: "40px",
          marginX: "120px",
          alignItems: {
            xs: "center",
          },
          justifyContent: {
            xs: "center",
          },
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
          },
          gap: {
            xs: "20px",
            md: "0px",
          },
          borderBottom: "3px solid gray",
        }}
      >
        <Box data-aos="fade-right" sx={{}}>
          <img
            style={{ width: "400px" }}
            src="https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg"
            alt="img"
          />
        </Box>
        <Box
          sx={{ paddingRight: { xs: "10px", md: "20px" }, width: {xs: "80vw"} }}
          data-aos="fade-left"
        >
          <Typography
            component="h4"
            fontWeight={500}
            fontSize="22px"
            sx={{ marginBottom: "8px" }}
          >
            Dr Xtreme Pandu
          </Typography>
          <ButtonBase
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Typography>B.D.S (Bachelor of Dental Surgery)</Typography>
            <Typography>B.D.S (Bachelor of Dental Surgery)</Typography>
            <Typography>B.D.S (Bachelor of Dental Surgery)</Typography>
            <Typography>
              3 years hands on experience on Dhaka Dental Care
            </Typography>
          </ButtonBase>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
