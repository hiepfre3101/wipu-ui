import axios from 'axios';

const request = axios.create({
   baseURL: 'https://api.consumet.org/anime/gogoanime/',
});

export const get = async (path, option = {}) => {
   const response = await request.get(path, option);
   console.log(response.data);
   return response.data;
};
export default request;
