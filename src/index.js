import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink, createHttpLink } from '@apollo/client';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  // uri: 'https://flyby-gateway.herokuapp.com/',
  // uri: '',
  link: new createHttpLink({
    uri: 'https://magentopractice.m2dev.invanos.net/kagento/graphql',
    // uri: 'https://flyby-gateway.herokuapp.com/',
    fetchOptions: {
      'Accept-Control-Allow-Origin': "*"
    }
  }),
  cache: new InMemoryCache(),
  // fetchOptions: {
  //   mode: 'no-cors'
  // }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
