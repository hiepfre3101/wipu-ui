import axios from "axios";

const seasonRequest = axios.create({
  baseURL:"https://api.jikan.moe/v4/seasons/now",
});

export const get = async (path,option={})=>{
   const respond = await seasonRequest.get(path,option);
   return respond.data;
}
export default seasonRequest;