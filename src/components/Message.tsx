// 無名関数でコンポーネントを定義し、Textという変数に代入する
// Textコンポーネントは親から `content` というデータ(ここでは文字列)を受け取る
const Text = (props: { content: string }) => {
  // propsからcontentを取り出す
  const { content } = props;
  // 表示する
  return <p className='text'>{content}</p>;
};

// 同様に無名関数由来のコンポーネントを Messageという変数に代入する
const Message = (props: {}) => {
  const content1 = 'This is parent component: Message';
  const content2 = 'Message component uses Text component';

  return (
    <div>
      <Text content={content1}></Text>
      <Text content={content2}></Text>
    </div>
  );
};

export default Message;
