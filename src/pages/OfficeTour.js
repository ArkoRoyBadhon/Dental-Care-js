import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useGetImagesQuery } from "../app/features/office/officeApi";
import { PhotoView } from "react-photo-view";

const OfficeTour = () => {
  const { data: itemData, isLoading } = useGetImagesQuery();
  // console.log(itemData?.data);

  if (isLoading) {
    return (
      <Box
        height="80vh"
        width="100vw"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

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
        <Typography
          textAlign="center"
          fontWeight="600"
          fontSize="24px"
          color=""
          sx={{
            fontWeight: "600",
            fontSize: "24px",
            borderBottom: "4px solid gray",
          }}
        >
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
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            my={1}
            container
            spacing={5}
            gap="20px"
          >
            {itemData?.data.map((item) => {
              return (
                <Box sx={{ marginY: "10px" }} key={item?._id}>
                  <Grid key={item?._id} item xs={12} lg={4} md={6}>
                    <PhotoView src={item?.url}>
                      <img
                        style={{
                          width: "400px",
                          height: "300px",
                          borderRadius: "10px",
                        }}
                        src={item?.url}
                        alt="img"
                      />
                    </PhotoView>
                  </Grid>
                </Box>
              );
            })}
          </Grid>
        </Box>
    </Box>
  );
};

export default OfficeTour;
