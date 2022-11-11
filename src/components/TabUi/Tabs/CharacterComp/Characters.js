import Loading from "~/components/Loading/Loading";

function Staff({ data }) {
   if(Array.isArray(data)){
      return (
     <div>
        Characters
        {data.map((item, index) => (
           <li key={index}>{item.role}</li>
        ))}
     </div>
  );
  }
 else{
  return <Loading/>;
 }
}

export default Staff;
