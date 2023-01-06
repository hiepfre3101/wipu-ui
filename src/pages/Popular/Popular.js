import withContent from '~/components/HOCs/withContent';
import * as requestPopularAnime from '~/services/getPopularAnime';
import PopularContent from '~/components/Popular/PopularContent';

const selectRequestPopularAnime = {
   getRequest: (props) => {
      return requestPopularAnime.getPopularAnime(props);
   },
};
const PopularAnime = withContent(PopularContent, selectRequestPopularAnime, true, []);
function Popular() {
   return <PopularAnime />;
}

export default Popular;
