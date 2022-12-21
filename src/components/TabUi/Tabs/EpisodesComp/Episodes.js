import classNames from 'classnames/bind';

import styles from './Episodes.module.scss';
import Loading from '~/components/Loading/Loading';
import { Button } from '~/components/Button';
import { Video } from '~/components/Video';
import * as request from "~/services/getEmbedVideo";
import { AnimeIdContext } from '~/components/Context/AnimeIdContext';

import { useEffect, useState } from 'react';
import { useContext } from 'react';

const cx = classNames.bind(styles);
function Episodes({ data, handleChangePage}) {
   const animeContext = useContext(AnimeIdContext);
   const [episode, setEpisode] = useState(animeContext.numberEpisode);
   const [episodeId,setEpisodeId] = useState(animeContext.idEpisode);
   const [src, setSrc] = useState("");
   const handleOpenVideo = (id,number)=>{
      setEpisodeId(id);
      setEpisode(number);
   }

   useEffect(()=>{
      window.scrollTo(0,0);
     const fetchApi = async ()=>{
        const srcVideo = await request.getVideoEmbed(episodeId);
        setSrc(srcVideo.headers.Referer);//embed link in api respond
     }
     fetchApi();
   },[episodeId]);
   if (data) {
      const quantityPage = data.episodes.length;
      const renderTab = () => {
         const tabs = [];
         for (let i = 0; i < quantityPage; i++) {
            tabs.push(
               <Button primary className={cx('btn-tab')} onClick={() => handleChangePage(i + 1)}>
                  {i+1}
               </Button>,
            );
         }
         return tabs;
      };
      return (
         <div className={cx('wrapper')}>
            <Video src={src}/>
            {/* <div className={cx('tab-page')}>{renderTab()}</div> */}
            <div className={cx('list-page-block')}>
            <div className={cx('title')}>Episode {episode}</div>
             <div className={cx('list-page')}>
                  {data.episodes.map((item) => (
                     <Button small key={item.id} className={cx('btn-page')} onClick={()=>handleOpenVideo(item.id,item.number)}>
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
