import classNames from 'classnames/bind';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AnimeIdContext } from '../Context/AnimeIdContext';
import * as request from '~/services/topAnime';
import { FilmIcon, PlayIcon, StarIcon } from '~/assets/Icon';
import { Button } from '../Button';
import styles from './TopContent.module.scss';
import withContent from '../HOCs/withContent';

const cx = classNames.bind(styles);
const selectRequest = {
   getRequest: (props) => {
      return request.getTopAnime(props);
   },
};
const props = { type: 'tv', limit: 5, filter: 'airing', page: 1 };
function TopContent({ data }) {
   const animeIdContext = useContext(AnimeIdContext);
   return (
      <div className={cx('wrapper')}>
         <h1 className={cx('title')}>Top Anime</h1>
         <div className={cx('main-block')}>
            {data.map((item, index) => (
               <div className={cx('anime')} key={item.mal_id}>
                  <Link
                     className={cx('img-block')}
                     to={`/watch?id=${item.mal_id}`}
                     onClick={() => animeIdContext.goToWatch(item.mal_id)}
                  >
                     <div className={cx('index')}>{index + 1}</div>
                     <img src={item.images.jpg.large_image_url} alt="img" className={cx('img')} />
                  </Link>
                  <div className={cx('anime-info')}>
                     <p className={cx('name')}>{item.title}</p>
                     <div className={cx('rate')}>
                        <span className={cx('rate-icon')}>
                           <StarIcon classname={cx('icon')} />
                           {item.score}
                        </span>
                        <span className={cx('rate-icon')}>
                           <FilmIcon classname={cx('icon')} />
                           {item.episodes}
                        </span>
                     </div>
                     <Button
                        to={`/watch?id=${item.mal_id}`}
                        small
                        roundL
                        leftIcon={<PlayIcon />}
                        className={cx('btn-watch')}
                     ></Button>
                  </div>
               </div>
            ))}
            <img
               src="https://i.pinimg.com/originals/17/37/21/173721246ff8546baedb7ef457f9d2c1.png"
               alt="bot-img"
               className={cx('bot-img')}
            />
         </div>
      </div>
   );
}
export default withContent(TopContent, selectRequest, props);
