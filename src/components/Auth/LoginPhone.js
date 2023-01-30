import classNames from 'classnames/bind';
import { useContext } from 'react';

import { SelectIcon } from '~/assets/Icon';
import styles from './Login.module.scss';
import { Button } from '../Button';
import { FormContext } from '../Context/FormContext';
import { useState } from 'react';

const cx = classNames.bind(styles);
//pattern: String of regex, delete pair of '//' in regex.
const validate = (initData, name, value, pattern) => {
   const regex = new RegExp(pattern, 'g');
   let errors = { ...initData };
   if (!regex.test(value)) {
      errors[name] = `Incorrect`;
   } else {
      errors[name] = '';
   }
   return errors;
};
function LoginPhone() {
   const times = [
      {
         type: 'Month',
         data: [],
      },
      {
         type: 'Date',
         data: [],
      },
      {
         type: 'Year',
         data: [],
      },
   ];
   const formContext = useContext(FormContext);
   const initFormData = { phoneNumber: '', codeDigit: '' };
   const [dataSubmit, setDataSubmit] = useState(initFormData);
   const [errors, setErrors] = useState(initFormData);
   const handleOnChange = (e) => {
      const { name, value } = e.target;
      setDataSubmit((data) => ({ ...data, [name]: value }));
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(dataSubmit);
   };
   const handleValidate = (e) => {
      const errorList = validate(errors, e.target.name, e.target.value, e.target.pattern);
      setErrors(errorList);
   };
   const handleOnInput = (e) => {
      setErrors({ ...errors, [e.target.name]: '' });
   };
   const checkDataSubmit = () => {
      for (const data of Object.values(dataSubmit)) {
         if (data === '') return false;
      }
      return true;
   };
   return (
      <form action="" className={cx('form-wrapper')} onSubmit={handleSubmit}>
           {!formContext.status  && (
               <div className={cx('date-block')}>
                  <label>When's your birth day?</label>
                  <div className={cx('form-date')}>
                     {times.map((time, index) => (
                        <Button key={index} className={cx('date-control')} primary rightIcon={<SelectIcon/>} roundM>
                            <p className={cx('date-title')}>{time.type}</p>
                        </Button>
                     ))}
                  </div>
               </div>
            )}
         <div className={cx('label-block')}>
            <label>Phone</label>
            <label onClick={() => formContext.handleChangeForm('email-login')} className={cx('other-login')}>
               Use email
            </label>
         </div>
         <div className={cx('form-group', errors.phoneNumber && { borderRed: 'border-red' })}>
            <article className={cx('input-group')}>
               <p className={cx('select-input')}>VN +84</p>
               <input
                  name="phoneNumber"
                  type="text"
                  className={cx('form-control')}
                  placeholder="Phone number"
                  value={dataSubmit.phoneNumber}
                  pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"
                  onChange={handleOnChange}
                  onBlur={handleValidate}
                  onInput={handleOnInput}
               />
            </article>
            {errors.phoneNumber && <p className={cx('ivalid')}>Enter valid phone number</p>}
         </div>
         <div className={cx('form-group', errors.codeDigit && { borderRed: 'border-red' })}>
            <article className={cx('input-group')}>
               <input
                  name="codeDigit"
                  type="text"
                  placeholder="Enter your code"
                  pattern="\d{6}"
                  className={cx('form-control')}
                  value={dataSubmit.codeDigit}
                  onChange={handleOnChange}
                  onBlur={handleValidate}
                  onInput={handleOnInput}
               />
               <Button disabled={errors.phoneNumber || !dataSubmit.phoneNumber} className={cx('btn-sendcode')}>
                  Send Code
               </Button>
            </article>
            {errors.codeDigit && <p className={cx('ivalid')}>Enter 6-digit code</p>}
         </div>
         <Button disabled={!checkDataSubmit() || errors.codeDigit} large roundM className={cx('submit-btn')}>
           {formContext.status ? 'Login' : 'Sign up'}
         </Button>
      </form>
   );
}

export default LoginPhone;
