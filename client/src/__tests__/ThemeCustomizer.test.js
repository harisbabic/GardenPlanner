import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import ThemeCustomizer from '../theme/ThemeCustomizer';
import Header from '../components/Header';
import store from '../redux/store';
import mockTheme from '../theme/mockTheme';
global.TextEncoder = require('util').TextEncoder;

test('updates theme dynamically', () => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={mockTheme}>
        <ThemeCustomizer />
        <Header />
      </ThemeProvider>
    </Provider>
  );
});
