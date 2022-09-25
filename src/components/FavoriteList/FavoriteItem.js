import classNames from 'classnames/bind';

import styles from './FavoriteList.module.scss';

const cx = classNames.bind(styles);
function FavoriteItem({img, title}) {
   return (
      <div className={cx('item')}>
         <img src={img} alt="img" className={cx('item-img')} />
         <span className={cx('item-title')}>{title}</span>
      </div>
   );
}

export default FavoriteItem;
