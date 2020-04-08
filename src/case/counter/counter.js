import React, {useState} from 'react'
import CounterScoreboard from './counter-scoreboard';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../../redux/counter/counter-saga';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const [currentValue, changeValue] = useState(0);
    return (
        <div>
            <button onClick={() => {
                changeValue(currentValue + 1);
                dispatch(increment(currentValue));
            }}>Increment
            </button>
            <hr/>
            <button onClick={() => {
                changeValue(currentValue - 1);
                dispatch(decrement(currentValue));
            }}>Decrement
            </button>
            <hr/>
            <div>value: {currentValue}</div>
            <div>{counter}</div>
            <CounterScoreboard/>
        </div>
    )
};

export default Counter
