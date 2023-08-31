/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, TextField, Typography, Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useCreateUserMutation } from "../app/features/users/userApi";


const CustomLink = styled(NavLink)({
  textDecoration: "none",
  color: "blue",
});

const Register = () => {
  const [createUser, { isLoading, isSuccess }] = useCreateUserMutation();
  const navigate = useNavigate();

  if (isSuccess) {
    toast("User created succesfully!", {
      toastId: "user created",
    });
  }
  if (isLoading) {
    toast("Please wait a moment while creating user!", {
      toastId: "pending",
    });
  }

  const { register, handleSubmit } = useForm();
  const onSubmitRegister = async (data) => {
    const jsonData = {
      name: data?.name,
      email: data?.email,
      password: data?.password,
      role: "user",
    };

    const registerInfo = {
      data: jsonData,
    };

    const result = await createUser(registerInfo);
    if (result?.data) {
      // document.cookie = `accessToken=${result?.data?.data?.accessToken}; HttpOnly; SameSite=Strict; Path=/`;
      navigate("/login");
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
        <form onSubmit={handleSubmit(onSubmitRegister)}>
          <Typography fontWeight="600" fontSize="32px">
            Register
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: "12px",
            }}
          >
            <TextField
              label="Name"
              variant="outlined"
              {...register("name")}
              type="text"
            />
            <TextField
              label="Email"
              variant="outlined"
              {...register("email")}
              type="email"
            />
            <TextField
              label="Password"
              variant="outlined"
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

export default Register;
