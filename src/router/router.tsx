import { createBrowserRouter } from 'react-router-dom';

import App from '../components/App/App';
import Homepage from '../pages/Homepage/Homepage';

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
    ],
  },
]);

export default router;
