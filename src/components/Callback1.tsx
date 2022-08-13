import React, { useState, useCallback } from 'react';

const p = console.log;

type ButtonProps = {
    onClick: () => void;
};

// DecrementButtonは通常の関数コンポーネントでボタンを表示する
const DecrementButton = (props: ButtonProps) => {
    const { onClick } = props;
    p('DecrementButtonが再描画されました');
    return <button onClick={onClick}>Decrement</button>;
};

// IncrementButtonはメモ化した関数コンポーネントでボタンを表示する
const IncrementButton = React.memo((props: ButtonProps) => {
    const { onClick } = props;
    p('IncrementButtonが再描画されました');
    return <button onClick={onClick}>Increment</button>;
});

// DoubleButtonはメモ化した関数コンポーネントでボタンを表示する
const DoubleButton = React.memo((props: ButtonProps) => {
    const { onClick } = props;
    p('DoubleButtonが再描画されました');
    return <button onClick={onClick}>Double</button>;
});

const Callback1 = () => {
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount((c) => c - 1);
    };
    const increment = () => {
        setCount((c) => c + 1);
    };
    const double = useCallback(() => {
        setCount((c) => c * 2);
    }, []);

    return (
        <div>
            <p>count: {count}</p>
            <DecrementButton onClick={decrement} />
            <IncrementButton onClick={increment} />
            <DoubleButton onClick={double} />
        </div>
    );
};

export default Callback1;
