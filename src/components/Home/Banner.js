import { Box, Button, Typography } from "@mui/material";
import bannerImg from "../../assets/pexels-anna-shvets-3845625-min.jpg";
import { Link, useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          marginX: {
            md: "60px",
          },
          minHeight: "400px",
          display: "flex",
          gap: "20px",
          flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
          },
        }}
      >
        <Box
          flex={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "center",
            margin: {
              xs: "10px",
              sm: "10px",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "32px", sm: "32px", md: "44px", lg: "48px" },
            }}
            component="h1"
            fontWeight="600"
          >
            Dental Care You Can Count On!
          </Typography>
          <Typography
            marginTop="10px"
            variant="h5"
            component="h4"
            fontSize="16px"
          >
            Modern Dentistry from a Kind and Friendly Doctor
          </Typography>
          <Button
            sx={{ width: "300px", marginTop: "20px" }}
            variant="contained"
          >
            <Link style={{
              textDecoration: "none",
              color: "#fff"
            }} to="/appointment">
            Request an appointment
            </Link>
          </Button>
        </Box>
        <Box flex={1}>
          <img
            className=""
            style={{
              width: "100%",
            }}
            src={bannerImg}
            alt="Banner img"
            loading="lazy"
          />
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "skyblue",
          paddingY: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            flexDirection: {
              xs: "column",
            },
            margin: {
              xs: "5px",
            },
          }}
        >
          <Typography component="p">
            New Patients call for portal set up access{" "}
          </Typography>
          <Button variant="contained" sx={{ borderRadius: "30px" }}>
            01755434678
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            flexDirection: {
              xs: "column",
            },
            margin: {
              xs: "5px",
            },
          }}
        >
          <Typography component="p">Current Patients login here</Typography>
          <Button
            onClick={() => navigate("/login")}
            variant="contained"
            sx={{ borderRadius: "30px" }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
