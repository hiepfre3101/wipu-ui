import * as request from '~/utils/topRequest';

export const getTopAnime = async ({ type, limit, filter, page }) => {
   try {
      const respond = await request.get('', {
         params: {
            type,
            limit,
            filter,
            page,
         },
      });
      return respond.data;
   } catch (err) {
      console.log(err);
   }
};
