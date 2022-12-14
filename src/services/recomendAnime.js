import * as request from '~/utils/searchRequest';

export const getRecommend = async (id) => {
   try {
      const res = await request.get(`/${id}/recommendations`, {});
      return res.data;
   } catch (error) {
      console.log(error);
   }
};
