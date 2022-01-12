import React, { Fragment, useContext, useRef, useEffect, createContext } from 'react';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Head from 'next/head';
import store from '../redux/store';

import GlobalStyle from 'utils/global-styles';

import 'sanitize.css/sanitize.css';
import 'utils/theme/btsp/bootstrap-grid.min.css';

// import 'components/Slider/carousel/style.css';

const GlobalStyles = GlobalStyle();

// Layouts
import DefaultLayout from 'containers/Layouts/default';
import PlannerLayout from 'containers/Layouts/planner';
import SellLayout from 'containers/Layouts/sell';

let layoutMap = {
  default: DefaultLayout,
  planner: PlannerLayout,
  sell: SellLayout,
};

const App = ({ Component, pageProps }) => {
  const Layout = layoutMap[Component.layout ? Component.layout : 'default'];

  let persistor = persistStore(store);

  return (
    <React.StrictMode>
      <Head>
        <title>Famunera</title>
        <link rel="icon" href="/static/favicon/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans+Condensed:wght@100;400;600;700&family=IBM+Plex+Sans:wght@300;400;500;700&family=Roboto+Condensed:wght@100;200;300;400;500;700&family=Roboto:wght@100;200;300;400;500;700&display=swap"
          rel="stylesheet"></link>
      </Head>
      <GlobalStyles />

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CookiesProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CookiesProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default App;
