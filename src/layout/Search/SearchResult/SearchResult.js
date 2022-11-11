import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import styles from './SearchResult.module.scss';
import { AnimeIdContext } from '~/components/Context/AnimeIdContext';
const cx = classNames.bind(styles);
function SearchResult({ data = [] }) {
   const animeIdContext = useContext(AnimeIdContext);
   const handleVisible = () => {
      if (data.length === 0) {
         return <p>Nothing find</p>;
      } else {
         return data.map((item) => (
            <Link key={item.mal_id} className={cx('anime-block')} to={`/watch`} onClick={()=>animeIdContext.goToWatch(item.mal_id)}>
               <img src={item.images.jpg.image_url} alt="avatar" className={cx('anime-img')}/>
               <p className={cx('anime-name')}>{item.title}</p>
            </Link>
         ));
      }
   };
   return <div className={cx('wrapper')}>{handleVisible()}</div>;
}

export default SearchResult;
