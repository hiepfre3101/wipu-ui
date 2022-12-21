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
            <Link key={item.id} className={cx('anime-block')} to={`/watch?id=${item.id}-episode-1`} onClick={()=>animeIdContext.goToWatch(`${item.id}-episode-1`)}>
               <img src={item.image} alt="avatar" className={cx('anime-img')}/>
               <p className={cx('anime-name')}>{item.title}</p>
            </Link>
         ));
      }
   };
   return <div className={cx('wrapper')}>{handleVisible()}</div>;
}

export default SearchResult;
