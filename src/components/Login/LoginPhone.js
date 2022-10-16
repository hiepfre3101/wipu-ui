import { useContext } from 'react';
import classNames from 'classnames/bind';

import { SelectIcon } from '~/assets/Icon';
import styles from './Login.module.scss';
import { FormContext } from '../Context/FormContext';
import { Button } from '../Button';

const cx = classNames.bind(styles);
function LoginPhone() {
   const formContext = useContext(FormContext);
   return (
      <form action="" className={cx('form-wrapper')}>
         <div className={cx('label-block')}>
            <label>Phone</label>
            <label className={cx('other-login')}>Log in with email</label>
         </div>
         <div className={cx('form-group')}>
            <div className={cx('select-input')}>
               <p className={cx('select-value')}>VN +84</p>
               <SelectIcon classname={cx('select-icon')} />
            </div>
            <input type="text" className={cx('form-control')} placeholder="Phone number" />
         </div>
         <div className={cx('form-group')}>
            <input type="text" placeholder="Enter your code" className={cx('form-control')} />
            <Button small disabled className={'btn-sendcode'}>
               Send Code
            </Button>
         </div>
         <div className={cx('form-control')}>
            <label className={cx('other-login')}>Log in with password</label>
         </div>
         <Button large roundM className={'submit-btn'}>
            Log in{' '}
         </Button>
      </form>
   );
}

export default LoginPhone;
