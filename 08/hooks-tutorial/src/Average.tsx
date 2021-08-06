import { useState, useMemo } from 'react';

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

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNumber(parseInt(e.target.value));
  }
  function onInsert(e: React.MouseEvent<HTMLButtonElement>) {
    const nextList = list.concat(number);
    setList(nextList);
    setNumber(0);
  }

  const avg = useMemo(() => {
    getAverage(list);
  }, [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
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
