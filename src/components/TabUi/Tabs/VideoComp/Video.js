import classNames from 'classnames/bind';
import { useState } from 'react';
import { PlayIcon } from '~/assets/Icon';

import ModalEmbed from '~/components/Modal/ModalEmbed/ModalEmbed';
import styles from './Video.module.scss';

const cx = classNames.bind(styles);
function Video({ data }) {
   const [isOpen, setIsOpen] = useState(false);
   const [embedUrl, setEmbedUrl] = useState('');

   const setIsOpenModal = (embedUrl) => {
      setIsOpen(true);
      setEmbedUrl(embedUrl);
   };
   const handleCloseModal = () => {
      setIsOpen(false);
   };
   return (
      <div className={cx('wrapper')}>
         <div className={cx('trailer-block')}>
            <p className={cx('title')}>Trailer</p>
            <div className={cx('popup-trailer')}>
               {data.data.promo &&
                  data.data.promo.map((item, index) => (
                     <div
                        className={cx('trailer-item')}
                        key={index}
                        onClick={() => setIsOpenModal(item.trailer.embed_url)}
                     >
                        <div className={cx('overlay')}>
                           <div className={cx('icon')}>
                              <PlayIcon />
                           </div>
                           <p className={cx('trailer-name')}>{item.title}</p>
                        </div>
                        <img src={item.trailer.images.large_image_url} alt="img" className={cx('img')} />
                     </div>
                  ))}
            </div>
         </div>
         <ModalEmbed isOpen={isOpen} embedUrl={embedUrl} onClose={handleCloseModal} />
      </div>
   );
}

export default Video;
