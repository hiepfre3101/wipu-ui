import { useState } from 'react';

function useMultipleStepForm(steps = []) {
   const [currentIndex, setCurrentIndex] = useState(0);
   function prev() {
      if (currentIndex === 0) {
         setCurrentIndex(steps.length - 1);
      }
      setCurrentIndex((prevIndex) => prevIndex - 1);
   }

   function goTo(index) {
      setCurrentIndex(index);
   }
   return {
      currentIndex,
      currentStep: steps[currentIndex],
      prev,
      goTo,
   };
}

export default useMultipleStepForm;
