import Loading from "~/components/Loading/Loading";

function News({ data }) {
   if(Array.isArray(data.data)){
      return (
     <div>
        News
        {data.data.map((item, index) => (
           <li key={index}>{item.title}</li>
        ))}
     </div>
  );
  }
 else{
  return <Loading/>;
 }
}

export default News;
