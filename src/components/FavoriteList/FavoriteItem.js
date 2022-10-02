import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './FavoriteList.module.scss';

const cx = classNames.bind(styles);
function FavoriteItem({img, title , id}) {
   return (
      <Link className={cx('item')} to={`/watch?mal_id=${id}`}>
         <img src={img} alt="img" className={cx('item-img')} />
         <span className={cx('item-title')}>{title}</span>
      </Link>
   );
}

export default FavoriteItem;
