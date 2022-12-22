import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useContext } from 'react';

import styles from './Episodes.module.scss';
import Loading from '~/components/Loading/Loading';
import { Button } from '~/components/Button';
import { Video } from '~/components/Video';
import * as request from "~/services/getEmbedVideo";
import { AnimeIdContext } from '../Context/AnimeIdContext';


const cx = classNames.bind(styles);
function Episodes({ data}) {
   const animeContext = useContext(AnimeIdContext);
   const [src, setSrc] = useState("");
   useEffect(()=>{
      window.scrollTo(0,0);
     const fetchApi = async ()=>{
        const srcVideo = await request.getVideoEmbed(animeContext.idEpisode);
        console.log(srcVideo);
        setSrc(srcVideo.headers.Referer);//embed link in api respond
     }
    fetchApi();
   },[animeContext.idEpisode]);
   if (data) {
      return (
         <div className={cx('wrapper')}>
            <Video src={src}/>
            {/* <div className={cx('tab-page')}>{renderTab()}</div> */}
            <div className={cx('list-page-block')}>
            <div className={cx('title')}>Episode {animeContext.numberEpisode}</div>
             <div className={cx('list-page')}>
                  {data.episodes.map((item) => (
                     <Button small key={item.id} className={cx('btn-page')} to={`/watch?id=${item.id}`} onClick={()=>animeContext.goToWatch(item.id)}>
                        {item.number}
                     </Button>
                  ))}
             </div>
            </div>
         </div>
      );
   }
   else {
      return <Loading />;
   }
}

export default Episodes;
