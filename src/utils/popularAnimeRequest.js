import axios from "axios";

const request = axios.create({
    baseURL:"https://gogoanime2.p.rapidapi.com/popular",
    headers: {
        'X-RapidAPI-Key': '51936fb793mshda89f64693f9ecfp169dc9jsn1536b753f14c',
        'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
      }
})

export const get = async (path,config)=>{
     try {
        const res = await request.get(path,config);
        return res.data;
     } catch (error) {
        console.log(error);
     }
}

export default request;