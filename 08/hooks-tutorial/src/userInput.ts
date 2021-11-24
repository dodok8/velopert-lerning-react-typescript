import { useReducer } from 'react';

type State = {
  name: string;
  nickname: string;
};

function reducer(state: State, action: EventTarget & HTMLInputElement): State {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(
  initialForm: State
): [State, (e: React.ChangeEvent<HTMLInputElement>) => void] {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  return [state, onChange];
}
