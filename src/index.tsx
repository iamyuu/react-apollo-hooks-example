import React from 'react';
import { render } from 'react-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';

import Screen from './screens';
import ErrorBoundary from './components/did-catch';

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api'
});

const App = (
  <ApolloProvider client={client}>
    <ErrorBoundary>
      <Screen />
    </ErrorBoundary>
  </ApolloProvider>
);

render(App, document.getElementById('root'));
