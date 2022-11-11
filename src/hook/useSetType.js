import { useState } from 'react';

function useSetType() {
   const [type, setType] = useState('videos');
   const handleChangeTab = (tab) => {
      setType(tab);
   };

   const exports = { type, handleChangeTab };

   return exports;
}

export default useSetType;
