import { useState } from 'react';
import { createContext } from 'react';

const AnimeIdContext = createContext();
function AnimeIdProvider({ children }) {
   const queryParam = new URLSearchParams(window.location.search);
   let idEpisode = queryParam.get('id');
   let  idAnime = idEpisode;
   let numberEpisode = "1";
   if(idEpisode){
         idAnime= idEpisode.slice(0,idEpisode.lastIndexOf("-episode"));
         numberEpisode = idEpisode.slice(idEpisode.lastIndexOf("-")+1);
   }
   const [idAnimeState, setIdAnimeState] = useState(idAnime);
   const goToWatch = (idEpisode) => {
       setIdAnimeState(idEpisode.slice(0,idEpisode.lastIndexOf("-episode")));
   };//gotoWatch() : function set global state 'id' 
   const values = {
      id: idAnimeState,
      idEpisode:idEpisode,
      numberEpisode:numberEpisode,
      goToWatch,
   };
   return <AnimeIdContext.Provider value={values}>{children}</AnimeIdContext.Provider>;
}
export { AnimeIdProvider, AnimeIdContext };
