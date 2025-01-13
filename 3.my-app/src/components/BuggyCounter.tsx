import React, { useState } from 'react';

// バグ1: counterStateの初期値が未定義
const CounterDisplay = ({ value }) => {
  // バグ2: 不要なuseState
  const [count] = useState(value);
  
  return <div className="text-2xl font-bold">{count}</div>;
};

// バグ3: props名の不一致（counter vs value）
const CounterButton = ({ onIncrement, counter }) => (
  <button 
    onClick={onIncrement}
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
  >
    Count: {value}
  </button>
);

// バグ4: コンポーネント名とファイル名の不一致
export const BuggyCounter = () => {
  // バグ5: setState の誤った使用
  const [count, setCount] = useState(0);
  
  const incrementCounter = () => {
    // バグ6: 非同期更新の考慮漏れ
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div className="space-y-4 p-4 bg-white rounded shadow">
      <h1 className="text-xl font-bold">Buggy Counter</h1>
      {/* バグ7: props名の不一致 */}
      <CounterDisplay counter={count} />
      <CounterButton 
        onIncrement={incrementCounter}
        value={count}
      />
    </div>
  );
};

// バグ8: デフォルトエクスポートの欠落