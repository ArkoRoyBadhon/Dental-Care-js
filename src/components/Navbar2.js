/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Divider,
  Drawer,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Stack,
  colors,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useSendLogoutMutation } from "../app/features/auth/authApiSlice";
import { clearUser, setUser } from "../app/features/users/userSlice";
import { logOut, setCredentials } from "../app/features/auth/authSlice";
import { useGetUserQuery } from "../app/features/users/userApi";
import jwtDecode from "jwt-decode";

const MyDrawer = styled("div")({
  width: 300,
});

const Navbar2 = () => {
  const currentPath = window.location.pathname;
  const [drawerOpen, setDrawerOpen] = useState(false);
  // const { user } = useSelector((state) => state.persisted.user);
  const { user } = useSelector((state) => state.persisted.user);
  const token = useSelector((state) => state.persisted.auth);
  const dispatch = useDispatch();
  const [sendLogout] = useSendLogoutMutation();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const handleLogout = async () => {
    dispatch(clearUser());
    dispatch(logOut());
    await sendLogout();
    // dispatch(setCredentials(""))
    toast("User logged out succesfully!", {
      toastId: "user log out",
    });
  };

  useEffect(() => {
    if (token.token) {
      const decoded = jwtDecode(token.token);
      const { email, role } = decoded.UserInfo;
      const userDetail = {
        email,
        role,
      };
      dispatch(setUser({ ...userDetail }));
    }
  }, [dispatch, token]);

  const drawerContent = (
    <MyDrawer sx={{ paddingTop: "20px" }}>
      <Stack paddingLeft="40px">
        <Box display="flex" alignItems="center" gap="10px" paddingBottom="20px">
          <AddIcCallIcon />
          <Box>
            <Typography sx={{ fontSize: "12px" }}>01755434678</Typography>
            <Typography sx={{ fontSize: "10px" }}>
              24/7 Emergency Phone
            </Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap="10px">
          <ManageHistoryIcon />
          <Box>
            <Typography sx={{ fontSize: "12px" }}>Monday-Friday</Typography>
            <Typography sx={{ fontSize: "10px" }}>9AM-9PM</Typography>
          </Box>
        </Box>
      </Stack>
      <Divider sx={{ marginX: "10px", marginTop: "14px" }} />
      <List>
        <ListItemButton component="a" href="/">
          <ListItemText
            sx={{
              fontWeight: "600",
              ...(currentPath === "/"
                ? {
                    borderBottom: "2px solid gray",
                    color: colors.red[500],
                  }
                : {
                    color: "#666666",
                  }),
              "&:hover": {
                borderBottom: "2px solid gray",
              },
            }}
            primary="Home"
          />
        </ListItemButton>
        <ListItemButton component="a" href="about">
          <ListItemText
            sx={{
              fontWeight: "600",
              ...(currentPath === "/about"
                ? {
                    borderBottom: "2px solid gray",
                    color: colors.red[500],
                  }
                : {
                    color: "#666666",
                  }),
              "&:hover": {
                borderBottom: "2px solid gray",
              },
            }}
            primary="About"
          />
        </ListItemButton>
        <ListItemButton component="a" href="/services">
          <ListItemText
            sx={{
              fontWeight: "600",
              ...(currentPath === "/services"
                ? {
                    borderBottom: "2px solid gray",
                    color: colors.red[500],
                  }
                : {
                    color: "#666666",
                  }),
              "&:hover": {
                borderBottom: "2px solid gray",
              },
            }}
            primary="Services"
          />
        </ListItemButton>
        <ListItemButton component="a" href="/office">
          <ListItemText
            sx={{
              fontWeight: "600",
              ...(currentPath === "/office"
                ? {
                    borderBottom: "2px solid gray",
                    color: colors.red[500],
                  }
                : {
                    color: "#666666",
                  }),
              "&:hover": {
                borderBottom: "2px solid gray",
              },
            }}
            primary="Office Tour"
          />
        </ListItemButton>
        <ListItemButton component="a" href="/blog">
          <ListItemText
            sx={{
              fontWeight: "600",
              ...(currentPath === "/blog"
                ? {
                    borderBottom: "2px solid gray",
                    color: colors.red[500],
                  }
                : {
                    color: "#666666",
                  }),
              "&:hover": {
                borderBottom: "2px solid gray",
              },
            }}
            primary="Blog"
          />
        </ListItemButton>
      </List>
      <Divider sx={{ marginX: "10px", marginTop: "14px" }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          gap: "10px",
          paddingX: "10px",
          marginTop: "10px",
        }}
      >
        <Box>
          <FacebookIcon />
          <MailIcon />
        </Box>
        {user ? (
          <Box
            sx={{ cursor: "pointer", color: "#666666", fontWeight: "600" }}
            onClick={() => handleLogout()}
          >
            Logout
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Link
              sx={{
                fontWeight: "600",
                ...(currentPath === "/blog"
                  ? {
                      borderBottom: "2px solid gray",
                      color: colors.red[500],
                    }
                  : {
                      color: "#666666",
                    }),
                "&:hover": {
                  borderBottom: "2px solid gray",
                },
              }}
              underline="none"
              href="/register"
            >
              Register
            </Link>
            <Link
              sx={{
                fontWeight: "600",
                ...(currentPath === "/blog"
                  ? {
                      borderBottom: "2px solid gray",
                      color: colors.red[500],
                    }
                  : {
                      color: "#666666",
                    }),
                "&:hover": {
                  borderBottom: "2px solid gray",
                },
              }}
              underline="none"
              href="/login"
            >
              Login
            </Link>
          </Box>
        )}
      </Box>
    </MyDrawer>
  );

  // console.log("SS", user);

  return (
    <Box>
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          paddingX: "60px",
          paddingTop: "14px",
          paddingBottom: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ paddingY: "5px" }}
        >
          <Box>Doctor Care</Box>
          <Box display="flex" gap="15px">
            <Box display="flex" alignItems="center" gap="10px">
              <AddIcCallIcon />
              <Box>
                <Typography sx={{ fontSize: "12px" }}>01755434678</Typography>
                <Typography sx={{ fontSize: "10px" }}>
                  24/7 Emergency Phone
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" gap="10px">
              <ManageHistoryIcon />
              <Box>
                <Typography sx={{ fontSize: "12px" }}>Monday-Friday</Typography>
                <Typography sx={{ fontSize: "10px" }}>9AM-9PM</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ paddingX: "10px", paddingY: "5px" }}
        >
          <Box display="flex" gap="20px">
            <Link
              sx={{
                fontWeight: "600",

                ...(currentPath === "/"
                  ? {
                      borderBottom: "2px solid gray",
                      color: colors.red[500],
                    }
                  : {
                      color: "#666666",
                    }),
                "&:hover": {
                  borderBottom: "2px solid gray",
                },
              }}
              underline="none"
              href="/"
            >
              Home
            </Link>
            <Link
              sx={{
                fontWeight: "600",
                ...(currentPath === "/about"
                  ? {
                      borderBottom: "2px solid gray",
                      color: colors.red[500],
                    }
                  : {
                      color: "#666666",
                    }),
                "&:hover": {
                  borderBottom: "2px solid gray",
                },
              }}
              underline="none"
              href="/about"
            >
              About
            </Link>
            <Link
              sx={{
                fontWeight: "600",
                ...(currentPath === "/services"
                  ? {
                      borderBottom: "2px solid gray",
                      color: colors.red[500],
                    }
                  : {
                      color: "#666666",
                    }),
                "&:hover": {
                  borderBottom: "2px solid gray",
                },
              }}
              underline="none"
              href="/services"
            >
              Services
            </Link>
            <Link
              sx={{
                fontWeight: "600",
                ...(currentPath === "/office"
                  ? {
                      borderBottom: "2px solid gray",
                      color: colors.red[500],
                    }
                  : {
                      color: "#666666",
                    }),
                "&:hover": {
                  borderBottom: "2px solid gray",
                },
              }}
              underline="none"
              href="/office"
            >
              Office Tour
            </Link>
            <Link
              sx={{
                fontWeight: "600",
                ...(currentPath === "/my-appointment"
                  ? {
                      borderBottom: "2px solid gray",
                      color: colors.red[500],
                    }
                  : {
                      color: "#666666",
                    }),
                "&:hover": {
                  borderBottom: "2px solid gray",
                },
              }}
              underline="none"
              href="/my-appointment"
            >
              My Appointment
            </Link>
            {user && user?.role === "admin" && (
              <Link
                sx={{
                  fontWeight: "600",
                  ...(currentPath === "/dashboard"
                    ? {
                        borderBottom: "2px solid gray",
                        color: colors.red[500],
                      }
                    : {
                        color: "#666666",
                      }),
                  "&:hover": {
                    borderBottom: "2px solid gray",
                  },
                }}
                underline="none"
                href="/dashboard"
              >
                Dashboard
              </Link>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Box>
              <FacebookIcon />
              <MailIcon />
            </Box>
            {token.token ? (
              <Box
                sx={{ cursor: "pointer", color: "#666666", fontWeight: "600" }}
                onClick={() => handleLogout()}
              >
                Logout
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Link
                  sx={{
                    fontWeight: "600",
                    ...(currentPath === "/blog"
                      ? {
                          borderBottom: "2px solid gray",
                          color: colors.red[500],
                        }
                      : {
                          color: "#666666",
                        }),
                    "&:hover": {
                      borderBottom: "2px solid gray",
                    },
                  }}
                  underline="none"
                  href="/register"
                >
                  Register
                </Link>
                <Link
                  sx={{
                    fontWeight: "600",
                    ...(currentPath === "/blog"
                      ? {
                          borderBottom: "2px solid gray",
                          color: colors.red[500],
                        }
                      : {
                          color: "#666666",
                        }),
                    "&:hover": {
                      borderBottom: "2px solid gray",
                    },
                  }}
                  underline="none"
                  href="/login"
                >
                  Login
                </Link>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          paddingY: "20px",
          paddingX: "20px",
          display: {
            xs: "flex",
            sm: "flex",
            md: "none",
          },
          alignItems: {
            xs: "center",
            sm: "center",
          },
          gap: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <MenuIcon
          color="inherit"
          onClick={toggleDrawer(true)}
          aria-label="menu"
        />
        <Box>Doctor Care</Box>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerContent}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar2;
