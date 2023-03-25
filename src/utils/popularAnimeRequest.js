import axios from 'axios';

const request = axios.create({
   baseURL: 'https://webdis-q4hs.onrender.com/popular',
});

export const get = async (path, config) => {
   try {
      const res = await request.get(path, config);
      return res.data;
   } catch (error) {
      console.log(error);
   }
};

export default request;
