import React, { memo, useState } from 'react';

const p = console.log;

type FizzProps = { isFizz: boolean };

// Fizzは通常の関数コンポーネント
// isFizzがtrueの場合はFizzと表示し、それ以外は何も表示しない
// isFizzの変かに関わらず、親が再描画されるとFizzも再描画される
const Fizz = (props: FizzProps) => {
    const { isFizz } = props;
    p(`Fizzが再描画されました isFizz=${isFizz}`);
    return <span>{isFizz ? 'Fizz' : ''}</span>;
};

type BuzzProps = {
    isBuzz: boolean;
    onClick: () => void;
};

// Buzzはメモ化した関数コンポーネント
// isBuzzがtrueの場合はBuzzと表示し、それ以外は何も表示しない
// 親コンポーネントが再描画されても、isBuzzが変化しない限りはBuzzは再描画しない
const Buzz = memo<BuzzProps>((props: BuzzProps) => {
    const { isBuzz, onClick } = props;
    p(`Buzzが再描画されました isBuzz=${isBuzz}`);
    return <span onClick={onClick}>{isBuzz ? 'Buzz' : ''}</span>;
});

const onBuzzClick = () => {
    p(`Buzzが再描画されました isBuzz=${gIsBuzz}`);
};

let gIsBuzz = false;

// この形式でexportしたときはimport { Parent } from ... で読み込む
export const Parent = () => {
    const [count, setCount] = useState(1);
    const isFizz = count % 3 === 0;
    const isBuzz = count % 5 === 0;

    gIsBuzz = isBuzz;

    p(`Parentが再描画されました count=${count}`);

    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>+1</button>
            <p>{`現在のカウント: ${count}`}</p>
            <p>
                <Fizz isFizz={isFizz}></Fizz>
                <Buzz isBuzz={isBuzz} onClick={onBuzzClick}></Buzz>
            </p>
        </div>
    );
};
