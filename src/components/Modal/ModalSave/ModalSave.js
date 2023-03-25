import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AnimeIdContext } from '~/components/Context/AnimeIdContext';
import { linkToWatch } from '~/_globalVaribles';
import { XmaskIcon } from '~/assets/Icon';
import { Button } from '~/components/Button';
import styles from './ModalSave.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
function ModalSave() {
   const animeIdContext = useContext(AnimeIdContext);
   const [animes,setAnimes] = useState([]);
   useEffect(()=>{
      const renderLocalStorage = ()=>{
      let data ={};
      let animeListInLocal =[];
     for(let i = 0 ;i<localStorage.length;i++){
        data = JSON.parse(localStorage.getItem(localStorage.key(i)))
        animeListInLocal = [...animeListInLocal,data];
     }
     setAnimes(animeListInLocal);
   }
   renderLocalStorage();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[localStorage.length])
   const removeAnime = (id)=>{
      const anime = localStorage.getItem(id);
      anime && localStorage.removeItem(id);
      const animeRemoved = animes.filter(anime=>anime.id!==id);
      setAnimes(animeRemoved);
   }
   return (
      <div className={cx('wrapper')}>
            <p className={cx('title')}>Saved Anime</p>
            <p>This is the current list of anime you saved:</p>
         <div className={cx('list-block')}>
          {animes?.map(item=>(
            <article className={cx('item')} key={item.id}>
               <Button className={cx('btn-done')} leftIcon={<XmaskIcon />} small onClick={()=>removeAnime(item.id)}></Button>
               <Link
                  className={cx('item-info')}
                  to={`/watch?id=${linkToWatch(item.id, 1)}`}
                  onClick={() => animeIdContext.goToWatch(linkToWatch(item.id, 1))}
               >
                  <img className={cx('item-img')} alt="img" src={item.image} />
                  <p className={cx('item-name')}>{item.title}</p>
               </Link>
            </article>
          ))}
         </div>
      </div>
   );
}

export default ModalSave;
