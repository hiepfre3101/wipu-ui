import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useState } from 'react';

import styles from './FavoriteList.module.scss';
import FavoriteItem from './FavoriteItem';
import * as favoriteService from '~/services/favoriteService';

const cx = classNames.bind(styles);
function FavoriteList() {
   const [list, setList] = useState([]);
   useEffect(() => {
      favoriteService
         .getRecommend()
         .then((data) => {
            setList((prevData) => [...prevData, ...data]);
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <div className={cx('favorite-block')}>
         <p className={cx('label')}>FAVOURITES</p>
         <div className={cx('items')}>
            {list.map((item, index) => {
               if (index < 3) {
                  return <FavoriteItem key={index} img={item.entry.images.jpg.image_url} title={item.entry.title} id={item.entry.mal_id}/>;
               }
            })}
         </div>
      </div>
   );
}

export default FavoriteList;
