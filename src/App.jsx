import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/home';
import ErrorPage from './error-page';
import Works from './pages/works';
import UniquePage from './pages/uniquePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Works /> },
      {
        path: 'unique',
        element: <UniquePage />,
      },
    ],
  },
  {
    path: 'works',
    element: <Works />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
