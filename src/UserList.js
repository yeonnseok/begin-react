import React from 'react';
import { UserDispatch } from '.App';

const User = React.memo(function User({ user }) {
    const dispatch = useContext(UserDispatch);

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => {
                    dispatch({ type: 'TOGGLE_USER', id: user.id });
                }} //인자를 넣어주어야하기 때문에 화살표함수를 사용
            >
                {user.username}
            </b>
            &nbsp; 
            <span>({user.email})</span>
            <button onClick={() => {
                dispatch({ type: 'REMOVE_USER', id: user.id });
            }}>삭제</button>
        </div>
    );
});


function UserList({ users }) {
    return (
        <div>
            {users.map(user => (
                <User 
                    user={user} 
                    key={user.id}
                />
            ))}
        </div>
    );
};

export default React.memo(UserList);

