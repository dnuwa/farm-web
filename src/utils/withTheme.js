import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Colors, Metrics } from 'utils/theme';
import { ThemeProvider } from 'styled-components';

const THEMES = {
  portal: {
    colors: Colors,
    metrics: Metrics,
  },
};

const withTheme = theme => Component => {
  let thx =
    typeof theme === 'string'
      ? THEMES[theme]
      : {
          ...theme,
        };

  return forwardRef(({ children, ...props }, ref) => {
    return (
      <ThemeProvider theme={thx}>
        <Component ref={ref} {...props}>
          {children}
        </Component>
      </ThemeProvider>
    );
  });
};

withTheme.propTypes = {
  theme: PropTypes.oneOfType([
    PropTypes.oneOf([...Object.keys(THEMES)]),
    PropTypes.shape({
      colors: PropTypes.object,
      metrics: PropTypes.object,
    }),
  ]),
};

export default withTheme;
