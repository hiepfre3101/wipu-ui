import * as seasonRequest from '~/utils/seasonRequest';

export const getSeasonRequest = async(page)=>{
  try{
   const res = await seasonRequest.get("",{
    params:{
        page:page
    }
   })
   return res.data;
  }catch(err){
    console.log(err)
  }
}
