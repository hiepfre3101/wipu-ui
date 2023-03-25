import classNames from 'classnames/bind';
import { useContext } from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.scss';
import Portal from '../Portal/Portal';
import { XmaskIcon, BackIcon } from '~/assets/Icon';
import { FormContext } from '../Context/FormContext';

const cx = classNames.bind(styles);
function Modal({ onClose, isOpenModal, children }) {
   const formContext = useContext(FormContext);
   if (!isOpenModal) {
      return null;
   }
   return (
      <Portal>
         <div className={cx('wrapper')}>
            <div className={cx('main-content')}>
               {formContext.historySteps.length > 1 && (
                  <span className={cx('back-btn')} onClick={formContext.handleBack}>
                     <BackIcon />
                  </span>
               )}
               <span className={cx('close-btn')} onClick={onClose}>
                  <XmaskIcon />
               </span>
               {children}
            </div>
         </div>
      </Portal>
   );
}
Modal.propTypes = {
   onClose: PropTypes.func.isRequired,
   isOpenModal: PropTypes.bool.isRequired,
   children: PropTypes.node.isRequired,
};
export default Modal;
