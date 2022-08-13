import { useReducer } from 'react';

type CounterProps = { initialValue: number };

const ReduceCounter = (props: CounterProps) => {
    const { initialValue } = props;

    /**
     * reducer(現在の状態, action) {
     *     return 次の状態
     * }
     */
    // dispatch: 更新関数
    // action: データ。
    // 現在の状態とactionを渡すと次の状態を返すreducerという関数を用いる
    // 関数dispatchにactionを渡すとreducerが実行されてvalueが更新される
    const reducer = (value: number, action: number): number => value + action;
    const [value, dispatch] = useReducer(reducer, initialValue);

    const count = value;

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(-1)}>-</button>
            <button onClick={() => dispatch(+1)}>+</button>
        </div>
    );
};

export default ReduceCounter;
