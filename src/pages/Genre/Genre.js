import { useEffect } from 'react';
import * as request from '~/services/getGenres';
function Genre() {
    useEffect(()=>{
       request.getGenres("action")
       .then((respond)=>{
        console.log(respond);
       })
       .catch((rej)=>{
        console.log(rej);
       })
    },[])
    return ( <h1>Genre page</h1> );
}

export default Genre;