import React, {useState, useEffect} from 'react';
import {CounterScoreboard} from '../../components';
import {useDispatch} from 'react-redux';
import {startChangeValue} from '../../redux/counter/counter-saga';

const Counter = () => {
    const dispatch = useDispatch();
    const [currentValue, updateValue] = useState(0);

    useEffect(() => {
        dispatch(startChangeValue(currentValue));
    });
    return (
        <div data-testid='counter-container'>
            <button data-testid='increment-counter-btn' onClick={() => {
                updateValue(currentValue + 1);
            }}>Increment
            </button>
            <hr/>
            <button onClick={() => {
                updateValue(currentValue - 1);
            }}>Decrement
            </button>
            <hr/>
            <div>當前得分: {currentValue}</div>
            <CounterScoreboard/>
            <input>Test</input>
        </div>
    );
};

export default Counter;
