import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import './language/i18n.ts';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { Global } from 'style/style';
import { ApolloProvider } from '@apollo/client';
import { client } from 'apollo';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Global />
          <App />
        </Provider>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
