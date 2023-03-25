import classNames from 'classnames/bind';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';

import { linkToWatch } from '~/_globalVaribles';
import { AnimeIdContext } from '../Context/AnimeIdContext';
import { ArrowRightIcon, PlayIcon } from '~/assets/Icon';
import PropTypes from 'prop-types';

import { Button } from '../Button';
import styles from './Hero.module.scss';
import HeroPreview from './HeroPreview';
const cx = classNames.bind(styles);
function Hero({ data }) {
   const [indexSlide, setIndexSlide] = useState(0);
   const animeIdContext = useContext(AnimeIdContext);
   useEffect(() => {
      const timeId = setTimeout(() => {
         setIndexSlide((prev) => prev + 1);
         if (data.results.length > 1 && indexSlide === data.results.length - 1) {
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
      if (indexSlide === data.results.length - 1) {
         setIndexSlide(0);
      } else {
         setIndexSlide((prev) => prev + 1);
      }
   };
   return (
      <div className={cx('wrapper')}>
         <img src={data.results[indexSlide].image} className={cx('bg-hero')} alt="banner" />
         <div className={cx('bg-overlay')}></div>
         <div className={cx('main-block')}>
            <div className={cx('left-block')}>
               <p className={cx('title')}>{data.results[indexSlide].title}</p>
               <Button
                  roundL
                  primary
                  className={cx('btn-watch')}
                  rightIcon={<PlayIcon />}
                  to={`/watch?id=${linkToWatch(data.results[indexSlide].id, 1)}`}
                  onClick={() => animeIdContext.goToWatch(linkToWatch(data.results[indexSlide].id, 1))}
               >
                  Watch
               </Button>
            </div>
            <div className={cx('right-block')}>
               <HeroPreview index={indexSlide} slides={data.results} slideLength={data.results.length} />
               <div className={cx('btn-next')} onClick={handleNext}>
                  <ArrowRightIcon />
               </div>
            </div>
         </div>
      </div>
   );
}
Hero.propTypes = {
   data: PropTypes.object.isRequired,
};
export default Hero;
