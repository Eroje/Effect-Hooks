import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
    clearInterval(intervalId);
  };
  }, []);

  const handleChange = ({target}) => setName(target.value);

  return (
    <>
      <h1>Time: {time}</h1>
      <input value={name} onChange={handleChange} />
    </>
  );
}


/* 
Notes:

1. The empty dependency (line 15) array prevents the timer 
to stop counting while the user types in thier name.

2. The return function (line 12-15) cleans up our old 
intervals before adding new ones!

*/