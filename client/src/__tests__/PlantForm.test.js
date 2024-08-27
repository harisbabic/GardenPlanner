import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import PlantForm from '../components/PlantForm';
import store from '../redux/store';
import theme from '../theme/themeConfig';

global.TextEncoder = require('util').TextEncoder;

test('renders PlantForm and submits data', () => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PlantForm onSubmit={jest.fn()} />
      </ThemeProvider>
    </Provider>
  );
});
