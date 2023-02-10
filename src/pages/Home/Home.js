import classNames from 'classnames/bind';

import { Hero } from '~/components/Hero';
import styles from './Home.module.scss';
import { SeasonContent } from '~/components/SeasonContent';
import { TopContent } from '~/components/TopContent';
import withContent from '~/components/HOCs/withContent';
import * as requestLastEpisode from '~/services/seasonAnimeNow';
import * as requestTopAnime from '~/services/topAnime';

const selectRequestLastEpisode = {
   getRequest: (props) => {
      return requestLastEpisode.getSeasonRequest(props);
   },
};
const selectRequestTopAnime = {
   getRequest: (props) => {
      return requestTopAnime.getTopAnime(props);
   },
};
const cx = classNames.bind(styles);
function Home() {
   const TopAnime = withContent(TopContent,selectRequestTopAnime,false,[]);
   const LastesEpisode = withContent(SeasonContent,selectRequestLastEpisode,true,[]);
   const HeroBanner = withContent(Hero,selectRequestTopAnime,false,[]);
   return (
      <div className={cx('wrapper')}>
         <HeroBanner/>
      <div className={cx('main-content')}>
           <LastesEpisode/>
           <TopAnime/>
      </div>
      </div>
   );
}

export default Home;
