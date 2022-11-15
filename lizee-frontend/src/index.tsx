import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';

import 'react-calendar/dist/Calendar.css';

const container = document.getElementById('root');
const root = createRoot(container!);

// An optional check for the window to guarantee
// a better handle of possible refreshing user token
if (window.self === window.top) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
