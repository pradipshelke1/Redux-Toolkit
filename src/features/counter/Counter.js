import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  console.log("count", count);
  const dispatch = useDispatch();
  return (
    <div className="">
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <h2>{count}</h2>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        Increment 10
      </button>
    </div>
  );
};

export default Counter;
