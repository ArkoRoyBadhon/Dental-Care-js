/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Typography } from "@mui/material";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import bg from "../../assets/08_plaid.png";
import { Link } from "react-router-dom";

const ShowCase = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "repeat",
      }}
    >
      <Box
        sx={{
          minHeight: {
            xs: "100vh",
            md: "300px",
          },
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          paddingY: {
            xs: "20px",
          },
        }}
      >
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/services"
        >
          <Box
            sx={{
              height: "200px",
              bgcolor: "white",
              width: {
                xs: "85vw",
                md: "200px",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              cursor: "pointer",
              "&:hover": {
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)", // Corrected color value
              },
            }}
            data-aos="zoom-in"
          >
            <EmojiTransportationIcon
              sx={{
                fontSize: "60px",
              }}
            />
            <Typography>What We Do</Typography>
          </Box>
        </Link>

        <Link
          style={{
            textDecoration: "none",
          }}
          to="/office"
        >
          <Box
            sx={{
              height: "200px",
              bgcolor: "white",
              width: {
                xs: "85vw",
                md: "200px",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              cursor: "pointer",
              "&:hover": {
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)", // Corrected color value
              },
            }}
            data-aos="zoom-in"
          >
            <EmojiTransportationIcon
              sx={{
                fontSize: "60px",
              }}
            />
            <Typography>Office Tour</Typography>
          </Box>
        </Link>
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/about"
        >
          <Box
            sx={{
              height: "200px",
              bgcolor: "white",
              width: {
                xs: "85vw",
                md: "200px",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              cursor: "pointer",
              "&:hover": {
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)", // Corrected color value
              },
            }}
            data-aos="zoom-in"
          >
            <EmojiTransportationIcon
              sx={{
                fontSize: "60px",
              }}
            />
            <Typography>Who We Are</Typography>
          </Box>
        </Link>
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/"
        >
          <Box
            sx={{
              height: "200px",
              bgcolor: "white",
              width: {
                xs: "85vw",
                md: "200px",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              cursor: "pointer",
              "&:hover": {
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
              },
            }}
            data-aos="zoom-in"
          >
            <EmojiTransportationIcon
              sx={{
                fontSize: "60px",
              }}
            />
            <Typography>FAQ's</Typography>
          </Box>
        </Link>
      </Box>
    </div>
  );
};

export default ShowCase;
