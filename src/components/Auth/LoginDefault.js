import { useContext } from 'react';
import classNames from 'classnames/bind';

import { Button } from '../Button';
import { FacebookIcon, GoogleIcon, UserIcon } from '~/assets/Icon';
import { FormContext } from '../Context/FormContext';
import styles from './Login.module.scss';
const cx = classNames.bind(styles);
const loginOptions = [
   {
      type: 'facebook',
      title: 'Continue with Facebook',
      icon: <FacebookIcon />,
   },
   {
      type: 'google',
      title: 'Continue with Google',
      icon: <GoogleIcon />,
   },
   {
      type: 'phone-login',
      title: 'Continue with phone or email',
      icon: <UserIcon />,
      onClick: true,
   },
];
function LoginDefault() {
   const formContext = useContext(FormContext);
   return loginOptions.map((item, index) => {
      if (!item.onClick) {
         return (
            <Button key={index} leftIcon={item.icon} large className={cx('btn-login')} disabled>
               <p className={cx('label')}>{item.title}</p>
            </Button>
         );
      } else {
         return (
            <Button
               key={index}
               leftIcon={item.icon}
               large
               className={cx('btn-login')}
               onClick={() => formContext.handleChangeForm(item.type)}
            >
             <p className={cx('label')}>{item.title}</p>
            </Button>
         );
      }
   });
}

export default LoginDefault;
