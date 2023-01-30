import { createContext } from 'react';
import { useState } from 'react';

import LoginPhone from '../Auth/LoginPhone';
import LoginDefault from '~/components/Auth/LoginDefault';

const FormContext = createContext();
const forms = [
   {
      type: 'default',
      labelLogin: 'Log in to Wipu',
      labelSignup: 'Sign up for Wipu',
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
      element: <h1>Email</h1>,
   },
];
function FormContextProvider({ children }) {
   const [historySteps, setHistorySteps] = useState([forms[0]]);
   const [status, setStatus] = useState(true); //status : true=login, false=signup
   const currentStep = historySteps[historySteps.length - 1];
   const handleChangeForm = (type) => {
      const tab = forms.filter((item) => {
         return item.type === type;
      });
      setHistorySteps((prev) => [...prev, ...tab]);
   };
   const resertStep = () => {
      setHistorySteps([forms[0]]);
   };
   const handleBack = () => {
      setHistorySteps([forms[0]]);
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
