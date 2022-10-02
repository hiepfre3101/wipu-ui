import axios from 'axios';

const request = axios.create({
   baseURL: 'https://api.jikan.moe/v4/anime',
});

export const get = async (path, option = {}) => {
   const response = await request.get(path, option);
   return response.data;
};
export default request;
