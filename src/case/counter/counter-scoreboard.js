import React from 'react'
import {useSelector} from 'react-redux';

const CounterScoreboard = () => {
    const counter = useSelector(state => state.counter);
    return (
        <div>{counter}</div>
    );
};

export default CounterScoreboard
