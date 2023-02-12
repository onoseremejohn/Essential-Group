import React, { useEffect, useState } from "react";

const CountUp = ({ target, intersect }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count >= target) {
        clearInterval(intervalId);
        return;
      }
      setCount((c) => c + 1);
    }, 5);
    return () => clearInterval(intervalId);
  }, [count, target]);

  useEffect(() => {
    if (intersect) {
      setCount(0);
    } else {
      setCount(target);
    }
  }, [intersect, target]);
  return <span>{count}</span>;
};

export default CountUp;
