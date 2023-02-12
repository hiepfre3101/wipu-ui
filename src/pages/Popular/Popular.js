import withContent from '~/HOCs/withContent';
import * as requestPopularAnime from '~/services/getPopularAnime';
import PopularContent from '~/components/Popular/PopularContent';

const selectRequestPopularAnime = {
   getRequest: (props) => {
      return requestPopularAnime.getPopularAnime(props);
   },
};
const PopularAnime = withContent(PopularContent, selectRequestPopularAnime, true, [], 'Popular');
function Popular() {
   return <PopularAnime />;
}

export default Popular;
