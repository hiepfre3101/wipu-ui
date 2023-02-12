import { useParams } from 'react-router-dom';

import * as requestGenreResult from '~/services/getGenres';
import withContent from '../../HOCs/withContent';
import PopularContent from '../Popular/PopularContent';

const selectGenreRequest = {
   getRequest: (page, ...option) => {
      return requestGenreResult.getGenres(page, ...option);
   },
};
function GenreResults() {
   const genre = useParams();
   const GenreResult = withContent(PopularContent, selectGenreRequest, true, [genre.genre], `Genre: ${genre.genre}`);
   return <GenreResult />;
}

export default GenreResults;
