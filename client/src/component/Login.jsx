import React, { useState } from "react";
import { Box, Typography, FormLabel, TextField, Button } from "@mui/material";
import { sendLoginRequest } from "../services/helper";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate, useNavigation } from "react-router-dom";

const Login = () => {
  const dispatch =useDispatch();
  const navigate=  useNavigate();
  const [isSignUp, setisSignup] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("click");

    if (isSignUp) {
      sendLoginRequest(true, inputs)
        .then((data) =>localStorage.setItem("userId",data.user._id))
        .then(()=>{dispatch(authActions.login()) })
        .catch((err) => console.log(err));
    } else {
      sendLoginRequest(false, inputs)
        .then((data) => localStorage.setItem("userId",data.id))
        .then(()=>{dispatch(authActions.login()) })
        .catch((err) => console.log(err));
    }
    navigate("/");

  };
  const hangleChange = (e) => {
    setInputd((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const [inputs, setInputd] = useState({ name: "", email: "", password: "" });
  return (
    <div>
      <Box
        width="30%"
        height="70%"
        borderRadius={10}
        boxShadow={"5px 5px 10px #ccc"}
        margin="auto"
        marginTop={10}
      >
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection={"column"}
            width="70%"
            padding={5}
            margin="auto"
          >
            <Typography variant="h4" textAlign="center">
              {isSignUp ? "SignUp" : "Login"}
            </Typography>
            {isSignUp && (
              <>
                {" "}
                <FormLabel>Name</FormLabel>
                <TextField
                  margin="normal"
                  placeholder="Enter your name"
                  value={inputs.name}
                  name="name"
                  onChange={hangleChange}
                />
              </>
            )}
            <FormLabel>Email</FormLabel>
            <TextField
              margin="normal"
              placeholder="Enter your Email"
              value={inputs.email}
              name="email"
              onChange={hangleChange}
            />
            <FormLabel>Password</FormLabel>
            <TextField
              placeholder="Enter your Password"
              margin="normal"
              value={inputs.password}
              name="password"
              onChange={hangleChange}
            />
            <Button
              sx={{ mt: 2, borderRadius: 10 }}
              type="submit"
              variant="contained"
            >
              {isSignUp ? "Signup" : "Login"}
            </Button>
            <Button
              sx={{ mt: 2, borderRadius: 10 }}
             
              variant="outlined"
              onClick={() => setisSignup(!isSignUp)}
            >
              Change to{isSignUp ? " Login" : " Signup"}
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default Login;
