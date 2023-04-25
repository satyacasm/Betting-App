
import React, { useEffect, useState } from 'react'
import { getAllblogs } from '../services/helper'
import CardItem from './CardItem';
import { Box } from "@mui/system";
import NoBlog from './NoBlog';
const YoursBlog = () => {
 const [json,setJson]=useState();
 useEffect(()=>{
    (async()=>{
     const User=await getAllblogs();
      const data=User.blogs.filter((item)=>item.user===localStorage.getItem("userId"));
      setJson(data);
    })();
 
  
 
  
},[])

  return (
    <div>
     <Box
      display="flex"
      flexDirection={"column"}
      padding={3}
      justifyContent="center"
      alignItems={"center"}
    >
      {" "}
      {json ? json.length===0 ? <NoBlog/>: 
        json.map((item, index) => (
          <CardItem
            // date={new Date(`${item.date}`).toLocaleDateString()}
            description={item.description}
            image={item.image}
            id={item._id}
            // location={item.location}
            title={item.title}
            key={index}
            user={item.user}
            name={item.user.name}
          />
        )):""}
    </Box>
    </div>
  )
}

export default YoursBlog
