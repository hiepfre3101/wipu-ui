import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useState } from 'react';

import styles from './FavoriteList.module.scss';
import FavoriteItem from './FavoriteItem';
import * as request from '~/services/topAnime';

const cx = classNames.bind(styles);
function FavoriteList() {
   const [list, setList] = useState([]);
   useEffect(() => {
      request
         .getTopAnime()
         .then((data) => {
            setList(data.results);
         })
         .catch((err) => console.log(err));
   }, []);
   return (
      <div className={cx('favorite-block')}>
         <p className={cx('label')}>FAVOURITES</p>
         <div className={cx('items')}>
            {list.map((item, index) => {
               if (index < 3) {
                  return (
                     <FavoriteItem
                        key={index}
                        img={item.image}
                        title={item.title}
                        id={item.id}
                     />
                  );
               }
               return null;
            })}
         </div>
      </div>
   );
}

export default FavoriteList;
