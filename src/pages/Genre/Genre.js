import withContent from '~/HOCs/withContent';
import * as allGenresRequest from '~/services/getAllGenres';
import GenreList from '~/components/GenrePage/GenreList';

const selectRequestAllGenres = {
   getRequest: (props) => {
      return allGenresRequest.getAllGenres(props);
   },
};

const GenreSelect = withContent(GenreList, selectRequestAllGenres, false, []);
function Genre() {
   return <GenreSelect />;
}

export default Genre;
