import classNames from 'classnames/bind';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { SaveIcon } from '~/assets/Icon';
import { Button } from '~/components/Button';
import { FormContext } from '~/components/Context/FormContext';
import { Modal } from '~/components/Modal';
import ModalAuth from '~/components/Modal/ModalAuth';
import ModalSave from '~/components/Modal/ModalSave/ModalSave';
import { Search } from '../Search';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [savedModal, setSavedModal] = useState(false);
  
   const formContext = useContext(FormContext);
   const handleCloseModal = () => {
      formContext.resertStep();
      setSavedModal(false);
      setIsOpenModal(false);
   };
   useEffect(() => {
      if (isOpenModal || savedModal) document.body.style.overflowY = 'hidden';
      else document.body.style.overflowY = 'auto';
   }, [isOpenModal, savedModal]);

   return (
      <div className={cx('wrapper')}>
         <div className={cx('flex-col--left')}>
            <p className={cx('label')}>Welcome!</p>
            <div className={cx('search-wrap')}>
               <Search />
            </div>
         </div>
         <div className={cx('flex-col--right')}>
            <Button roundXl className={cx('auth-btn')} large onClick={() => setIsOpenModal(true)}>
               Login
            </Button>
            <Button
               roundXl
               className={cx('auth-btn')}
               large
               leftIcon={<SaveIcon />}
               onClick={() => setSavedModal(true)}
            >
               Saved
            </Button>
         </div>
         <Modal isOpenModal={isOpenModal} onClose={handleCloseModal}>
            <ModalAuth />
         </Modal>
         <Modal isOpenModal={savedModal} onClose={handleCloseModal}>
            <ModalSave />
         </Modal>
      </div>
   );
}

export default Header;
