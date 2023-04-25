
import { getUserDetail } from "../services/helper";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CardItem from './CardItem';
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const handleClick = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("userId");
    navigate("/");
  };
  useEffect(() => {
    const id= localStorage.getItem('userId');
    console.log(id);
    getUserDetail()
      .then((data) => {setUser(data.user);console.log(data)})
      .catch((err) => console.log(err));
  }, []);
  return   <Box display="flex" flexDirection={"column"}>
  {user && (
    <>
      {" "}
      <Typography
        textAlign={"center"}
        variant="h3"
        fontFamily={"quicksand"}
        padding={2}
      >
        User Profile 
      
      </Typography>
      <div className="center">
      <Typography fontFamily={"quicksand"} padding={1} textAlign="left">
        Name: {user.name}
      </Typography>
      <Typography fontFamily={"quicksand"} padding={1} textAlign="left">
        Email: {user.email}
      </Typography>
      
      <Button
        onClick={handleClick}
        sx={{  width: "15%" }}
        color="warning"
        variant="contained"
      >
        Logout
      </Button>
      </div>
     
    </>
  )}
</Box>
};

export default Profile;
