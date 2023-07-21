import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  const timerID= useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);
  return function(){
    clearInterval(timerID)
  }

  return <div>{time.toString()}</div>;
}

export default Clock;
