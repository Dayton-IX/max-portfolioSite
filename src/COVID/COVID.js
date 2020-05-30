import React from 'react';
import Stats from './Stats/Stats';
// import CountrySelector from '../components/CountrySelector';
import Layout from './Layout/Layout';
import classes from './COVID.module.css';
// import Instructions from '../components/Instructions/Instructions';

const COVID = (props) => (
    <div className={classes.COVID}>
      <Layout>
        {/* <h2>Global Statistics:</h2> */}
        <Stats url="https://covid19.mathdro.id/api" title="Global Statistics"></Stats>
        {/* <h2>United States Statistics:</h2> */}
        <Stats url="https://covid19.mathdro.id/api/countries/usa" title="United States Statistics"></Stats>
        {/* <Instructions /> */}
      </Layout>
    </div>
);

export default COVID;