import { createContext } from 'react';
import { useState } from 'react';

import { useMultipleStepForm } from '~/hook';
import { MULTI_FORM } from '../Modal/Modal';
import LoginDefault from '~/components/Login/LoginDefault';

const FormContext = createContext();
function FormContextProvider({ children }) {
   const multiForm = useMultipleStepForm(MULTI_FORM);
   const [historySteps, setHistorySteps] = useState([{ label: 'Log in to Wipu', element: <LoginDefault /> }]);
   const currentStep = historySteps[historySteps.length - 1];
   const handleChangeForm = (stepIndex) => {
      multiForm.goTo(stepIndex);
      setHistorySteps((prev) => [...prev, multiForm.currentStep]);
   };
   const handleBack = () => {
      setHistorySteps((prev) => prev.slice(0, prev.length - 1));
   };

   const value = {
      historySteps,
      currentStep,
      handleBack,
      handleChangeForm,
   };
   return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export { FormContextProvider, FormContext };
