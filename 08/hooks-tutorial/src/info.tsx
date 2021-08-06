import { useEffect, useReducer } from 'react';

/*type State = {
  [key: string]: any;
};
이러면 어느 키를 가지던 간에 state에 넣을 수 있지만 좋은 방법은 아니라고 생각합니다. 차라리 any를 쓰지*/

type State = {
  name: string;
  nickname: string;
};

function reducer(state: State, action: EventTarget & HTMLInputElement) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

function Info() {
  const [{ name, nickname }, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  } as State);

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

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(e.target);
  }

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
