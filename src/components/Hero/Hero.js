import classNames from 'classnames/bind';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';

import { AnimeIdContext } from '../Context/AnimeIdContext';
import * as topAnime from '~/services/topAnime';
import { ArrowRightIcon, PlayIcon } from '~/assets/Icon';
import { Button } from '../Button';
import styles from './Hero.module.scss';
import HeroPreview from './HeroPreview';
import Loading from '../Loading/Loading';

const cx = classNames.bind(styles);
function Hero() {
   const [listSlide, setListSlide] = useState([]);
   const [loading, setLoading] = useState(true);
   const [indexSlide, setIndexSlide] = useState(0);
   const animeIdContext = useContext(AnimeIdContext);
   useEffect(() => {
      const fetchApi = async () => {
         const data = await topAnime.getTopAnime();
         setListSlide(data.results);
         setLoading(false);
      };
      fetchApi();
   }, []);

   useEffect(() => {
      const timeId = setTimeout(() => {
         setIndexSlide((prev) => prev + 1);
         if (listSlide.length > 1 && indexSlide === listSlide.length - 1) {
            setIndexSlide(0);
         }
      }, 4000);
      return () => {
         clearTimeout(timeId);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [indexSlide]);
   const handleNext = (e) => {
      e.preventDefault();
      if (indexSlide === listSlide.length - 1) {
         setIndexSlide(0);
      } else {
         setIndexSlide((prev) => prev + 1);
      }
   };
   if (loading) {
      return <Loading />;
   } else
      return (
         <div className={cx('wrapper')}>
            <img src={listSlide[indexSlide].image} className={cx('bg-hero')} alt="banner" />
            <div className={cx('bg-overlay')}></div>
            <div className={cx('main-block')}>
               <div className={cx('left-block')}>
                  <p className={cx('title')}>{listSlide[indexSlide].title}</p>
                  <Button
                     roundL
                     primary
                     className={cx('btn-watch')}
                     rightIcon={<PlayIcon />}
                     to={`/watch?id=${listSlide[indexSlide].id}`}
                     onClick={()=>animeIdContext.goToWatch(listSlide[indexSlide].id)}
                  >
                     Watch
                  </Button>
               </div>
               <div className={cx('right-block')}>
                  <HeroPreview index={indexSlide} slides={listSlide} slideLength={listSlide.length} />
                  <div className={cx('btn-next')} onClick={handleNext}>
                     <ArrowRightIcon />
                  </div>
               </div>
            </div>
         </div>
      );
}

export default Hero;
