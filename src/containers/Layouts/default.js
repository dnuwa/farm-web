import React, { useState } from 'react';
import PropTypes from 'prop-types';

// components
import { Base, SiteMaster } from 'components/Layout';

import withTheme from 'utils/withTheme';
import { ToastProvider } from 'containers/ToastNotification';
// shell
import Header from 'containers/Shell/Header';
import Footer from 'containers/Shell/Footer';

const Layout = ({ children, ...p }) => {
  return (
    <ToastProvider>
      <SiteMaster>
        <Header />
        {children}
        <Footer />
      </SiteMaster>
    </ToastProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

const LayoutWithTheme = withTheme('portal')(Layout);

LayoutWithTheme.withAuth = true;

export default LayoutWithTheme;
