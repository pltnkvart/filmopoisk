import { Provider } from 'react-redux';
import { store } from '~/store/store';
import { router } from './router/router';
import { RouterProvider } from 'react-router-dom';
import { Layout } from '~/components/Layout/Layout';
import React from 'react';

export const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </Provider>
    </React.StrictMode>
  );
};
