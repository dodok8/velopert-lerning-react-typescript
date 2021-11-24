import { useState, useMemo, useCallback, useRef } from 'react';

function getAverage(numbers: number[]): number {
  console.log('평균값 계산중');
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((a, b) => a + b);

  return sum / numbers.length;
}

function Average() {
  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState<number>(0);
  const id = useRef<number>(1);
  const setId: (n: number) => void = function (n) {
    id.current = n;
  };
  const printId: () => void = function () {
    console.log(id.current);
  };

  const inputEl = useRef<HTMLInputElement>(null);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNumber(parseInt(e.target.value));
  }

  const onInsert = useCallback(() => {
    const nextList = list.concat(number);
    setList(nextList);
    setNumber(0);
  }, [list, number]);

  const avg = useMemo(() => {
    getAverage(list);
  }, [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
}

export default Average;
function userRef<T>(arg0: null) {
  throw new Error('Function not implemented.');
}
