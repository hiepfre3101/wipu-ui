import axios from "axios";

const seasonRequest = axios.create({
  baseURL:"https://api.consumet.org/anime/gogoanime/recent-episodes",
});

export const get = async (path,option={})=>{
   const respond = await seasonRequest.get(path,option);
   return respond.data;
}
export default seasonRequest;