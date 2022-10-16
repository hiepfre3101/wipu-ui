import classNames from 'classnames/bind';

import styles from './Modal.module.scss';
const cx = classNames.bind(styles);
function ModalItem({ label, element }) {
   return (
      <div className={cx('wrap-outer')}>
         <h2 className={cx('label')}>{label}</h2>
         <div className={cx('btn-block')}>
            {element}
         </div>
         <footer className={cx('footer')}>
            <div className={cx('footer-block')}>
               <p className={cx('footer-title')}>Don't have account? </p>
               <p className={cx('footer-btn')}>Sign up</p>
            </div>
         </footer>
      </div>
   );
}

export default ModalItem;
