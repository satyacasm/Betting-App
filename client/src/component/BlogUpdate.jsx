import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bolgUpdate, gatAllblogsById } from "../services/helper";
import { useNavigate } from "react-router-dom";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import {
  Box,
  Button,
  FormLabel,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";

const BlogUpdate = () => {
  const [, setBlog] = useState();
  const navigate = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    gatAllblogsById(id)
      .then((data) =>{ setBlog(data.blog);
      setInputs({title:data.blog.title,
      description:data.blog.description,
      location:data.blog.location,
      image:data.blog.image,
      tag:data.blog.tag})
      })
      .catch((err) => console.log(err));
  }, []);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    location: "",
    image: "",
    date: "",
    tag: "",
    profile: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onResReceived = (data) => {
    navigate("/yours-blogs");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs);
    bolgUpdate(inputs,id).then((data)=>console.log(data)
    
  ).then(onResReceived).catch(err=>console.log(err))};
  // console.log(id);
  // navigate("/blogs");
  return (
    <Box display="flex" flexDirection={"column"} width="100%" height="100%">
      <Box display="flex" margin="auto" padding={2}>
        <Typography
          fontWeight={"bold"}
          variant="h4"
          fontFamily={"dancing script"}
        >
          Add Your Travel Diary
        </Typography>
        <TravelExploreIcon
          sx={{ fontSize: "40px", paddingLeft: 1, color: "lightcoral  " }}
        />
      </Box>
      <form onSubmit={handleSubmit}>
        <Box
          padding={3}
          display="flex"
          width="80%"
          margin="auto"
          flexDirection={"column"}
        >
          <FormLabel sx={{ fontFamily: "quicksand" }}>Title</FormLabel>
          <TextField
            onChange={handleChange}
            name="title"
            value={inputs.title}
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Description</FormLabel>
          <TextField
            onChange={handleChange}
            name="description"
            value={inputs.description}
            variant="standard"
            margin="normal"
          />

          <InputLabel sx={{ fontFamily: "quicksand" }}>Category</InputLabel>
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
          <FormLabel sx={{ fontFamily: "quicksand" }}>Image URL</FormLabel>
          <TextField
            onChange={handleChange}
            name="image"
            value={inputs.image}
            variant="standard"
            margin="normal"
          />
        
          <FormLabel sx={{ fontFamily: "quicksand" }}>Location</FormLabel>
          <TextField
            onChange={handleChange}
            name="location"
            value={inputs.location}
            variant="standard"
            margin="normal"
          />

          <Button
            type="submit"
            color="warning"
            sx={{ width: "50%", margin: "auto", mt: 2, borderRadius: 7 }}
            variant="contained"
          >
            Update Blog
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default BlogUpdate;
