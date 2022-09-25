import classNames from 'classnames/bind';
import { Button } from '~/components/Button';
import { Search } from '../Search';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
   return (
      <div className={cx('wrapper')}>
         <p className={cx('label')}>Welcome!</p>
         <Search />
         <div className={cx('auth')}>
            <Button roundXl className={cx('auth-btn')}>Login</Button>
            <Button roundXl className={cx('auth-btn')}>Saved</Button>
         </div>
      </div>
   );
}

export default Header;
