import * as request from '~/utils/popularAnimeRequest';


export const getPopularAnime = async(page)=>{
    try{
      const response = await request.get("",{
       params:{
         page:page,
       }
      });
      return response;
    }catch(error){
        console.log(error);
    }
}