import { useEffect, useState } from 'react';
import React from 'react';
import Loading from '../Loading/Loading';
import PropTypes from 'prop-types';
import ErrorPage from '../404Page/ErrorPage';
//take 1 comp...
const withContent = (WrappedComponent, selectRequest, hasPage, option, label, path) => {
   //and return this component above.
   console.log(option);
   function CalledApiComp() {
      const [data, setData] = useState();
      const [page, setPage] = useState(1);
      const [loading, setLoading] = useState(true);
      useEffect(() => {
         const fetchApi = async () => {
            const dataApiCalled = await selectRequest.getRequest(hasPage ? page : path, ...option);
            setData(dataApiCalled);
            setLoading(false);
         };
         fetchApi();
         // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [page, option]);
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
         label,
      };
      if (loading) {
         return <Loading />;
      } else if (data.error || !data || data.message) {
         return <ErrorPage />;
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
   option: PropTypes.array,
   label: PropTypes.string,
   path: PropTypes.string,
};
export default withContent;
