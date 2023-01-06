import { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import PropTypes from 'prop-types';
//take 1 comp...
const withContent = (WrappedComponent, selectRequest, hasPage,props) => {
   //and return this component above.
   function CalledApiComp() {
      const [data, setData] = useState([]);
      const [page, setPage] = useState(1);
      const [loading, setLoading] = useState(true);
      useEffect(() => {
         const fetchApi = async () => {
            const dataApiCalled = await selectRequest.getRequest(page,...props);
            setData(dataApiCalled);
            setLoading(false);
         };
         fetchApi();
         // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [page]);
      const handleNext = () => {
         setPage(page + 1);
      };
      const handlePrev = () => {
         setPage(page - 1);
      };
      const passProps = {
         page,
         hasPage,
         handleNext,
         handlePrev,
      };
      if (loading) {
         return <Loading />;
      } else {
         return <WrappedComponent data={data} {...passProps} />;
      }
   }
   return CalledApiComp;
};

withContent.propTypes = {
   WrappedComponent: PropTypes.element.isRequired,
   hasPage: PropTypes.bool,
   selectRequest: PropTypes.object.isRequired,
   props: PropTypes.array,
};
export default withContent;
