import classNames from 'classnames/bind';
import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import styles from './Modal.module.scss';
import Portal from '../Portal/Portal';
import { XmaskIcon, BackIcon } from '~/assets/Icon';
import ModalItem from './ModalItem';
import { FormContext } from '../Context/FormContext';


const cx = classNames.bind(styles);
function Modal({ onClose, isOpenModal }) {
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
                  <ModalItem label={formContext.currentStep.label} element={formContext.currentStep.element} />
               </div>
            </div>
      </Portal>
   );
}

export default Modal;
