import axios from 'axios';

const topRequest = axios.create({
   baseURL: 'https://api.jikan.moe/v4/top/anime',
});

export const get = async (path, option = {}) => {
   const response = await topRequest.get(path, option);
   return response.data;
};
export default topRequest;
