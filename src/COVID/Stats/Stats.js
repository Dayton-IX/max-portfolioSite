import React from 'react';
import useStats from '../../utils/useStats';
import classes from './Stats.module.css';

const Stats = (props) => {
    const { stats, loading, error } = useStats(props.url);
    console.log(stats, loading, error);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;
    return (
        <div className={classes.Stats} >
            <h3>Confirmed:</h3>
            <span>{stats.confirmed.value}</span>
            <h3>Deaths:</h3>
            <span>{stats.deaths.value}</span>
            <h3>Recovered:</h3>
            <span>{stats.recovered.value}</span>
        </div>
    )
};

export default Stats;