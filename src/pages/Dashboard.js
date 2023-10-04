import { Box, ButtonBase, Typography } from "@mui/material";
import { Inbox } from "@mui/icons-material";
import { dashboardItem } from "../components/Dashboard/DashboardItem";
import { useState } from "react";

const style = {
  transition: "background-color 0.3s ease",
  display: "flex",
  gap: "14px",
  justifyContent: "flex-start",
  paddingX: "20px",
  paddingY: "12px",
  borderRadius: "5px",
};

const Dashboard = () => {
  const [val, setVal] = useState(1);
  const filtered = dashboardItem.filter(
    (item) => item.id === val
  );

  return (
    <Box
      sx={{
        paddingX: {
          xs: "10px",
          md: "60px"
        },
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
          },
          gap: "10px",
          paddingTop: "14px",
          height: "100%",
        }}
      >
        <Box
          flex={1}
          sx={{
            borderRight: {
              md: "4px solid gray",
            },
            borderBottom: {
              xs: "4px solid gray",
              md: "0px"
            },
            paddingRight: "10px",
            paddingBottom: {
              xs: "10px",
              md: "0px"
            }
          }}
        >
          {/* <CustomBox>Hello</CustomBox> */}
          <ButtonBase
            sx={{
              ...style,
              color: val === 1 ? "white" : "#666666",
              backgroundColor: val === 1 ? "#0A208B" : "",
              "&:hover": { backgroundColor: val !== 1 ? "#F2F4F9" : "" },
            }}
            onClick={() => setVal(1)}
            component="div"
          >
            <Inbox sx={{ fontSize: "28px" }} />
            <Typography
              sx={{
                fontWeight: "600",
              }}
              fontSize="1.2rem"
            >
              Service
            </Typography>
          </ButtonBase>
          {/* <ButtonBase
            sx={{
              ...style,
              color: val === 2 ? "white" : "#666666",
              backgroundColor: val === 2 ? "#0A208B" : "",
              "&:hover": { backgroundColor: val !== 2 ? "#F2F4F9" : "" },
            }}
            onClick={() => setVal(2)}
            component="div"
          >
            <Inbox sx={{ fontSize: "28px" }} />
            <Typography
              sx={{
                fontWeight: "600",
              }}
              fontSize="1.2rem"
            >
              Blog
            </Typography>
          </ButtonBase> */}
          <ButtonBase
            sx={{
              ...style,
              color: val === 3 ? "white" : "#666666",
              backgroundColor: val === 3 ? "#0A208B" : "",
              "&:hover": { backgroundColor: val !== 3 ? "#F2F4F9" : "" },
            }}
            onClick={() => setVal(3)}
            component="div"
          >
            <Inbox sx={{ fontSize: "28px" }} />
            <Typography
              sx={{
                fontWeight: "600",
              }}
              fontSize="1.2rem"
            >
              Phone/Time
            </Typography>
          </ButtonBase>
          <ButtonBase
            sx={{
              ...style,
              color: val === 4 ? "white" : "#666666",
              backgroundColor: val === 4 ? "#0A208B" : "",
              "&:hover": { backgroundColor: val !== 4 ? "#F2F4F9" : "" },
            }}
            onClick={() => setVal(4)}
            component="div"
          >
            <Inbox sx={{ fontSize: "28px" }} />
            <Typography
              sx={{
                fontWeight: "600",
              }}
              fontSize="1.2rem"
            >
              Office Tour
            </Typography>
          </ButtonBase>
          {/* <ButtonBase
            sx={{
              ...style,
              color: val === 5 ? "white" : "#666666",
              backgroundColor: val === 5 ? "#0A208B" : "",
              "&:hover": { backgroundColor: val !== 5 ? "#F2F4F9" : "" },
            }}
            onClick={() => setVal(5)}
            component="div"
          >
            <Inbox sx={{ fontSize: "28px" }} />
            <Typography
              sx={{
                fontWeight: "600",
              }}
              fontSize="1.2rem"
            >
              About Page
            </Typography>
          </ButtonBase> */}
        </Box>
        <Box
          flex={4}
          sx={{
            // borderLeft: "4px solid #808080",
            height: "100%",
            backgroundColor: "",
            marginBottom: "20px",
          }}
        >
          {filtered.map((item) => {
            return <div key={item.id}>{item.item}</div>;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
