import React from 'react';
import {useSelector} from 'react-redux';

export const CounterScoreboard = () => {
    const counter = useSelector(state => state.counterReducer.counter);
    return (
        <div data-testid='counter-scoreboard'>計分板: {counter}</div>
    );
};
