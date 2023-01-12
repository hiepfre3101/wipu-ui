import * as request from '~/utils/genresRequest';

export const getGenres = async (page,genre)=>{
    try{
        const res = await request.get(`${genre}`,{
            params:{
                page:page,
            }
        });
        return res;
    }catch(err){
        console.log(err);
    }
    
}