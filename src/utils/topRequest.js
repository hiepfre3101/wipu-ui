import axios from 'axios';

const topRequest = axios.create({
   baseURL: 'https://api.consumet.org/anime/gogoanime/top-airing',
});

export const get = async (path, option = {}) => {
   const respond = await topRequest.get(path, option);
   return respond.data;
};
export default topRequest;
