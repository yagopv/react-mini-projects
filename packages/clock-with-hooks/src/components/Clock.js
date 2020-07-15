import React, { useState, useEffect } from 'react';
import { Display } from './Display';
import { Panel } from './Panel';

function Clock() {
  const [date, setDate] = useState(new Date());
  const [isDateVisible, setIsDateVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock">
      <Panel
        onDateCheckedChange={() => setIsDateVisible(!isDateVisible)}
        isDateChecked={isDateVisible}
      />
      <Display date={date} isDateVisible={isDateVisible} />
    </div>
  );
}

export default Clock;
