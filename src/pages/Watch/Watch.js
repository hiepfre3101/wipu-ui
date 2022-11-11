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
import TabUi from '~/components/TabUi/TabUi';

const cx = classNames.bind(styles);
function Watch() {
   console.log('watch render');
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const animeIdContext = useContext(AnimeIdContext);
   useEffect(() => {
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
                     <img src={data.images.jpg.large_image_url} alt="img" className={cx('general-img')} />
                  </div>
                  <div className={cx('desc-block')}>
                     <div className={cx('name-block')}>
                        <div className={cx('name')}>
                           <h3 className={cx('name-default')}>{data.title}</h3>
                           <p className={cx('name-jp')}>{data.title_japanese}</p>
                        </div>
                        <Button leftIcon={<SaveIcon />} roundL primary className={cx('btn-save')}>
                           Save
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
            <TabUi id={animeIdContext.id}/>
         </div>
      );
   }
}

export default Watch;
