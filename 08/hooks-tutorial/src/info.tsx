import { useEffect, useState } from 'react';

function Info() {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  function onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function onChangeNickname(e: React.ChangeEvent<HTMLInputElement>) {
    setNickname(e.target.value);
  }

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>name:</b> {name}
        </div>
        <div>
          <b>nickname:</b> {nickname}
        </div>
      </div>
    </div>
  );
}

export default Info;
