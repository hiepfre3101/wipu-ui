import * as request from '~/utils/topRequest';

export const getTopAnime = async () => {
   try {
      const respond = await request.get('', {
         params: {
            type: 'tv',
            limit: 5,
            filter: 'airing',
            page: 1,
         },
      });
      return respond.data;
   } catch (err) {
      console.log(err);
   }
};
