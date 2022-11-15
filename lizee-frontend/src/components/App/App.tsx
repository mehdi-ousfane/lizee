import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
  useLoaderData,
} from 'react-router-dom';

import PATH from '../../constants/paths';
import { ProductsRequestData } from '../../types/Products';
import Background from '../atoms/Background/Background';
import Header from '../molecules/Header/Header';
import HomePage from '../pages/HomePage/HomePage';
import ProductPage from '../pages/ProductPage/ProductPage';
import styles from './App.module.css';

const AppLayout = () => (
  <>
    <Header />
    <Background>
      <main className={styles.mainStyle}>
        <Outlet />
      </main>
    </Background>
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={PATH.HOME} replace />,
  },
  {
    path: '/lizee',
    element: <Navigate to={PATH.HOME} replace />,
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: PATH.HOME,
        element: (
          <HomePage dataLoader={useLoaderData as () => ProductsRequestData} />
        ),
        loader: async () => {
          // write function in another file to make a custom hook
          // and add abort after getting the data inside
          let abortController = new AbortController();
          let { signal } = abortController;
          return fetch(
            `https://lizee-test-dad-nextjs-admin.lizee.io/shop-api/taxon-products/by-slug/categorie-t-shirts?${new URLSearchParams(
              { limit: '6', page: '1' },
            )}`,
            { signal },
          )
            .then((res) => {
              if (res.ok) {
                return res.json();
              }
              throw res;
            })
            .then((data) => {
              return data;
            })
            .catch((err) => {
              if (err.name === 'AbortError') {
                console.log(err);
              }
              console.log('ca marche po!', err);
            });
        },
        errorElement: <div>error</div>,
      },
      {
        path: `${PATH.PRODUCTS}`,
        element: (
          <ProductPage
            dataLoader={useLoaderData as () => ProductsRequestData}
          />
        ),
        loader: async () => {
          // write function in another file to make a custom hook
          // and add abort after getting the data inside
          let abortController = new AbortController();
          let { signal } = abortController;
          return fetch(
            `https://lizee-test-dad-nextjs-admin.lizee.io/shop-api/taxon-products/by-slug/categorie-t-shirts?${new URLSearchParams(
              { limit: '6', page: '1' },
            )}`,
            { signal },
          )
            .then((res) => {
              if (res.ok) {
                return res.json();
              }
              throw res;
            })
            .then((data) => {
              return data;
            })
            .catch((err) => {
              if (err.name === 'AbortError') {
                console.log(err);
              }
              console.log('ca marche po!', err);
            });
        },
        errorElement: <div>error</div>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
