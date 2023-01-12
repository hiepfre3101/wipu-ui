import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { linkToWatch } from '~/_globalVaribles';
import { AnimeIdContext } from '~/components/Context/AnimeIdContext';
import styles from './Popular.module.scss';

const cx = classNames.bind(styles);
function PopularContent({ data, hasPage, page, handleNext, handlePrev,label}) {
   const animeIdContext = useContext(AnimeIdContext);
   return (
      <div className={cx('wrapper')}>
         <div className={cx('main-block')}>
            <h2 className={cx('title')}>{label}</h2>
            <div className={cx('wrap-anime')}>
               {data.map((item) => (
                  <Link
                     to={`/watch?id=${linkToWatch(item.animeId,1)}`}
                     className={cx('anime')}
                     key={item.animeId}
                     onClick={() => animeIdContext.goToWatch(linkToWatch(item.animeId,1))}
                  >
                     <div className={cx('episodes')}>{item.releasedDate}</div>
                     <img src={item.animeImg} alt="img" className={cx('img-anime')} />
                     <div className={cx('name-block')}>
                        <p className={cx('name')}>{item.animeTitle}</p>
                     </div>
                  </Link>
               ))}
            </div>
            {hasPage && (
               <div className={cx('btn-block')}>
                  {page === 1 ? null :(
                     <div className={cx('btn-action')}>
                        <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrev} />
                     </div>
                  )}
                     <div className={cx('btn-action')} onClick={handleNext}>
                        <FontAwesomeIcon icon={faArrowRight} />
                     </div>
               </div>
            )}
         </div>
      </div>
   );
}
PopularContent.propTypes = {
   data: PropTypes.array.isRequired,
   page: PropTypes.number,
   handleNext: PropTypes.func,
   handlePrev: PropTypes.func,
};
export default PopularContent;
