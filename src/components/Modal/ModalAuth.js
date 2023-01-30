import classNames from 'classnames/bind';
import { useContext } from 'react';

import { FormContext } from '../Context/FormContext';
import styles from './Modal.module.scss';
const cx = classNames.bind(styles);
function ModalAuth() {
   const formContext = useContext(FormContext);
   return (
      <div className={cx('wrap-outer')}>
         <article className={cx('body-login')}>
            <h2 className={cx('label')}>
               {formContext.status ? formContext.currentStep.labelLogin : formContext.currentStep.labelSignup}
            </h2>
            <div className={cx('btn-block')}>{formContext.currentStep.element}</div>
         </article>
         <footer className={cx('footer')}>
            <div className={cx('footer-block')}>
               <p className={cx('footer-title')}>
                  {formContext.status ? "Don't have account?" : 'Already have account ?'}
               </p>
               <p className={cx('footer-btn')} onClick={() => formContext.changeStatus()}>
                  {formContext.status ? 'Sign up' : 'Log in'}
               </p>
            </div>
         </footer>
      </div>
   );
}

export default ModalAuth;
