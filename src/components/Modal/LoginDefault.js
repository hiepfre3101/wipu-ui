import { useContext } from 'react';

import { Button } from '../Button';
import { FacebookIcon, GoogleIcon, UserIcon } from '~/assets/Icon';
import { FormContext } from '../Context/FormContext';
const loginOptions = [
   {
      title: 'Login with Facebook',
      icon: <FacebookIcon />,
   },
   {
      title: 'Login with Google',
      icon: <GoogleIcon />,
   },
   {
      title: 'Login with phone or email',
      icon: <UserIcon />,
      onClick: true,
   },
];
function LoginDefault() {
   const formContext = useContext(FormContext);
   return loginOptions.map((item, index) => {
      if (!item.onClick) {
         return (
            <Button key={index} leftIcon={item.icon} large className={'btn-login'}>
               {item.title}
            </Button>
         );
      } else {
         return (
            <Button
               key={index}
               leftIcon={item.icon}
               large
               className={'btn-login'}
               onClick={() => formContext.handleChangeForm(0)}
            >
               {item.title}
            </Button>
         );
      }
   });
}

export default LoginDefault;
