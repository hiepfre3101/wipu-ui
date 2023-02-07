import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '~/App';
import { AnimeIdProvider } from './components/Context/AnimeIdContext';
import GlobalStyle from './components/GlobalStyle/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <GlobalStyle>
         <AnimeIdProvider>
            <App />
         </AnimeIdProvider>
      </GlobalStyle>
);
