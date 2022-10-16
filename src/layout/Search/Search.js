import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import * as searchAnime from '~/services/searchAnime';
import { GlassIcon } from '~/assets/Icon';
import styles from './Search.module.scss';
import { useCompelete } from '~/hook/useComplete';
import SearchResult from './SearchResult/SearchResult';

const cx = classNames.bind(styles);

function Search() {
   const [search, setSearch] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [haveString, setHaveString] = useState(false);
   const finalValue = useCompelete(search, 800);
   const inputRef = useRef();
   useEffect(() => {
      if (finalValue.trim() === '') {
         setSearch('');
         return;
      }
      const fetchApi = async () => {
         const data = await searchAnime.getAnime(finalValue);
         setSearchResult(data);
         return data;
      };
      fetchApi();
   }, [finalValue]);
   
   const handleSearch = (e) => {
      const searchValue = e.target.value;
      if (!searchValue.startsWith(' ') || searchValue !== '') {
         setSearch(searchValue);
         setHaveString(true);
      } else {
         setHaveString(false);
      }
   };

   return (
      <Tippy
         visible={haveString}
         zIndex={9999}
         interactive
         onClickOutside={() => {
            setHaveString(false);
            setSearch('');
         }}
         render={(attr) => (
            <div className={cx('popup-search')} tabIndex="99" {...attr}>
               <SearchResult data={searchResult} />
            </div>
         )}
      >
         <form className={cx('search-block')}>
            <input
               ref={inputRef}
               type="text"
               className={cx('input')}
               placeholder={'Search...'}
               onChange={(e) => handleSearch(e)}
               value={search}
            />
            {haveString && (
               <div className={cx('icon-btn')}>
                  <FontAwesomeIcon
                     icon={faXmark}
                     className={cx('icon-xmark')}
                     onClick={() => {
                        setSearch('');
                        setHaveString(false);
                     }}
                  />
               </div>
            )}
            <GlassIcon classname={cx('icon-glass')} />
         </form>
      </Tippy>
   );
}

export default Search;
