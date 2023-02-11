import classNames from 'classnames/bind';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';

import { BarIcon, SaveIcon, HomeIcon, StonkeIcon, GenreIcon } from '~/assets/Icon';
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
   const [isOpenMenu, setIsOpenMenu] = useState(false);
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

   //Tippy block for responsive
   return (
      <div className={cx('wrapper')}>
         <div className={cx('flex-col--left')}>
            <p className={cx('label')}>Welcome!</p>
            <Tippy
               visible={isOpenMenu}
               interactive
               zIndex={9999}
               onClickOutside={() => {
                  setIsOpenMenu(false);
               }}
               render={(atr) => (
                  <div {...atr} tabIndex="99" className={cx('nav-aside')}>
                     <Button roundM leftIcon={<HomeIcon />} className={cx('nav-btn')} primary nonBg to={'/'} onClick={()=>setIsOpenMenu(false)}>
                        Home
                     </Button>
                     <Button roundM leftIcon={<StonkeIcon />} className={cx('nav-btn')} primary nonBg to={'/popular'} onClick={()=>setIsOpenMenu(false)}>
                        Popular
                        <svg width={24} height={24} className={cx('animate')}>
                           <circle cx={12} cy={12} r={12} fill={'#99f6e4'}></circle>
                        </svg>
                     </Button>
                     <Button roundM leftIcon={<GenreIcon />} className={cx('nav-btn')} primary nonBg to={'/genre'} onClick={()=>setIsOpenMenu(false)}>
                        Genre
                     </Button>
                     <Button
                        onClick={() => setIsOpenModal(true)}
                        roundM
                        className={cx('nav-btn',{forMediumSize:'forMediumSize'})}
                        primary
                        nonBg
                     >
                        Login
                     </Button>
                     <Button
                        onClick={() => setSavedModal(true)}
                        roundM
                        className={cx('nav-btn',{forMediumSize:'forMediumSize'})}
                        primary
                        nonBg
                     >
                        Saved
                     </Button>
                  </div>
               )}
            >
               <div>
                  <Button onClick={() => setIsOpenMenu(!isOpenMenu)} className={cx('btn-show-menu')} primary roundXl>
                     <BarIcon />
                  </Button>
               </div>
            </Tippy>
            <div className={cx('search-wrap')}>
               <Search />
            </div>
         </div>
         <div className={cx('flex-col--right')}>
            <Button roundXl className={cx('auth-btn')} large onClick={() => setIsOpenModal(true)}>
               <span className={cx('auth-desc')}>Login</span>
            </Button>
            <Button
               roundXl
               className={cx('auth-btn')}
               large
               leftIcon={<SaveIcon />}
               onClick={() => setSavedModal(true)}
            >
               <span className={cx('auth-desc')}>Saved</span>
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
