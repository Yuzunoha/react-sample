import React from 'react';

// 名前を入力するためのテキストボックスを返す
const Name = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    const style = {
        padding: '16px',
        backgroundColor: 'gray',
    };

    return (
        <div style={style}>
            <label htmlFor='name'>名前</label>
            <input id='name' className='input-name' type='text' onChange={onChange} />
        </div>
    );
};

export default Name;
