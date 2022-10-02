import * as request from '~/utils/request';

export const getAnime = async (q) => {
   try {
      const res = await request.get('', {
         params:{
            q: q,
         } 
      });
      return res.data;
   } catch (err) {
      console.log(err);
   }
};
