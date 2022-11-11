import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

// An optional check for the window to guarantee
// a better handle of possible refreshing user token
if (window.self === window.top) {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
