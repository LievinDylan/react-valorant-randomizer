import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '../components/App/App';
import Homepage from '../pages/Homepage/Homepage';
import Solo from '../pages/Solo/Solo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not found</div>,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/solo',
        element: <Solo />,
      },
    ],
  },
]);

export default router;
