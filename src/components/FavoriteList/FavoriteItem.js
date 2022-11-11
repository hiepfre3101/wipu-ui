import classNames from 'classnames/bind';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AnimeIdContext } from '../Context/AnimeIdContext';
import styles from './FavoriteList.module.scss';

const cx = classNames.bind(styles);
function FavoriteItem({img, title,id }) {
   const animeIdContext = useContext(AnimeIdContext);
   return (
      <Link className={cx('item')} to={`/watch?id=${id}`} onClick={()=>animeIdContext.goToWatch(id)}>
         <img src={img} alt="img" className={cx('item-img')} />
         <span className={cx('item-title')}>{title}</span>
      </Link>
   );
}

export default FavoriteItem;
