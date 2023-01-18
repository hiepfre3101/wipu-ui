import classNames from 'classnames/bind';

import { SaveIcon } from '~/assets/Icon';
import { Button } from '~/components/Button';
import styles from './Watch.module.scss';
import Episodes from '~/components/EpisodesComp/Episodes';
const cx = classNames.bind(styles);
function WatchPage({data}) {
 const saveAnime = (id,data)=>{
    const anime = localStorage.getItem(id);
    !anime && localStorage.setItem(id,JSON.stringify(data));
 }
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
                        <Button leftIcon={<SaveIcon />} roundL primary className={cx('btn-save')} onClick={()=>saveAnime(data.id,data)}>
                           Save
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
            <Episodes data={data} />
         </div>
      );
   }

export default WatchPage;
