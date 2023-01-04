import classNames from 'classnames/bind';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { linkToWatch } from '~/_globalVaribles';
import { AnimeIdContext } from '../Context/AnimeIdContext';
import { PlayIcon } from '~/assets/Icon';
import { Button } from '../Button';
import styles from './TopContent.module.scss';

const cx = classNames.bind(styles);
function TopContent({ data }) {
   const animeIdContext = useContext(AnimeIdContext);
   return (
      <div className={cx('wrapper')}>
         <h1 className={cx('title')}>Top Anime</h1>
         <div className={cx('main-block')}>
            {data.results.map((item, index) => {
               if (index < 5) {
                  return (
                     <div className={cx('anime')} key={item.id}>
                        <Link
                           className={cx('img-block')}
                           //number 1: is default episode of anime
                           to={`/watch?id=${linkToWatch(item.id, 1)}`}
                           onClick={() => animeIdContext.goToWatch(linkToWatch(item.id, 1))}
                        >
                           <div className={cx('index')}>{index + 1}</div>
                           <img src={item.image} alt="img" className={cx('img')} />
                        </Link>
                        <div className={cx('anime-info')}>
                           <p className={cx('name')}>{item.title}</p>
                           <Button
                              to={`/watch?id=${linkToWatch(item.id, 1)}`}
                              small
                              roundL
                              leftIcon={<PlayIcon />}
                              className={cx('btn-watch')}
                              onClick={() => animeIdContext.goToWatch(linkToWatch(item.id, 1))}
                           ></Button>
                        </div>
                     </div>
                  );
               }
               return null;
            })}
            <img
               src="https://i.pinimg.com/originals/17/37/21/173721246ff8546baedb7ef457f9d2c1.png"
               alt="bot-img"
               className={cx('bot-img')}
            />
         </div>
      </div>
   );
}
TopContent.propTypes = {
   data: PropTypes.object.isRequired,
};
export default TopContent;
