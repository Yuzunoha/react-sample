import React from 'react';

// Containerのpropsの型の定義
type ContainerProps = {
    title: string;
    children: React.ReactNode;
};

const Container = (props: ContainerProps): JSX.Element => {
    const { title, children } = props;

    return (
        <div style={{ background: 'red' }}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    );
};

const Rarent = (): JSX.Element => {
    return (
        <Container title='Hello'>
            <p>ここの部分が背景色で囲まれます</p>
        </Container>
    );
};

export default Rarent;
