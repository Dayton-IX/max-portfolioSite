import React from 'react';
import useStats from '../useStats';
import classes from './Stats.module.css';

const Stats = (props) => {
    const { stats, loading, error } = useStats(props.url);
    console.log(stats, loading, error);
    return (
        <div className={classes.Stats} >
            <h2>{props.title}</h2>
            <h3>Confirmed Cases:</h3>
            {loading ? <p>Loading...</p> : error ? <p>There Was an Error getting this data, please try again...</p> : <span>{stats.confirmed.value}</span>}
            <h3>Deaths:</h3>
            {loading ? <p>Loading...</p> : error ? <p>There Was an Error getting this data, please try again...</p> : <span>{stats.deaths.value}</span>}
            <h3>Recovered:</h3>
            {loading ? <p>Loading...</p> : error ? <p>There Was an Error getting this data, please try again...</p> : <span>{stats.recovered.value}</span>}
        </div>
    )
};

export default Stats;