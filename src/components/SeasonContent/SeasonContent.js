import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { linkToWatch } from '~/_globalVaribles';
import { AnimeIdContext } from '../Context/AnimeIdContext';
import styles from './SeasonContent.module.scss';

const cx = classNames.bind(styles);
function SeasonContent({ data, hasPage, page, handleNext, handlePrev }) {
   const animeIdContext = useContext(AnimeIdContext);
   return (
      <div className={cx('wrapper')}>
         {hasPage && (
            <img
               src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/61c717ae-3d90-4186-bbef-9a7191eb6146/ddmainq-d4eb464c-826f-45e2-aed3-65b216ec12c8.png/v1/fill/w_891,h_720,strp/zenitsu_agatsuma_render___kimersu_no_yaiba_by_guntersw_ddmainq-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNjFjNzE3YWUtM2Q5MC00MTg2LWJiZWYtOWE3MTkxZWI2MTQ2XC9kZG1haW5xLWQ0ZWI0NjRjLTgyNmYtNDVlMi1hZWQzLTY1YjIxNmVjMTJjOC5wbmciLCJ3aWR0aCI6Ijw9ODkxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.zDQ6eyN_1iGepS-buOb9y83KvMdxEPMk6HCCjl2AyQY"
               alt="zenitsu"
               className={cx('head-img')}
            />
         )}
         <div className={cx('main-block')}>
            <h2 className={cx('title')}>New Episodes</h2>
            <div className={cx('wrap-anime')}>
               {data.results.map((item) => (
                  <Link
                     to={`/watch?id=${linkToWatch(item.id, item.episodeNumber)}`}
                     className={cx('anime')}
                     key={item.id}
                     onClick={() => animeIdContext.goToWatch(linkToWatch(item.id, item.episodeNumber))}
                  >
                     <div className={cx('episodes')}>ep.{item.episodeNumber}</div>
                     <img src={item.image} alt="img" className={cx('img-anime')} />
                     <div className={cx('name-block')}>
                        <p className={cx('name')}>{item.title}</p>
                     </div>
                  </Link>
               ))}
            </div>
            {hasPage && (
               <div className={cx('btn-block')}>
                  {page === 1 ? null : (
                     <div className={cx('btn-action')}>
                        <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrev} />
                     </div>
                  )}
                  {!data.hasNextPage? null : (
                     <div className={cx('btn-action')} onClick={handleNext}>
                        <FontAwesomeIcon icon={faArrowRight} />
                     </div>
                  )}
               </div>
            )}
         </div>
      </div>
   );
}
SeasonContent.propTypes = {
   data: PropTypes.object,
   page: PropTypes.number,
   handleNext: PropTypes.func,
   handlePrev: PropTypes.func,
};
export default SeasonContent;
