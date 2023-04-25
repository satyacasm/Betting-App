import axios from 'axios';
import axois from 'axios';
export const getAllblogs= async()=>{

    const res=await axois.get("/api/blog/");
    if(res.status!==200){
        return console.log("Some error occur");
    }
    const data=res.data;
    return data;
}

export const gatAllblogsById=async(id)=>{

    const res=await axois.get(`/api/blog/${id}`);
    if(res.status!==200){
        return console.log("Some error occur");
    }
    const data=res.data;
    // console.log(data);
    
    return data;
}

export const sendLoginRequest =async(signUp,data)=>{
    const res=await axois.post(`/api/user/${signUp?"signup":"login"}`,{
        name:data.name?data.name:"",
        email:data.email,
        password:data.password
    }).catch((err)=>console.log(err));

    if(res.status!==200&&res.status!==201){
        return console.log("unable to login");
    }
    const resData=await res.data;
    return resData;
}

export const addPost =async (data)=>{
   const res= await axois.post("/api/blog/add",{
        title :data.title,
        description :data.description,
        location :data.location,
        image :data.image,
        date:data.date,
        tag:data.tag,
        user:localStorage.getItem("userId"),
   })
   .catch((err)=>console.log(err));

   if(res.status!==200||res.status!==201){
    console.log(res.status)
    return console.log("Error Occured");

   }

   const resData= await res.data;
   return resData;
}

export const bolgUpdate= async (data,id)=>{
   const res=await axois.put(`api/blog/update/${id}`,{
        title:data.title,
        description:data.description,
        location:data.location,
        image:data.image,
        tag:data.tag

    }).catch(err=>console.log(err));
    if(res.status!==200){
        return console.log("unable to update");
    }
    const resData= await res.data;
    return resData;
}

export const deleteBlog =async (id)=>{
    const res=await axios.delete(`/api/blog/${id}`)
    .catch(err=>console.log(err))

    if(res.status!==200){
        return console.log("unable to delete");
    }
    const resData =await res.data;
    return resData;
   
}

export const getUserDetail =async()=>{
    const id= localStorage.getItem('userId');
    const res= await axios.get(`/api/user/${id}`).catch(err=>console.log(err));
    if(res.status!==200){
        console.log("No user found");
    }
    const resData= await res.data;
    return resData;
}