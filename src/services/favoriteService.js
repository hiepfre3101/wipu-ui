import * as request from '~/utils/request';

export const getRecommend = async () => {
   try {
      const res = await request.get('/20/recommendations', {});
      //no offical id so I use default id = 20 for all param id in this request
      return res.data;
   } catch (error) {
      console.log(error);
   }
};
