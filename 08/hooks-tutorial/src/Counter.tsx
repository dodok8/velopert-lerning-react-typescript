import { useReducer } from 'react';

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };

type State = {
  value: number;
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'DECREMENT' });
        }}
      >
        -1
      </button>
    </div>
  );
}

export default Counter;
