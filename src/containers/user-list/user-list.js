import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserListStart} from '../../redux/user-list/user-list-saga';
import UserListItem from '../../components/user-list/user-list-item';

const UserList = () => {
    const dispatch = useDispatch();
    const listData = useSelector(state => state);
    const [userListData] = useState({
        getStatus: false,
        data: []
    });

    useEffect(() => {
        dispatch(getUserListStart(userListData));
        // todo should reset user list data to component state
    });

    return (
        <div>
            <div>我是使用者列表頁</div>
            {
                userListData.data.length !== 0
                    ? userListData.map((item) => {
                        return (
                            <UserListItem
                                key={item.id}
                                item={item}
                            />
                        );
                    })
                    : <div>loading...</div>
            }
        </div>
    )
};

export default UserList
