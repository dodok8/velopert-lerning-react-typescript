import React, { useState } from 'react';

const EventPractice = () => {
  // const [username, setUsername] = useState<string>('');
  // const [message, setMessage] = useState<string>('');
  const [form, setForm] = useState<{ username: string; message: string }>({
    username: '',
    message: '',
  });

  // const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>): void => setUsername(e.target.value);
  // 화살표 함수로 넘겨줘도 되나 function 키워드를 사용함.

  // function onChangeUsername(e: React.ChangeEvent<HTMLInputElement>): void {
  //   setUsername(e.target.value);
  // }
  // function onChangeMessage(e: React.ChangeEvent<HTMLInputElement>): void {
  //   setMessage(e.target.value);
  // }

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  }

  function onClick(): void {
    alert(`${form.username}: ${form.message}`);
    setForm({ username: '', message: '' });
  }
  function onKeyPress(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === 'Enter') {
      onClick();
    }
  }

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={form.username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={form.message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
