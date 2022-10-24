import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useState } from 'react';

import styles from './Hero.module.scss';
const cx = classNames.bind(styles);
function HeroPreview({ index, slides, slideLength }) {
   const [indexSlide, setIndexSlide] = useState(0);
   let nextSlideIndex = indexSlide+1;
   if(index===slideLength-1){
      nextSlideIndex=0;
   }
   useEffect(() => {
      if (index !== slideLength-1) {
         setIndexSlide(index);
      }else{
          setIndexSlide(0);
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [index]);
   if (slideLength === 0) {
      return null;
   } else {
      return (
         <div className={cx('img-block')}>
            <img src={slides[nextSlideIndex].images.jpg.large_image_url} alt="img" className={cx('next-img')} />
         </div>
      );
   } 
}
//index =3 -> undefined line 24 : not have index =5 in array. 
export default HeroPreview;
