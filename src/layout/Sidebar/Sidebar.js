import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);
function Sidebar() {
   return (
      <div className={cx('wrapper')}>
         <Link to="/">Home</Link>
         <Link to="/popular">Popular</Link>
         <Link to="/genre">Genre</Link>
      </div>
   );
}

export default Sidebar;
