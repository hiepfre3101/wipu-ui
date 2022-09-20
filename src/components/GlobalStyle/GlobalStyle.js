import React from 'react';

import './GlobalStyle.module.scss';

function GlobalStyle({ children }) {
   return React.Children.only(children);
}

export default GlobalStyle;
