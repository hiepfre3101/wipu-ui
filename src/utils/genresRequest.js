import axios from "axios";

const request = axios.create({
  baseURL:"https://gogoanime2.p.rapidapi.com/genre/",
  headers:{
    'X-RapidAPI-Key': '51936fb793mshda89f64693f9ecfp169dc9jsn1536b753f14c',
    'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
  }
});

export const get = async (path,options)=>{
  try {
    const res = await request.get(path,options);
    return res.data;
  }catch (err){
   console.log(err);
  }
}

export default request;