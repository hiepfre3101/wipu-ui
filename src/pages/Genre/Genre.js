import withContent from '~/HOCs/withContent';
import * as allGenresRequest from '~/services/getAllGenres';
import GenrePage from '~/components/GenrePage/GenrePage';

const selectRequestAllGenres = {
   getRequest: (props) => {
      return allGenresRequest.getAllGenres(props);
   },
};

const GenreSelect = withContent(GenrePage, selectRequestAllGenres, false, []);
function Genre({ forwardRef }) {
   return <GenreSelect />;
}

export default Genre;
