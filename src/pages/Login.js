import { Box, TextField, Typography, Button } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";

import React from "react";
import { useLoginMutation } from "../app/features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../app/features/auth/authSlice";

const CustomLink = styled(NavLink)({
  textDecoration: "none",
  color: "blue",
});

const Login = () => {
  const [loginUser, { isLoading, isSuccess, isError }] = useLoginMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch()

  if (isSuccess) {
    toast("User logged in succesfully!", {
      toastId: "user log in",
    });
  }
  if (isLoading) {
    toast("Please wait a moment while logging in user!", {
      toastId: "login pending",
    });
  }
  if (isError) {
    toast("Email or passwaord not matching", {
      toastId: "login error",
    });
  }

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const jsonData = {
      password: data?.password,
      email: data?.email,
    };

    // const loginInfo = {
    //   data: jsonData,
    // };

    const result = await loginUser(jsonData);
    const { accessToken } = result?.data;
    
    const from = location.state?.from?.pathname || "/";
    if (result?.data) {
      // document.cookie = `accessToken=${result?.data?.data?.accessToken}; HttpOnly; SameSite=Strict; Path=/`;
      dispatch(setCredentials({accessToken}))
      navigate(from, { replace: true });
    }
  };
  return (
    <Box
      sx={{
        paddingX: {
          xs: "10px",
          md: "60px",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <Box
        sx={{
          paddingY: "20px",
          paddingX: "20px",
          borderRadius: "10px",
          width: "400px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography fontWeight="600" fontSize="32px">
            Login
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <TextField
              label="Email"
              variant="standard"
              {...register("email")}
              type="text"
            />
            <TextField
              label="Password"
              variant="standard"
              {...register("password")}
              type="password"
            />
            <Button
              type="submit"
              sx={{ marginTop: "20px" }}
              variant="contained"
            >
              Login
            </Button>
            <Typography>
              New to Dental Care?{" "}
              <CustomLink to="/register">Register</CustomLink>{" "}
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
