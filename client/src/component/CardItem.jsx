import React ,{useState}from 'react'
import {
  Alert,
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteBlog } from '../services/helper';
import { grey } from '@mui/material/colors';
import './CardItem.css';


const CardItem = (props) => {
  const [open,setOpen]= useState(false);

  const handleDelete = () => {
    console.log(id);
    deleteBlog(id)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    setOpen(true);
  };

  const isLoogedInUser = () => {
    if (localStorage.getItem("userId") === user) {
      return true;
    }
    return false;
  };
  const [expand,setExpand]=useState(true);
 
    const { title,
  description,
  image,
  location,
  date,
  tag,
  id,
  user,
  name,
}=props;
  return (
    <Card
    sx={{
      width: "50%",
      height: "auto",
      margin: 1,
      padding: 1,
      display: "flex",
      flexDirection: "column",
      boxShadow: "5px 5px 10px #ccc",
      // backgroundColor : "grey" ,
       borderRadius : "25px"
    }}
  >
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          {/* {name.charAt(0)} */}
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          {<EditLocationAltIcon />}
        </IconButton>
      }
      title={location}
      header={location}
      subheader={date}
    />

    <img height="280" src={image} alt={title} style={{'borderRadius' : '25px'}}/>
    <CardContent>
      <Typography paddingBottom={1} variant="h6" color="text.secondary">
       {title}
      </Typography>
       <p>category:  {tag}</p>
      <hr />
      <Box paddingTop={1} display="flex">
        <Typography
          width="auto"
          sx={{ mr: 1 }}
          fontWeight={"bold"}
          variant="caption"
        >
          {/* {name}: */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {expand ?<p>{description.slice(0,300)} <button onClick={()=>{setExpand(false);console.log("click");}}><b className='bold'>...read more</b></button></p>
          :<p>{description} <button onClick={()=>setExpand(true)}><b className='bold'>read less</b></button></p>}
        </Typography>
      </Box>
      
    </CardContent>
      {/* <p>User {name}</p> */}               
                                                                           {/* add user here */}
    {isLoogedInUser() && (
      <CardActions sx={{ marginLeft: "auto" }}>
        <IconButton LinkComponent={Link} to={`/blog/${id}`} color="warning">
          <ModeEditOutlineIcon />
        </IconButton>
        <IconButton onClick={handleDelete} color="error">
          <DeleteForeverIcon />
        </IconButton>
      </CardActions>
    )}

    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => setOpen(false)}
    >
      <Alert
        onClose={() => setOpen(false)}
        severity="success"
        sx={{ width: "100%" }}
      >
        This is a success message!
      </Alert>
    </Snackbar>
  </Card>
  )
}

export default CardItem
