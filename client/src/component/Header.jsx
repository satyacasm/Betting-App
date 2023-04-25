import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {MdDarkMode} from 'react-icons/md';
import './Header.css';
const linksArr = ["home", "blogs", "login"];
const loggedInLinks = ["home", "blogs","yours-blogs", "add", "profile"];

const Header = (props) => {
  const {toggleMode,mode}=props;
  let isLoggedIn = useSelector((state) => state.isLoggedIn);
  // let isLoggedIn=localStorage.getItem("userId") !=null
  const [value, setValue] = useState();
  return (
    <AppBar sx={{ bgcolor: "transparent", position: "sticky" }}>
      <Toolbar>
        <ModeOfTravelIcon sx={{ color: "black" }} />

        <Tabs 
          value={value}
          onChange={(e, val) => setValue(val)}
          sx={{ ml: "auto", textDecoration: "none" }}
        >
          {isLoggedIn
            ? loggedInLinks.map((link) => (
                <Tab style={mode==='dark'?{color:'white'}:{color:'black'}}
                  LinkComponent={Link}
                  to={`/${link === "home" ? "" :  link}`}
                  sx={{
                    textDecoration: "none",
                   
                    ":hover": {
                      textDecoration: "underline",
                      textUnderlineOffset: "18px",
                    },
                  }}
                  key={link}
                  label={link}
                />
              ))
            : linksArr.map((link) => (
                <Tab style={mode==='dark'?{color:'white'}:{color:'black'}}
                  LinkComponent={Link}
                  to={`/${link === "home" ? "" : link}`}
                  sx={{
                    textDecoration: "none", 
                    ":hover": {
                      textDecoration: "underline",
                      textUnderlineOffset: "18px",
                    },
                  }}
                  key={link}
                  label={link}
                />
              ))}
             <button className="darkmode" onClick={toggleMode}><MdDarkMode style={mode==='dark'?{color:'white'}:{color:'black'}}/></button>
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;