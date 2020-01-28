import React, { Suspense } from 'react';
import { render } from 'react-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';

import Screen from './screens';
import ErrorBoundary from './components/did-catch';

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api'
});

const Loading = () => <div>Loading...</div>

const App = (
  <ApolloProvider client={client}>
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <Screen />
      </ErrorBoundary>
    </Suspense>
  </ApolloProvider>
);

render(App, document.getElementById('root'));
