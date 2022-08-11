import React from 'react';

// titleを渡すためのContext
const TitleContext = React.createContext('');

// titleコンポーネントの中でContextの値を参照する
const Title = () => {
    // Consumerを使ってContextの値を参照する
    return <TitleContext.Consumer>{(title) => <h1>{title}</h1>}</TitleContext.Consumer>;
};

const Header = () => (
    <div>
        <Title />
    </div>
);

// Pageコンポーネントの中でContextに値を渡す
const Page = () => {
    const title = 'React Book';

    // ProviderでContextに値をセットすることで、Provider以下のコンポーネントから値を参照できる
    return (
        <TitleContext.Provider value={title}>
            <Header />
        </TitleContext.Provider>
    );
};

export default Page;
