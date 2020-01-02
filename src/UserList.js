import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
    useEffect(() => {
        console.log(user);
    });
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)} //인자를 넣어주어야하기 때문에 화살표함수를 사용
            >
                {user.username}
            </b>
            &nbsp; 
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}


function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map(user => (
                <User 
                    user={user} 
                    key={user.id}
                    onRemove={onRemove} 
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};

export default UserList;

