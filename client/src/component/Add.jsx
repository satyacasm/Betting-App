import { Box, Button, FormLabel, TextField, Typography ,MenuItem,Select,InputLabel} from "@mui/material";
import React, { useState } from "react";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { addPost } from "../services/helper";
import { useNavigate } from "react-router-dom";

const Add = (props) => {
  const {toggleMode,mode}=props;
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    location: "",
    image: "",
    date: "",
    tag:"",
    profile:""
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onResReceived = (data) => {
    // console.log(data);
    navigate("/blogs");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs);
    addPost(inputs)
      .then(onResReceived)
      .catch((err) => console.log(err));
  };
  return (

    
    <Box  display="flex" flexDirection={"column"} width="100%" height="100%" >
      <Box display="flex" margin="auto" padding={2}>
        <Typography
          fontWeight={"bold"}
          variant="h4"
          fontFamily={"dancing script"}
        >
          Add Your Blog Diary
        </Typography>
        <TravelExploreIcon
          sx={{ fontSize: "40px", paddingLeft: 1, color: "lightcoral  " }}
        />
      </Box>
      <form onSubmit={handleSubmit}  >
        <Box
          padding={3}
          display="flex"
          width="80%"
          margin="auto"
          flexDirection={"column"}
        >
          <FormLabel sx={{ fontFamily: "quicksand" }} style={mode==='dark'?{color:'white'}:{color:'black'}}>Title</FormLabel>
          <TextField 
          
            onChange={handleChange}
            name="title"
            value={inputs.title}
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand" }} style={mode==='dark'?{color:'white'}:{color:'black'}}>Description</FormLabel>
          <TextField
            onChange={handleChange}
            name="description"
            value={inputs.description}
            variant="standard"
            margin="normal"
          />
      
          <InputLabel sx={{ fontFamily: "quicksand" }} style={mode==='dark'?{color:'white'}:{color:'black'}}>Category</InputLabel>
            <Select
            name="tag"
              value={inputs.tag}
              label="tag"
              onChange={handleChange}
              variant="standard"
            margin="normal"
            >
              <MenuItem value="Entertainment">Entertainment</MenuItem>
              <MenuItem value="Education">Education</MenuItem>
              <MenuItem value="Industry">Industry</MenuItem>
            </Select>
          <FormLabel sx={{ fontFamily: "quicksand" }} style={mode==='dark'?{color:'white'}:{color:'black'}}>Image URL</FormLabel>
          <TextField
          style={mode==='dark'?{color:'white'}:{color:'black'}}
            onChange={handleChange}
            name="image"
            value={inputs.image}
            variant="standard"
            margin="normal"
          />
          

          <FormLabel sx={{ fontFamily: "quicksand" }} style={mode==='dark'?{color:'white'}:{color:'black'}}>Location</FormLabel>
          <TextField style={mode==='dark'?{color:'white'}:{color:'black'}}
            onChange={handleChange}
            name="location"
            value={inputs.location}
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand" }} style={mode==='dark'?{color:'white'}:{color:'black'}}>Date</FormLabel>
          <TextField style={mode==='dark'?{color:'white'}:{color:'black'}}
            type="date"
            onChange={handleChange}
            name="date"
            value={inputs.date}
            variant="standard"
            margin="normal"
          />
          <Button
            type="submit"
            color="warning"
            sx={{ width: "50%", margin: "auto", mt: 2, borderRadius: 7 }}
            variant="contained"
          >
           Add Blog
          </Button>
        </Box>
      </form>
    </Box>
  
  );
};

export default Add;