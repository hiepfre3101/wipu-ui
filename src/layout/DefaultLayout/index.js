import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('sidebar-wrap')}><Sidebar></Sidebar></div>
         <div className={cx('container')}>
            <Header></Header>
            <div className={cx('content')}>{children}</div>
         </div>
      </div>
   );
}

export default DefaultLayout;
