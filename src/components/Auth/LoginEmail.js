import { useContext, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import { Button } from '../Button';
import { FormContext } from '../Context/FormContext';
import withValidate from '../../HOCs/withValidate';
import PwdInput from './PwdInput';

const cx = classNames.bind(styles);
const LoginEmail = ({ props }) => {
   const formContext = useContext(FormContext);
   useEffect(() => {
      const initData = { email: '', password: '' };
      props?.reciveData(initData);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [formContext.status]);
   return (
      <form action="" className={cx('form-wrapper')} onSubmit={props.handleSubmit}>
         <div className={cx('label-block')}>
            <label>Email</label>
            <label onClick={() => formContext.handleChangeForm('phone-login')} className={cx('other-login')}>
               Use phone
            </label>
         </div>
         <div className={cx('form-group', props.errors?.email && { borderRed: 'border-red' })}>
            <input
               name="email"
               className={cx('form-control')}
               placeholder="Email address"
               value={props.dataSubmit?.email || ''}
               pattern="^\w(\.?[\w+])*@\w(\.?[\w+])*\.[a-z]{2,4}$"
               onChange={props.handleOnChange}
               onBlur={props.handleValidate}
               onInput={props.handleOnInput}
            />
            {props.errors?.email && <p className={cx('ivalid')}>Enter valid email address</p>}
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
         <Button disabled={!props?.checkDataSubmit()} large roundM className={cx('submit-btn')}>
            {formContext.status ? 'Login' : 'Sign up'}
         </Button>
      </form>
   );
};
const LoginEmailValidate = withValidate(LoginEmail);
export default LoginEmailValidate;
