import axios from "axios";

const request = axios.create({
   baseURL:"https://api.consumet.org/anime/gogoanime/info/",
}) ;

export const get = async(path,options)=>{
   try {
     const res = await request.get(path,options);
     return res.data;
   }catch (err){
    console.log(err);
   }
}

export default request;
