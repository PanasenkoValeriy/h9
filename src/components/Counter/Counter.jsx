import { useReducer, useState } from 'react';
import style from './Counter.module.css';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

export default function Counter() {
  //   const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(countReducer, {
    count: 0,
  });

  return (
    <div className={style.container}>
      <button
        className={style.btn}
        type="button"
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        +
      </button>
      <p className={style.value}>{state.count}</p>
      <button
        className={style.btn}
        type="button"
        onClick={() => dispatch({ type: 'decrement', payload: 1 })}
      >
        -
      </button>
    </div>
  );
}
