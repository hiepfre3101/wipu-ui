/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';

import styles from './Episodes.module.scss';
import Loading from '~/components/Loading/Loading';
import { Button } from '~/components/Button';
import * as request from '~/services/getEmbedVideo';
import { AnimeIdContext } from '../Context/AnimeIdContext';

const cx = classNames.bind(styles);
function Episodes({ data }) {
   const animeContext = useContext(AnimeIdContext);
   const [episode, setEpisode] = useState([]);
   const [tabs, setTabs] = useState(1);
   const [page, setPage] = useState({ start: 0, end: 99 });
   const [src, setSrc] = useState('');
   useEffect(() => {
      window.scrollTo(0, 0);
      const fetchApi = async () => {
         const srcVideo = await request.getVideoEmbed(animeContext.idEpisode);
         setSrc(srcVideo.headers.Referer); //embed link in api respond
      };
      fetchApi();
   }, [animeContext.idEpisode]);

   useEffect(() => {
      let episodeState = [];
      const oddEpisode = data.episodes.length % 100;
      const quotient = (data.episodes.length - oddEpisode) / 100;
      const handleEpisode = (start, end) => {
         data.episodes.forEach((item, index) => {
            //index in array begin with index = 0
            // start and end is the number of episode, so I minus 1
            if (index >= start - 1 && index <= end - 1) {
               episodeState.push(item);
            }
            return;
         });
      };
      handleEpisode(page['start'], page['end']);
      if (quotient !== 0) {
         setTabs(quotient);
      } else {
         episodeState = data.episodes;
         setTabs(1);
      }
      setEpisode(episodeState);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [data,page]);

   const renderTab = () => {
      const pairEpisodeList = [];
      let startEpisode = 1;
      for (let i = 0; i < tabs; i++) {
         // if it's the fisrt time, startEpisode = 1
         //if it's not the first time the loop start, startEpisode will plus 100
         //100: distance between start and end
         if (i !== 0) {
            startEpisode += 100;
         }
         // if it's the end of the loop, end number episode is the last number of this anime
         if (i === tabs - 1) {
            pairEpisodeList.push({ start: startEpisode, end: data.episodes[data.episodes.length - 1].number });
            break;
         }
         pairEpisodeList.push({ start: startEpisode, end: startEpisode + 99 });
      }
      return pairEpisodeList.map((item, index) => {
         return (
            <Button
               onClick={() => setPage({ start: item.start, end: item.end })}
               key={index}
               large
               roundXl
               className={cx('btn-tab')}
            >{`${item['start']}-${item['end']}`}</Button>
         );
      });
   };
   if (data) {
      return (
         <div className={cx('wrapper')}>
            <iframe src={src} frameBorder="0" height={'500'} width={'100%'} allowFullScreen></iframe>
            <div className={cx('list-page-block')}>
               <div className={cx('title')}>Episode {animeContext.numberEpisode}</div>
               <div className={cx('tab-page')}>{renderTab()}</div>
               <div className={cx('list-page')}>
                  {episode.map((item) => (
                     <Button
                        small
                        key={item.id}
                        className={cx('btn-page')}
                        to={`/watch?id=${item.id}`}
                        onClick={() => animeContext.goToWatch(item.id)}
                     >
                        {item.number}
                     </Button>
                  ))}
               </div>
            </div>
         </div>
      );
   } else {
      return <Loading />;
   }
}
Episodes.propTypes = {
   data: PropTypes.object,
};
export default Episodes;
