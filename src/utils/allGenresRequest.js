import axios from "axios";


const request = axios.create({
    baseURL:'https://api.jikan.moe/v4/genres/anime',
})

export const get = async (path,options)=>{
  try {
    const response = await request.get(path,options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default request;