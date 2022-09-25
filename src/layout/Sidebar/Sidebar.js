import classNames from 'classnames/bind';

import { Button } from '~/components/Button';
import { HomeIcon, StonkeIcon, GenreIcon } from '~/assets/Icon';
import { FavoriteList } from '~/components/FavoriteList';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);
function Sidebar() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('nav-aside')}>
            <Button roundM leftIcon={<HomeIcon />} className={'nav-btn'} primary nonBg to={'/'}>
               Home
            </Button>
               <Button roundM leftIcon={<StonkeIcon />} className={'nav-btn'} primary nonBg to={'/popular'}>
                  Popular
                   <svg width={24} height={24} className={cx('animate')}>
                      <circle cx={12} cy={12} r={12} fill={'#99f6e4'}></circle>
                    </svg>
               </Button>
            <Button roundM leftIcon={<GenreIcon />} className={'nav-btn'} primary nonBg to={'/genre'}>
               Genre
            </Button>
         </div>
         <div className={cx('favorite-block')}>
            <FavoriteList />
         </div>
         <footer className={cx('footer')}>
            <p className={cx('footer-title')}>WIPU Watch Copyright © 2022</p>
         </footer>
      </div>
   );
}

export default Sidebar;
