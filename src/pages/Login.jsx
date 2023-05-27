import React from "react";
import LoginForm from "../components/forms/Form";
import { Box } from "@mui/material";

const Login = ({ isLogin }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
    >
      <LoginForm isLogin={isLogin} />
    </Box>
  );
};

export default Login;
