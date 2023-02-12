import classNames from 'classnames/bind';
import { useContext, useEffect } from 'react';

import styles from './Login.module.scss';
import { Button } from '../Button';
import { FormContext } from '../Context/FormContext';
import withValidate from '../../HOCs/withValidate';
import PwdInput from './PwdInput';

const cx = classNames.bind(styles);
function LoginPhone({ props }) {
   const formContext = useContext(FormContext);
   useEffect(() => {
      const initData = { phoneNumber: '', password: '' };
      props?.reciveData(initData);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [formContext.status]);
   return (
      <form action="" className={cx('form-wrapper')} onSubmit={props?.handleSubmit}>
         <div className={cx('label-block')}>
            <label>Phone</label>
            <label onClick={() => formContext.handleChangeForm('email-login')} className={cx('other-login')}>
               Use email
            </label>
         </div>
         <div className={cx('form-group', props.errors?.phoneNumber && { borderRed: 'border-red' })}>
            <article className={cx('input-group')}>
               <p className={cx('select-input')}>VN +84</p>
               <input
                  name="phoneNumber"
                  type="text"
                  className={cx('form-control')}
                  placeholder="Phone number"
                  value={props.dataSubmit?.phoneNumber || ''}
                  pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"
                  onChange={props.handleOnChange}
                  onBlur={props.handleValidate}
                  onInput={props.handleOnInput}
               />
            </article>
            {props.errors.phoneNumber && <p className={cx('ivalid')}>Enter valid phone number</p>}
         </div>
         <div className={cx('form-group', props.errors?.password && { borderRed: 'border-red' })}>
            <PwdInput props={props} />
         </div>
         <ul className={cx('notice-block')}>
            <p className={cx('notice-title', props.errors?.password && { ivalid: 'ivalid' })}>
               Your password must have:
            </p>
            <li className={cx('notice-desc', props.errors?.password && { ivalid: 'ivalid' })}>6-10 characters</li>
            <li className={cx('notice-desc', props.errors?.password && { ivalid: 'ivalid' })}>
               Letters, numbers and special characters
            </li>
         </ul>
         <Button disabled={!props.checkDataSubmit()} large roundM className={cx('submit-btn')}>
            {formContext.status ? 'Login' : 'Sign up'}
         </Button>
      </form>
   );
}
const LoginPhoneValidate = withValidate(LoginPhone);
export default LoginPhoneValidate;
