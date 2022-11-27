import * as request from '~/utils/getAnimeById';

export const getAnimeById = async (id) => {
   try {
   const data = await  request.get(`${id}`, {});
   return data.data;
   } catch (err) {
      console.log(err);
   }
};

export const getMoreAnimeById = async (id,path,page) =>{
   try{
     const data = await request.get(`${id}/${path}`,{
      params:{
         page:page,
      }
     });
     return data;//data is an object = {pagination:[], data:[]}
   }catch(err){
      console.log(err);
   }
}

