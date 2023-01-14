import { useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './Watch.module.scss';
import { AnimeIdContext } from '~/components/Context/AnimeIdContext';
import * as requestAnimeInfo from '~/services/getAnime';
import * as request from '~/services/seasonAnimeNow';
import withContent from '~/components/HOCs/withContent';
import { SeasonContent } from '~/components/SeasonContent';
import WatchPage from './WatchPage';
const cx = classNames.bind(styles);
const selectRequest = {
   getRequest: (page, ...options) => {
      return request.getSeasonRequest(page, ...options);
   },
};
const selectRequestAnime = {
   getRequest: (animeId, ...options) => {
      return requestAnimeInfo.getAnimeById(animeId, ...options);
   },
};
function Watch() {
   const animeIdContext = useContext(AnimeIdContext);
   const WatchComp = withContent(WatchPage, selectRequestAnime, false, [], '', animeIdContext.id);
   const LastestEpisode = withContent(SeasonContent, selectRequest,false, []);
   return (
      <div className={cx('wrapper')}>
         <WatchComp />
         <LastestEpisode />
      </div>
   );
}

export default Watch;
