import React from "react";
import { useSelector } from "react-redux";

const Coin = () => {
  const count = useSelector((state) => state.counter.count);
  return <div>{count}</div>;
};

export default Coin;
