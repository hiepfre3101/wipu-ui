import classNames from 'classnames/bind';

import { Button } from '~/components/Button';
import { HomeIcon, StonkeIcon, GenreIcon } from '~/assets/Icon';
import { FavoriteList } from '~/components/FavoriteList';
import styles from './Sidebar.module.scss';
import * as requestTopAnime from '~/services/topAnime';
import withContent from '~/HOCs/withContent';
const cx = classNames.bind(styles);
const selectRequestTopAnime = {
   getRequest: (props) => {
      return requestTopAnime.getTopAnime(props);
   },
};
const FavoriteAnime = withContent(FavoriteList, selectRequestTopAnime, false, []);
function Sidebar() {
   return (
      <div className={cx('wrapper')}>
      <div className={cx('top-block')}>
            <div className={cx('nav-aside')}>
               <Button roundM leftIcon={<HomeIcon />} className={cx('nav-btn')} primary nonBg to={'/'}>
                  Home
               </Button>
               <Button roundM leftIcon={<StonkeIcon />} className={cx('nav-btn')} primary nonBg to={'/popular'}>
                  Popular
                  <svg width={24} height={24} className={cx('animate')}>
                     <circle cx={12} cy={12} r={12} fill={'#99f6e4'}></circle>
                  </svg>
               </Button>
               <Button roundM leftIcon={<GenreIcon />} className={cx('nav-btn')} primary nonBg to={'/genre'}>
                  Genre
               </Button>
            </div>
            <div className={cx('favorite-block')}>
               <FavoriteAnime />
            </div>
      </div>
         <footer className={cx('footer')}>
            <p className={cx('footer-title')}>EE Watch Copyright © 2022</p>
         </footer>
      </div>
   );
}

export default Sidebar;
