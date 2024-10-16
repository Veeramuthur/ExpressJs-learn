// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RecoilRoot } from 'recoil';

// Render the React app and wrap it with RecoilRoot for state management
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')  // Renders the app into the <div id="root"></div> in public/index.html
);
