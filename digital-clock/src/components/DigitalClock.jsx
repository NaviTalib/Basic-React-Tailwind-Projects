import React, { useEffect, useState } from 'react';
import ClockDisplay from './ClockDisplay';
import TimeZoneSelector from './TimeZoneSelector';

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeZone, setTimeZone] = useState('UTC');

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 font-sans">
      <div className="flex flex-col items-center gap-6 bg-slate-900/40 p-8 rounded-3xl border border-slate-800/60 shadow-2xl backdrop-blur-xl max-w-sm w-full">
        {/* App Header */}
        <div className="text-center space-y-1">
          <h1 className="text-xl font-bold tracking-tight text-white">
            World Clock
          </h1>
          <p className="text-xs text-slate-400">
            Real-time global timezone tracker
          </p>
        </div>

        {/* Clock Component */}
        <ClockDisplay time={currentTime} timeZone={timeZone} />

        {/* Timezone Dropdown */}
        <TimeZoneSelector
          selectedZone={timeZone}
          onZoneChange={setTimeZone}
        />
      </div>
    </div>
  );
};

export default DigitalClock;