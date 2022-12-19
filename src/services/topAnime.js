import * as request from '~/utils/topRequest';

export const getTopAnime = async () => {
   try {
      const respond = await request.get('', {});
      return respond;
   } catch (err) {
      console.log(err);
   }
};
