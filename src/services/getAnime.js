import * as request from '~/utils/getAnimeById';

export const getAnimeById = async (id) => {
   try {
      const data = await request.get(`${id}`, {});
      return data;
   } catch (err) {
      console.log(err);
   }
};


