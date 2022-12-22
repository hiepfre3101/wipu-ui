import classNames from 'classnames/bind';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { linkToWatch } from '~/_globalVaribles';
import { AnimeIdContext } from '../Context/AnimeIdContext';
import styles from './FavoriteList.module.scss';

const cx = classNames.bind(styles);
function FavoriteItem({img, title,id }) {
   const animeIdContext = useContext(AnimeIdContext);
   // number 1: is default episode of anime
   return (
      <Link className={cx('item')} to={`/watch?id=${linkToWatch(id,1)}`} onClick={()=>animeIdContext.goToWatch(linkToWatch(id,1))}>
         <img src={img} alt="img" className={cx('item-img')} />
         <span className={cx('item-title')}>{title}</span>
      </Link>
   );
}

export default FavoriteItem;
