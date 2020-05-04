import React from 'react';
import {useSelector} from 'react-redux';

const CounterScoreboard = () => {
    const counter = useSelector(state => state.counterReducer.counter);
    return (
        <div id='counter-scoreboard'>計分板: {counter}</div>
    );
};

export default CounterScoreboard;
