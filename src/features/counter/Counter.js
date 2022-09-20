import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <span>{count}</span>
        <div>
          <button
            aria-label="Increment Value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>

          <button
            aria-label="Decrement Value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            aria-label="Decrement Value"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
