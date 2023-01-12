import classNames from 'classnames/bind';

import { SaveIcon } from '~/assets/Icon';
import { Button } from '~/components/Button';
import styles from './Watch.module.scss';
import Episodes from '~/components/EpisodesComp/Episodes';
const cx = classNames.bind(styles);
function WatchPage({data}) {
      return (
         <div >
            <div className={cx('banner')}>
               <img src="https://wallpaperaccess.com/full/185688.jpg" alt="img" className={cx('banner-img')} />
               <div className={cx('general-info')}>
                  <div className={cx('img-block')}>
                     <img src={data.image} alt="img" className={cx('general-img')} />
                  </div>
                  <div className={cx('desc-block')}>
                     <div className={cx('name-block')}>
                        <div className={cx('name')}>
                           <h3 className={cx('name-default')}>{data.title}</h3>
                           <p className={cx('name-jp')}>{data.otherName}</p>
                        </div>
                        <Button leftIcon={<SaveIcon />} roundL primary className={cx('btn-save')}>
                           Save
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
            <Episodes data={data} />
            <div className={cx('wrap-info')}>
               <p className={cx('info-title')}>Anime Info</p>
               <div className={cx('info-block')}>
                  <img src={data.image} alt="img" className={cx('general-img')} />
                  <div className={cx('info-desc')}>
                     <p className={cx('desc-name')}>{data.title}</p>
                     <p className={cx('desc-crumb')}>
                        Episode Count: <span>{data.totalEpisodes}</span>
                     </p>
                     <p className={cx('desc-crumb')}>
                        Release: <span>{data.releaseDate}</span>
                     </p>
                     <p className={cx('desc-crumb')}>{data.description}</p>
                  </div>
               </div>
            </div>
         </div>
      );
   }

export default WatchPage;
