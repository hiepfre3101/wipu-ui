import classNames from 'classnames/bind';
import { useContext } from 'react';
import { useState } from 'react';
import { SaveIcon } from '~/assets/Icon';
import { Button } from '~/components/Button';
import { FormContext } from '~/components/Context/FormContext';
import { Modal } from '~/components/Modal';
import { Search } from '../Search';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
   const [isOpenModal, setIsOpenModal] = useState(false);
   const formContext = useContext(FormContext);
   const handleCloseModal = () => {
      formContext.resertStep();
      setIsOpenModal(false);
   };
   return (
      <div className={cx('wrapper')}>
       <div className={cx('flex-col--left')}>
            <p className={cx('label')}>Welcome!</p>
           <div className={cx('search-wrap')}><Search/></div>
       </div>
         <div className={cx('flex-col--right')}>
            <Button roundXl className={cx('auth-btn')} large onClick={() => setIsOpenModal(true)}>
               Login
            </Button>
            <Button roundXl className={cx('auth-btn')} large leftIcon={<SaveIcon />}>
               Saved
            </Button>
         </div>
            <Modal isOpenModal={isOpenModal} onClose={handleCloseModal} />
      </div>
   );
}

export default Header;
