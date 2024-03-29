import React, { useState, useEffect } from 'react';

const Counter = ({ targetNumber, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < targetNumber) {
        setCount(count + 1);
      } else {
        clearInterval(timer);
      }
    }, delay);

    return () => clearInterval(timer);
  }, [count, targetNumber, delay]);

  return <div>{count}</div>;
};

export default Counter;
