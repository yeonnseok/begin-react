import React, { useState } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {  // e => 어떤 input에서 변화가 있었는지
        const { value, name } = e.target;
        setInputs({
            ...inputs, //기존의 input객체를 복사한 뒤
            [name]: value
        });
    };
    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
    };
    return (
        <div>
            <input name='name' placeholder="이름" onChange={onChange} value={name}/>
            <input name='nickname' placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name}({nickname})
            </div>
        </div>
    );
}

export default InputSample;