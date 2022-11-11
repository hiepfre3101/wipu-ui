import * as request from '~/utils/getAnimeById';

export const getAnimeById = async (id) => {
   try {
   const data = await  request.get(`${id}`, {});
   return data.data;
   } catch (err) {
      console.log(err);
   }
};

export const getMoreAnimeById = async (id,path) =>{
   try{
     const data = await request.get(`${id}/${path}`,{});
     return data.data;
   }catch(err){
      console.log(err);
   }
}