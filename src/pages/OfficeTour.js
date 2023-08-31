import { Box, Typography } from "@mui/material";
import { useGetImagesQuery } from "../app/features/office/officeApi";


const OfficeTour = () => {
  const { data: itemData } = useGetImagesQuery();
  // console.log(itemData?.data);

  return (
    <Box
      sx={{
        minWidth: "800px",
        maxWidth: "1340px",
        marginX: "auto",
        minHeight: "100vh",
        paddingY: "20px",
        paddingX: {
          xs: "10px",
          sm: "10px",
          md: "10px",
          lg: "0px",
        },
      }}
    >
      <Typography textAlign="center" fontWeight="600" fontSize="24px" color="">
        Welcome to Dental Care
      </Typography>
      <Box
        sx={{
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {itemData?.data.map((item) => {
          return (
            <Box sx={{ marginY: "10px" }} key={item?._id}>
              <img
                style={{
                  maxWidth: "800px",
                  borderRadius: "10px",
                }}
                src={item?.url}
                alt="photo"
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default OfficeTour;
