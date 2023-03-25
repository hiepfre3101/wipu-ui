import classNames from 'classnames/bind';

import styles from './GenrePage.module.scss';
import { Button } from '../Button';

const cx = classNames.bind(styles);
function GenreList({ data }) {
   return (
      <div className={cx('wrapper')}>
         <h2 className={cx('title')}>Genres</h2>
         <article className={cx('list-genre')}>
            {data.map((genre, index) => {
               const hrefArr = genre.name.split(' ');
               let link = '';
               if (hrefArr.length > 1) {
                  link = hrefArr.join('-').toLowerCase();
               } else {
                  link = genre.name.toLowerCase();
               }
               return (
                  <Button to={`/genre/${link}`} key={index} large roundM className={cx('btn-genre')}>
                     {genre.name}
                  </Button>
               );
            })}
         </article>
      </div>
   );
}

export default GenreList;
