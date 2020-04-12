import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserListStart} from '../../redux/user-list/user-list-saga';
import UserListItem from '../../components/user-list/user-list-item';

const UserList = () => {
    const dispatch = useDispatch();
    const userListData = useSelector(state => state.userListReducer.userListData);
    const fakeRequest = {
        fake: 'fake'
    };

    useEffect(() => {
        dispatch(getUserListStart(fakeRequest));
    },[dispatch]);

    return (
        <div>
            <div>我是使用者列表頁</div>
            {
                userListData.length !== 0
                    ? userListData.map((item) => {
                        return (
                            <UserListItem
                                key={item.id}
                                name={item.name}
                            />
                        );
                    })
                    : <div>loading...</div>
            }
        </div>
    )
};

export default UserList
