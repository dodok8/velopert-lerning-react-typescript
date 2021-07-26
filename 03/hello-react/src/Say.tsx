import { useState } from 'react';

function Say() {
  const [message, setMessage] = useState(''); // 기본적으로 타입추론은 잘 작동합니다.
  // const onClickEnter = () => setMessage(3); 위 타입 추론과 충돌하여 에러가 납니다.
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  const [color, setColor] = useState<string>('black'); //이렇게 제네릭으로 넘겨 줄 수도 있습니다.

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>{' '}
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
    </div>
  );
}

export default Say;
