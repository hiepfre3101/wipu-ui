import { createContext } from 'react';
import { useState } from 'react';

import LoginPhone from '../Login/LoginPhone';
import LoginDefault from '~/components/Login/LoginDefault';
import { useEffect } from 'react';

const FormContext = createContext();
const MULTI_FORM = [
   {
      type: 'login',
      label: 'Log in to Wipu',
      element: <LoginDefault />,
   },
   {
      type: 'phone',
      label: 'Log in with phone',
      element: <LoginPhone />,
   },
   {
      type: 'email',
      label: 'Log in with Email',
      element: <h1>Email</h1>,
   },
   {
      type: 'signup',
      label: 'Sign up',
      element: <h1>Sign up</h1>,
   },
];
function FormContextProvider({ children }) {
   const [historySteps, setHistorySteps] = useState([{type:'login',label: 'Log in to Wipu', element: <LoginDefault /> }]);
   const currentStep = historySteps[historySteps.length - 1];
   const handleChangeForm = (type) => {
       const tab = MULTI_FORM.filter(item=>{
             return item.type === type;
      });
      setHistorySteps((prev) => [...prev,...tab]);
   };
  const resertStep=()=>{
     setHistorySteps([{type:'login',label: 'Log in to Wipu', element: <LoginDefault /> }]);
  }
   const handleBack = () => {
      setHistorySteps((prev) => prev.slice(0, prev.length - 1));
   };

   const value = {
      historySteps,
      currentStep,
      handleBack,
      handleChangeForm,
      resertStep
   };
   return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
export { FormContextProvider, FormContext };
