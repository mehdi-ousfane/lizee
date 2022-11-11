import * as React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import PATH from '../../constants/paths';

const params = {
  limit: 6,
  page: 1,
};
const options = {
  body: JSON.stringify(params),
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/lizee/accueil" replace />,
  },
  {
    path: '/lizee',
    element: <Navigate to="/lizee/accueil" replace />,
  },
  {
    path: '/lizee/accueil',
    element: <div>homepage</div>,
    loader: async () => {
      return fetch(
        `https://lizee-test-dad-nextjs-admin.lizee.io/shop-api/taxon-products/by-slug/categorie-t-shirts?${new URLSearchParams(
          { limit: '6', page: '1' },
        )}`,
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then((data) => console.log(data))
        .catch((err) => console.log('ca marche po!', err));
    },
    errorElement: <div>error</div>,
  },
  {
    path: '/lizee/produits',
    element: <div>productspage</div>,
    loader: async ({ request, params }) => {
      return fetch(`/fake/api/teams/${params.teamId}.json`, {
        signal: request.signal,
      });
    },
    errorElement: <div>error</div>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
