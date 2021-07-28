import React, { useState } from 'react';

type name = {
  id: number;
  text: string;
};

function IterationSample() {
  const [names, setNames] = useState<name[]>([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
  }
  function onClick(e: React.MouseEvent<HTMLElement>) {
    // const nextNames: name[] = [...names, { id: nextId, text: inputText }];
    const nextNames: name[] = names.concat({ id: nextId, text: inputText });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  }
  function onRemove(id: number) {
    const nextNames: name[] = names.filter((name) => name.id !== id);
    setNames(nextNames);
  }

  const nameList = names.map((name) => (
    <li
      key={name.id}
      onDoubleClick={() => {
        onRemove(name.id);
      }}
    >
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
}

export default IterationSample;
