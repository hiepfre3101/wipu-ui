import * as request from '~/utils/allGenresRequest';


export const getAllGenres = async()=>{
    try {
        const response = await request.get('',{});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}