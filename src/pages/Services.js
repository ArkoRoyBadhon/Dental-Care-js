import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useGetServicesQuery } from "../app/features/service/serviceApi";

const CardStyle = {
  height: "300px",
  transition: "box-shadow 300ms ease-in",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  "&:hover": { boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)" },
  padding: "20px",
  borderRadius: "5px",
};
const Services = () => {
  const { data: serviceData, isLoading } = useGetServicesQuery();


  if(isLoading) {
    return <Box height="80vh" width="100vw" sx={{
      display: 'flex',
      justifyContent: "center",
      alignItems: "center"
    }}>
      <CircularProgress />
    </Box>
  }
  

  return (
    <Box
      sx={{
        paddingX: "60px",
        paddingY: "20px",
        minHeight: "100vh",
        marginY: "10px"
      }}
    >
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "24px",
          borderBottom: "4px solid gray",
        }}
      >
        Our Services
      </Typography>
      <Grid my={1} container spacing={5}>
        {serviceData?.data.map((item) => {
          return (
            <Grid key={item?._id} item xs={12} lg={4} md={6}>
              <Box
                sx={{
                  position: "relative",
                  "&:hover": {
                    backgroundColor: "blue",
                  },
                  transition: "background-color 300ms ease-in",
                  width: "100%",
                  height: "300px",
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    ...CardStyle,
                    position: "absolute",
                    top: "-5px",
                    left: "0px",
                    background: "white",
                    width: "100%",
                  }}
                >
                  <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column"
                  }}>
                    <img
                      style={{ height: "200px" }}
                      src={item?.image}
                      alt={item?.title}
                    />
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "600",
                        fontSize: "20px",
                        marginTop: "10px",
                      }}
                    >
                      {item?.title}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Services;
