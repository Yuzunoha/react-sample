import { useState } from 'react';

type CounterProps = { initialValue: number };

const Counter = (props: CounterProps) => {
    const { initialValue } = props;
    // カウントを保持する1つの状態を宣言します。引数は初期値。
    // countが現在の状態で、setCountが更新関数です。
    // 更新関数に渡す関数の引数には、現在の値が入るよ。
    const [count, setCount] = useState(initialValue);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        </div>
    );
};

export default Counter;
