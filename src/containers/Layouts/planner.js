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
  { id: 1, label: 'Profile', to: '/profile' },
  { id: 2, label: 'Wallet', to: '/wallet' },
  { id: 3, label: 'Planner', to: '/planner' },
  { id: 4, label: 'My Orders', to: '/my-orders' },
  // { id: 5, label: 'My Quotations', to: '/my-quotations' },
  { id: 6, label: 'My Documents', to: '/my-documents' },
  { id: 7, label: 'Change Password', to: '/change-password' },
];

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <ToastProvider>
      <SiteMaster>
        <Header />
        <SiteContent>
          <SideBar>
            {lables.map(({label, to, id}) => (
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
