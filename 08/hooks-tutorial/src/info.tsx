import { useEffect } from 'react';
import useInputs from './userInput';

function Info() {
  const [state, onChange] = useInputs({ name: '', nickname: '' });
  const { name, nickname } = state;

  useEffect(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  }, [name]);

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
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
