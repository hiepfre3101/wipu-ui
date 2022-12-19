import { useState } from 'react';
import { createContext } from 'react';

const AnimeIdContext = createContext();
function AnimeIdProvider({ children }) {
   const queryParam = new URLSearchParams(window.location.search);
   const idAnime = queryParam.get('id');
   const [id, setId] = useState(idAnime);
   const goToWatch = (animeId) => {
         setId(animeId);
   };//gotoWatch() : function set global state 'id' 
   const values = {
      id: id,
      goToWatch,
   };
   return <AnimeIdContext.Provider value={values}>{children}</AnimeIdContext.Provider>;
}
export { AnimeIdProvider, AnimeIdContext };
