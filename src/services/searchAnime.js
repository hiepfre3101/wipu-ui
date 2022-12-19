import * as request from '~/utils/searchRequest';

export const getAnime = async (q) => {
   try {
      const res = await request.get(`${q}`);
      return res.results;
   } catch (err) {
      console.log(err);
   }
};
