import classNames from 'classnames/bind';

import styles from './Episodes.module.scss';
import Loading from "~/components/Loading/Loading";


const cx = classNames.bind(styles);
function Episodes({ data }) {
   if(Array.isArray(data)){
       return (
      <div >
       
      </div>
   );
   }
  else{
   return <Loading/>;
  }
}

export default Episodes;
