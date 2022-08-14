import React, { useState, useMemo } from 'react';

export const UseMemoSample = () => {
    // textは現在のテキストボックスの中身の値を保持する
    const [text, setText] = useState('');

    // itemsは文字列のリストを保持する
    const [items, setItems] = useState<string[]>([]);

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setText(e.target.value);
    };

    // ボタンをクリックしたときに呼ばれる関数
    const onClickButton = () => {
        // テキストをitemsに追加する
        setItems((prevItems) => [...prevItems, text]);
        // テキストボックスを空にする
        setText('');
    };

    // numberOfCharacters1は再描画の度にitems.reduceを実行して結果を得る
    const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0);
    // numberOfCharacters2はuseMemoを使い、itemsが更新されるタイミングでitems.reduceを実行して結果を得る
    const numberOfCharacters2 = useMemo(() => {
        // itemsの合計文字数を返す
        let totalLength = 0;
        items.forEach((item) => (totalLength += item.length));
        return totalLength;
    }, [items]);

    return (
        <div>
            <p>UseMemoSample</p>
            <div>
                <input value={text} onChange={onChangeInput} />
                <button onClick={onClickButton}>Add</button>
            </div>
            <div>
                {items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div>
                <p>Total number of Characters 1: {numberOfCharacters1}</p>
                <p>Total number of Characters 2: {numberOfCharacters2}</p>
            </div>
        </div>
    );
};
