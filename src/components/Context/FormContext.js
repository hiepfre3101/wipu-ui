import { createContext } from 'react';
import { useState } from 'react';

import LoginPhone from '../Auth/LoginPhone';
import LoginDefault from '~/components/Auth/LoginDefault';
import LoginEmail from '../Auth/LoginEmail';

const FormContext = createContext();
const forms = [
   {
      type: 'default',
      labelLogin: 'Log in to EE',
      labelSignup: 'Sign up for EE',
      element: <LoginDefault />,
   },
   {
      type: 'phone-login',
      labelLogin: 'Log in',
      labelSignup: 'Sign up',
      element: <LoginPhone />,
   },
   {
      type: 'email-login',
      labelLogin: 'Log in ',
      labelSignup: 'Sign up',
      element: <LoginEmail />,
   },
];
function FormContextProvider({ children }) {
   const [historySteps, setHistorySteps] = useState([forms.find((form) => form.type === 'default')]);
   const [status, setStatus] = useState(true); //status : true=login, false=signup
   const currentStep = historySteps[historySteps.length - 1];
   const handleChangeForm = (type) => {
      const tab = forms.filter((item) => {
         return item.type === type;
      });
      setHistorySteps((prev) => [...prev, ...tab]);
   };
   const resertStep = () => {
      setStatus(true);
      setHistorySteps([forms.find((form) => form.type === 'default')]);
   };
   const handleBack = () => {
      setHistorySteps([forms.find((form) => form.type === 'default')]);
   };
   const changeStatus = () => {
      setStatus(!status);
   };
   const value = {
      status,
      changeStatus,
      historySteps,
      currentStep,
      handleBack,
      handleChangeForm,
      resertStep,
   };
   return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
export { FormContextProvider, FormContext };
