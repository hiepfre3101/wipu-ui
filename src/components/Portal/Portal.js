import { useEffect } from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// @param : target : string -> use to custom portal, if you want to create portal in a HTML element with id or className
function Portal({ children, target }) {
   const [root, setRoot] = useState();
   useEffect(() => {
      let portalRoot = document.querySelector(target);
      if (!portalRoot) {
         portalRoot = document.createElement('div');
         document.body.appendChild(portalRoot);
      }
      setRoot(portalRoot);
      return () => {
         if (!target) {
            document.body.removeChild(portalRoot);
         }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [target]);

   if (!root) {
      return null;
   }
   return ReactDOM.createPortal(children, root);
}
Portal.propTypes = {
   children: PropTypes.node,
   target: PropTypes.string,
};
export default Portal;
