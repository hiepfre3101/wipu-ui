import axios from "axios";

const request = axios.create({
   baseURL:"https://api.jikan.moe/v4/anime/"
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
