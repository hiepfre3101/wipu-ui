import { useState } from 'react';

function useSetType() {
   const [type, setType] = useState('episodes');
   const [page, setPage] = useState(1);
   const handleChangeTab = (tab) => {
      setType(tab);
   };

   const handleChangePage = (page) => {
      setPage(page);
   };
   const exports = { type, handleChangeTab, handleChangePage, page };

   return exports;
}

export default useSetType;
