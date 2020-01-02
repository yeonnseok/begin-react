import React, { useState, useRef, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import Counter from './Counter';

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중....");
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,    // 다시 공백으로 만듬
        users: state.users.concat(action.user); // 배열 추가
      }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const { username, email } = state.inputs; 

  const onChange = useCallback(e => {
    const { value, name } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      id: nextId.curret,
      username,
      email
    });
    nextId.current += 1;
  }, [username, email]);

  return (
      <>
        <CreateUser 
          username={username}
          email={email}
          onChange={onchange}
        />
        <UserList 
          users={users}
        />
        <div>활성사용자 수: 0</div>
      </>
  );
}

export default App;