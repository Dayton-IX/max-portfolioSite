import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Stats from './Stats/Stats';
// import CountrySelector from '../components/CountrySelector';
import Layout from './Layout/Layout';
// import Instructions from '../components/Instructions/Instructions';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #3498db;
    color: #212f3c;
    scrollbar-width: thin;
    text-align: center;
  }
`;

const COVID = (props) => (
    <div>
      <GlobalStyle />
      <Layout>
        {/* <h2>Global Statistics:</h2> */}
        <Stats url="https://covid19.mathdro.id/api"></Stats>
        {/* <h2>United States Statistics:</h2> */}
        <Stats url="https://covid19.mathdro.id/api/countries/usa"></Stats>
        {/* <Instructions /> */}
      </Layout>
    </div>
);

export default COVID;