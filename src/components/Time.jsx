import React, { useEffect, useState } from 'react';

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div id="Date">{time.toLocaleDateString()}</div>
      <div id="Time">{time.toLocaleTimeString()}</div>
    </div>
  );
};

export default Time;