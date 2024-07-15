import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from '~/store/store';
import { router } from '~/pages/router';
import { Layout } from '~/components/Layout/Layout';

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
