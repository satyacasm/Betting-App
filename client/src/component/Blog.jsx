import React, { useEffect, useState } from 'react'
import { getAllblogs } from '../services/helper'
import CardItem from './CardItem';
import { Box } from "@mui/system";
import NoBlog from './NoBlog';
import './Blog.css';
const Blog = () => {
  const [json,setJson]=useState();
  const [data,setData]=useState();
  const [select,setSelecte]=useState();
  const [selectedValue, setSelectedValue] = useState("");
 
  
    const  hadleChange=(e)=> {
    
      setSelectedValue(e.target.value);
      if(e.target.value==='oldest'){
        let filterdata =json;
        filterdata = filterdata.sort((a, b) => {
          if (a.date < b.date) {
            return -1;
          }
          
        });
        setData(filterdata);
      }
      else if(e.target.value==='newest'){
        let filterdata =json;
        filterdata = filterdata.sort((a, b) => {
          if (a.date > b.date) {
            return -1;
          }
        });
        setData(filterdata);

      }
      else{

      
      let filterdata=json.filter((i)=>i.tag===e.target.value);

     if(e.target.value==="none"){
      setData(json);
     }
     else{

       setData(filterdata);
     }
    }
   
  }
  
  
  //fetching all blogs
  useEffect(()=>{
    
    getAllblogs().then((data)=>{ setJson(data?.blogs);setData(data?.blogs);console.log(data.blogs)}).catch(err=>console.log(err));
    
   
    
  },[])
  return (
    <>
    <div className="selecter">
    <select class="form-select" aria-label="Default select example"  onChange={hadleChange}>
          <option  value="none" >none</option>
          <option value="Entertainment" >Entertainment</option>
          <option value="Education">Education</option>
          <option value="Industry">Industry</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
</select>
    </div>

    <Box
      display="flex"
      flexDirection={"column"}
      padding={3}
      justifyContent="center"
      alignItems={"center"}
    >
      {" "}
      {data ? data.length===0?<NoBlog/>:
        data.map((item, index) => (
          <CardItem
            date={new Date(`${item.date}`).toLocaleDateString()}
            description={item.description}
            image={item.image}
            id={item._id}
            location={item.location}
            tag={item.tag}
            title={item.title}
            key={index}
            user={item.user}
            name={item.user.name}
          />
        )):""}
    </Box>
    </>
  )
}

export default Blog
