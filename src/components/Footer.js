import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "skyblue",
        paddingY: "20px",
        marginBottom: 0,
      }}
    >
      <Typography textAlign="center">
        ©2023 Dental Care - Do not copy. All rights reserved. | Powered by: Arko
        Roy Badhon
      </Typography>
    </Box>
  );
};

export default Footer;
