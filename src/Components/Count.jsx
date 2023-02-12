import { useEffect, useState, useRef } from "react";

const CountUp = ({ target, time }) => {
  const [count, setCount] = useState(0);
  const [intersecting, setIntersecting] = useState(false);
  const countRef = useRef(null);
  useEffect(() => {
    if (!intersecting) return;
    const intervalId = setInterval(() => {
      if (count >= target) {
        clearInterval(intervalId);
        return;
      }
      setCount((c) => c + 1);
    }, time || 5);
    return () => clearInterval(intervalId);
  }, [count, intersecting, target]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIntersecting(true);
        setCount((c) => (c === target ? c : 0));
      } else {
        setIntersecting(false);
      }
    });
    observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [countRef, target]);
  return <span ref={countRef}>{count}</span>;
};

export default CountUp;
