
import classNames from 'classnames/bind';

import styles from './ModalEmbed.module.scss';
import Portal from "~/components/Portal/Portal";
import { XmaskIcon } from '~/assets/Icon';

const cx = classNames.bind(styles);
function ModalEmbed({isOpen, embedUrl, onClose}) {
    if(!isOpen){
        return null;
    }
   return (
      <Portal>
          <div className={cx('wrapper')}>
          <div className={cx('close-btn')} onClick={onClose}><XmaskIcon/></div>
            <iframe className={cx('iframe')} src={embedUrl} frameBorder="0" title="trailer" width={"500px"} height={"300px"}></iframe>
          </div>
      </Portal>
   );
}

export default ModalEmbed;
