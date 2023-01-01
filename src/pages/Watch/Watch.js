import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';

import { AnimeIdContext } from '~/components/Context/AnimeIdContext';
import { SaveIcon } from '~/assets/Icon';
import { Button } from '~/components/Button';
import Loading from '~/components/Loading/Loading';
import * as requestAnime from '~/services/getAnime';
import styles from './Watch.module.scss';
import Episodes from '~/components/EpisodesComp/Episodes';
import { SeasonContent } from '~/components/SeasonContent';

const cx = classNames.bind(styles);
function Watch() {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const animeIdContext = useContext(AnimeIdContext);
   useEffect(() => {
      window.scrollTo(0, 0);
      const fetchApi = async () => {
         const data = await requestAnime.getAnimeById(animeIdContext.id);
         setData(data);
         setLoading(false);
      };
      try {
         fetchApi();
      } catch (err) {
         console.log(err);
         setLoading(true);
      }
   }, [animeIdContext.id]);
   if (loading) {
      return <Loading />;
   } else {
      return (
         <div className={cx('wrapper')}>
            <div className={cx('banner')}>
               <img src="https://wallpaperaccess.com/full/185688.jpg" alt="img" className={cx('banner-img')} />
               <div className={cx('general-info')}>
                  <div className={cx('img-block')}>
                     <img src={data.image} alt="img" className={cx('general-img')} />
                  </div>
                  <div className={cx('desc-block')}>
                     <div className={cx('name-block')}>
                        <div className={cx('name')}>
                           <h3 className={cx('name-default')}>{data.title}</h3>
                           <p className={cx('name-jp')}>{data.otherName}</p>
                        </div>
                        <Button leftIcon={<SaveIcon />} roundL primary className={cx('btn-save')}>
                           Save
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
            <Episodes data={data}/>
            <div className={cx('wrap-info')}>
               <p className={cx('info-title')}>Anime Info</p>
               <div className={cx('info-block')}>
                  <img src={data.image} alt="img" className={cx('general-img')} />
                  <div className={cx('info-desc')}>
                       <p className={cx('desc-name')}>{data.title}</p>
                       <p className={cx('desc-crumb')}>Episode Count: <span>{data.totalEpisodes}</span></p>
                       <p className={cx('desc-crumb')}>Release: <span>{data.releaseDate}</span></p>
                       <p className={cx('desc-crumb')}>{data.description}</p>
                  </div>
               </div>
            </div>
            <SeasonContent/>
         </div>
      );
   }
}

export default Watch;
