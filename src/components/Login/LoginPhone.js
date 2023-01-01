import classNames from 'classnames/bind';
import { useContext } from 'react';

import { SelectIcon } from '~/assets/Icon';
import styles from './Login.module.scss';
import { Button } from '../Button';
import { FormContext } from '../Context/FormContext';
import { useState, useRef } from 'react';
const cx = classNames.bind(styles);

function LoginPhone() {
   const formContext = useContext(FormContext);
   const [phoneValue, setPhoneValue] = useState('');
   const [idValue, setIdValue] = useState('');
   const formMessageRef = useRef();
   const handleValidatePhone = (e, areaCode) => {
      const regexPhone = `(${areaCode}|0[3|5|7|8|9])+([0-9]{8})`;
      const re = new RegExp(regexPhone, 'g');
      re.test(e.target.value)
         ? (formMessageRef.current.innerText = '')
         : (formMessageRef.current.innerText = 'Invalid phone number');
      if (formMessageRef.current.innerText) {
         formMessageRef.current.parentNode.style.border = '1px solid red';
      }
   };
   const handlePhoneInput = (e) => {
      formMessageRef.current.parentNode.style.border = 'none';
      formMessageRef.current.innerText = '';
      setPhoneValue(e.target.value);
   };
   const handleCodeInput = (e) => {
      setIdValue(e.target.value);
   };
   return (
      <form action="" className={cx('form-wrapper')}>
         <div className={cx('label-block')}>
            <label>Phone</label>
            <label onClick={() => formContext.handleChangeForm('email')} className={cx('other-login')}>
               Log in with email
            </label>
         </div>
         <div className={cx('form-group')}>
            <article className={cx('input-group')}>
               <div className={cx('select-input')}>
                  <p className={cx('select-value')}>VN +84</p>
                  <SelectIcon classname={cx('select-icon')} />
               </div>
               <input
                  type="text"
                  className={cx('form-control')}
                  placeholder="Phone number"
                  value={phoneValue}
                  onChange={handlePhoneInput}
                  onBlur={(e) => handleValidatePhone(e, '84')}
               />
            </article>
            <p className={cx('ivalid')} ref={formMessageRef}></p>
         </div>
         <div className={cx('form-group')}>
            <article className={cx('input-group')}>
               <input
                  type="text"
                  placeholder="Enter your code"
                  className={cx('form-control')}
                  onChange={handleCodeInput}
               />
               <Button small disabled={!phoneValue} className={cx('btn-sendcode')}>
                  Send Code
               </Button>
            </article>
         </div>
         <div className={cx('form-control')}>
            <label className={cx('other-login')}>Log in with password</label>
         </div>
         <Button
            disabled={!phoneValue || !idValue || formMessageRef.current.innerText}
            large
            roundM
            className={cx('submit-btn')}
         >
            Log in
         </Button>
      </form>
   );
}

export default LoginPhone;
