import { useState,useEffect } from "react"

export const useCompelete =(value,time)=>{
   const [finalValue, setFinalValue] = useState(value);
   useEffect (()=>{
     const handler = setTimeout(()=>setFinalValue(value),time);
     return ()=>clearTimeout(handler);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[value])
   return finalValue;
}