import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

// componets
import { SiteContent, SiteMaster, SideBar, SideMenuItem } from 'components/Layout';

import withTheme from 'utils/withTheme';
import { ToastProvider } from 'containers/ToastNotification';
// shell
import Header from 'containers/Shell/Header';
import Footer from 'containers/Shell/Footer';

const lables = [
  { id: 0, label: 'Dashboard', to: '/dashboard' },
  { id: 1, label: 'My Products', to: '/my-products' },
  { id: 2, label: 'My Services', to: '/my-services' },
  { id: 3, label: 'Received Orders', to: '/received-orders' },
  // { id: 4, label: 'Received Quotations', to: '/received-quotations' },
  // { id: 5, label: 'Upgrade Membership', to: '/upgrade-membership' },
  // { id: 6, label: 'Subcription Payments', to: '/subcription-payments' },
  // { id: 7, label: 'Certifications & Awards', to: '/certifications-awards' },
];

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <ToastProvider>
      <SiteMaster>
        <Header />
        <SiteContent>
          <SideBar>
            {lables.map(({ label, to, id }) => (
              <Link href={`${to}`} key={id}>
                <SideMenuItem active={to !== router.route}>{label}</SideMenuItem>
              </Link>
            ))}
          </SideBar>
          {children}
        </SiteContent>
        <Footer />
      </SiteMaster>
    </ToastProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

const ComposedLayout = withTheme('portal')(Layout);

ComposedLayout.withAuth = true;

export default ComposedLayout;
