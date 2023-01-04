import classNames from 'classnames/bind';

import styles from './FavoriteList.module.scss';
import FavoriteItem from './FavoriteItem';
const cx = classNames.bind(styles);
function FavoriteList({data}) {
   return (
      <div className={cx('favorite-block')}>
         <p className={cx('label')}>FAVOURITES</p>
         <div className={cx('items')}>
            {data.results.map((item, index) => {
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
