import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";


const withContent=(WrappedComponent,selectRequest,props)=> {
  function CalledApiComp(){
     const [data,setData ] = useState([]);
    const [loading , setLoading] = useState(true);
    useEffect(()=>{
      const fetchApi = async ()=>{
        const dataApi = await selectRequest.getRequest(props);
        setData(dataApi);
        setLoading(false);
      }
      fetchApi();
    },[])

    if(loading){
        return <Loading/>
    }else{
     return <WrappedComponent data={data}/>
    }
  }
   return CalledApiComp;
}

export default withContent;