import React, {useState, useEffect} from 'react'
import CounterScoreboard from './counter-scoreboard';
import {useSelector, useDispatch} from 'react-redux';
import {changeValueAction} from '../../redux/counter/counter-saga';

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const [currentValue, updateValue] = useState(0);

    useEffect(() => {
        dispatch(changeValueAction(currentValue));
    });
    return (
        <div>
            <button onClick={() => {
                updateValue(currentValue + 1);
            }}>Increment
            </button>
            <hr/>
            <button onClick={() => {
                updateValue(currentValue - 1);
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
