import * as request from '~/utils/genresRequest';

export const getGenres = async (genre)=>{
    try{
        const res = await request.get(`${genre}`,{});
    return res;
    }catch(err){
        console.log(err);
    }
    
}