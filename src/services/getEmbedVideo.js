import * as request from '~/utils/embedVideoRequest';

export const getVideoEmbed = async(episodeId)=>{
    try{
        const res = request.get(`${episodeId}`,{});
        return res;
    }catch(err){
        console.log(err);
    }
}
