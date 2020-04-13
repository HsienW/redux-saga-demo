import React from 'react'
import {useSelector} from 'react-redux';

const Home = () => {
    const userListData = useSelector(state => state.userListReducer.userListData);
    return (
        <div>
            <div>我是首頁</div>
            <div>當前使用者列表長度: {userListData.length}</div>
        </div>
    )
};

export default Home
