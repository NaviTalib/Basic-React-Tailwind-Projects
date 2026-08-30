import React, { useState, useEffect, useRef } from 'react';

export default function DigitalClockWithAlarm() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Alarm state
  const [alarmHour, setAlarmHour] = useState(7); // 1 to 12
  const [alarmMinute, setAlarmMinute] = useState(30); // 0 to 59
  const [alarmPeriod, setAlarmPeriod] = useState('AM');

  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const [isAlarmTriggered, setIsAlarmTriggered] = useState(false);

  // Active drag state: 'hour' | 'minute' | null
  const [activeSlider, setActiveSlider] = useState(null);
  const svgRef = useRef(null);

  // Web Audio API References
  const audioCtxRef = useRef(null);
  const alarmIntervalRef = useRef(null);

  // Helper: Play a double-beep alarm sound using Web Audio API
  const playBeepSound = () => {
    try {
      // Initialize Audio Context lazily
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // First beep
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(880, ctx.currentTime); // 880Hz (Note A5)
      gain1.gain.setValueAtTime(0.3, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(ctx.currentTime);
      osc1.stop(ctx.currentTime + 0.15);

      // Second beep (slightly delayed)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(880, ctx.currentTime + 0.2);
      gain2.gain.setValueAtTime(0.3, ctx.currentTime + 0.2);
      gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(ctx.currentTime + 0.2);
      osc2.stop(ctx.currentTime + 0.35);
    } catch (e) {
      console.error('Web Audio API error:', e);
    }
  };

  // Helper: Stop repeated alarm beeping sound
  const stopAlarmSound = () => {
    if (alarmIntervalRef.current) {
      clearInterval(alarmIntervalRef.current);
      alarmIntervalRef.current = null;
    }
  };

  // Ticker effect for clock
  useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formatIndianTime = (dateObj) => {
    return dateObj.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  // Alarm checker effect with Sound Trigger
  useEffect(() => {
    if (!isAlarmSet) return;

    let hours = currentTime.getHours();
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    const currentMinute = currentTime.getMinutes();

    if (
      hours === alarmHour &&
      currentMinute === alarmMinute &&
      period === alarmPeriod &&
      !isAlarmTriggered
    ) {
      setIsAlarmTriggered(true);

      // Play immediate beep and repeat every 1 second
      playBeepSound();
      alarmIntervalRef.current = setInterval(playBeepSound, 1000);
    }
  }, [currentTime, isAlarmSet, alarmHour, alarmMinute, alarmPeriod, isAlarmTriggered]);

  // Clean up sound on unmount or reset
  useEffect(() => {
    return () => stopAlarmSound();
  }, []);

  const handleDismissAlarm = () => {
    stopAlarmSound();
    setIsAlarmSet(false);
    setIsAlarmTriggered(false);
  };

  // Convert (x, y) interaction into radial angle
  const handleInteraction = (clientX, clientY, type) => {
    if (isAlarmSet || !svgRef.current) return;

    const rect = svgRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = clientX - centerX;
    const dy = clientY - centerY;

    let rad = Math.atan2(dy, dx) + Math.PI / 2;
    if (rad < 0) rad += 2 * Math.PI;

    if (type === 'hour') {
      let h = Math.round((rad / (2 * Math.PI)) * 12);
      if (h === 0) h = 12;
      setAlarmHour(h);
    } else if (type === 'minute') {
      const m = Math.round((rad / (2 * Math.PI)) * 60) % 60;
      setAlarmMinute(m);
    }
  };

  const handleMouseDown = (e, type) => {
    if (isAlarmSet) return;
    setActiveSlider(type);
    handleInteraction(e.clientX, e.clientY, type);
  };

  const handleMouseMove = (e) => {
    if (activeSlider) {
      handleInteraction(e.clientX, e.clientY, activeSlider);
    }
  };

  const handleMouseUp = () => setActiveSlider(null);

  // SVG Helper: Polar to Cartesian coordinates
  const getCoordinates = (angleDeg, radius, center = 150) => {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return {
      x: center + radius * Math.cos(rad),
      y: center + radius * Math.sin(rad),
    };
  };

  const hourAngle = (alarmHour / 12) * 360;
  const minuteAngle = (alarmMinute / 60) * 360;

  const hourKnob = getCoordinates(hourAngle, 125, 150);
  const minuteKnob = getCoordinates(minuteAngle, 92, 150);

  const formattedHour = String(alarmHour).padStart(2, '0');
  const formattedMinute = String(alarmMinute).padStart(2, '0');

  const ticks = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * 360;
    const outer = getCoordinates(angle, 140, 150);
    const inner = getCoordinates(angle, 134, 150);
    return { angle, outer, inner };
  });

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex items-center justify-center p-4 select-none relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Glassmorphic Container Card */}
      <div
        className={`w-full max-w-md bg-slate-900/70 backdrop-blur-xl border rounded-3xl p-6 md:p-8 shadow-2xl transition-all duration-500 relative z-10 ${
          isAlarmTriggered
            ? 'border-red-500/80 shadow-red-500/30 ring-4 ring-red-500/20'
            : 'border-slate-800/80 shadow-cyan-500/5'
        }`}
      >
        <h1 className="text-xs font-bold text-slate-400 text-center uppercase tracking-widest mb-4">
          Digital Alarm Clock
        </h1>

        {/* IST Digital Clock Box */}
        <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 text-center mb-6 shadow-inner">
          <div className="text-3xl md:text-4xl font-mono font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            {formatIndianTime(currentTime)}
          </div>
        </div>

        {/* Dial Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex gap-4 text-xs font-semibold mb-4">
            <span
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border transition-all ${
                activeSlider === 'hour'
                  ? 'bg-indigo-950/80 border-indigo-500 text-indigo-300 shadow-lg shadow-indigo-500/20 scale-105'
                  : 'bg-slate-950/60 border-slate-800 text-indigo-400'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" /> Hour Dial
            </span>
            <span
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border transition-all ${
                activeSlider === 'minute'
                  ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 shadow-lg shadow-cyan-500/20 scale-105'
                  : 'bg-slate-950/60 border-slate-800 text-cyan-400'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /> Minute Dial
            </span>
          </div>

          {/* SVG Dial */}
          <div className="relative w-72 h-72 flex items-center justify-center">
            <svg
              ref={svgRef}
              viewBox="0 0 300 300"
              className="w-full h-full overflow-visible touch-none"
            >
              <defs>
                <linearGradient id="hourGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>

                <linearGradient id="minuteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>

                <filter id="glowHour" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="glowMinute" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {ticks.map((tick, i) => (
                <line
                  key={i}
                  x1={tick.inner.x}
                  y1={tick.inner.y}
                  x2={tick.outer.x}
                  y2={tick.outer.y}
                  stroke="#334155"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ))}

              <circle cx="150" cy="150" r="125" fill="none" stroke="#1e1b4b" strokeWidth="12" className="opacity-60" />
              <circle
                cx="150"
                cy="150"
                r="125"
                fill="none"
                stroke="url(#hourGradient)"
                strokeWidth="12"
                strokeDasharray={2 * Math.PI * 125}
                strokeDashoffset={2 * Math.PI * 125 * (1 - hourAngle / 360)}
                strokeLinecap="round"
                transform="rotate(-90 150 150)"
                className="transition-all duration-75"
              />

              <circle cx="150" cy="150" r="92" fill="none" stroke="#083344" strokeWidth="10" className="opacity-60" />
              <circle
                cx="150"
                cy="150"
                r="92"
                fill="none"
                stroke="url(#minuteGradient)"
                strokeWidth="10"
                strokeDasharray={2 * Math.PI * 92}
                strokeDashoffset={2 * Math.PI * 92 * (1 - minuteAngle / 360)}
                strokeLinecap="round"
                transform="rotate(-90 150 150)"
                className="transition-all duration-75"
              />

              {/* Handles */}
              <g
                className="cursor-pointer group"
                onMouseDown={(e) => handleMouseDown(e, 'hour')}
                onTouchStart={(e) => {
                  setActiveSlider('hour');
                  if (e.touches[0]) handleInteraction(e.touches[0].clientX, e.touches[0].clientY, 'hour');
                }}
              >
                <circle cx={hourKnob.x} cy={hourKnob.y} r="16" fill="#6366f1" filter="url(#glowHour)" className="transition-transform group-hover:scale-110" />
                <circle cx={hourKnob.x} cy={hourKnob.y} r="14" fill="#4f46e5" stroke="#818cf8" strokeWidth="2" />
                <text x={hourKnob.x} y={hourKnob.y + 4} textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" pointerEvents="none">H</text>
              </g>

              <g
                className="cursor-pointer group"
                onMouseDown={(e) => handleMouseDown(e, 'minute')}
                onTouchStart={(e) => {
                  setActiveSlider('minute');
                  if (e.touches[0]) handleInteraction(e.touches[0].clientX, e.touches[0].clientY, 'minute');
                }}
              >
                <circle cx={minuteKnob.x} cy={minuteKnob.y} r="14" fill="#22d3ee" filter="url(#glowMinute)" className="transition-transform group-hover:scale-110" />
                <circle cx={minuteKnob.x} cy={minuteKnob.y} r="12" fill="#0891b2" stroke="#38bdf8" strokeWidth="2" />
                <text x={minuteKnob.x} y={minuteKnob.y + 4} textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold" pointerEvents="none">M</text>
              </g>
            </svg>

            {/* Center Time Display */}
            <div className="absolute z-10 text-center flex flex-col items-center justify-center bg-slate-950/90 w-28 h-28 rounded-full border border-slate-800 shadow-2xl backdrop-blur-md">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Alarm</span>
              <div className="text-2xl font-mono font-bold text-slate-100 leading-tight">
                {formattedHour}:{formattedMinute}
              </div>
              <button
                onClick={() => !isAlarmSet && setAlarmPeriod((prev) => (prev === 'AM' ? 'PM' : 'AM'))}
                disabled={isAlarmSet}
                className="mt-1 px-3 py-0.5 text-xs font-extrabold bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-slate-950 rounded-full transition-all shadow-md active:scale-95 disabled:opacity-50"
              >
                {alarmPeriod}
              </button>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="space-y-3">
          {!isAlarmSet ? (
            <button
              onClick={() => {
                setIsAlarmSet(true);
                setIsAlarmTriggered(false);
              }}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/25 active:scale-[0.98]"
            >
              Set Alarm ({formattedHour}:{formattedMinute} {alarmPeriod})
            </button>
          ) : (
            <button
              onClick={handleDismissAlarm}
              className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl transition-all border border-slate-700"
            >
              Reset / Change Alarm
            </button>
          )}

          {/* Status Badge */}
          {isAlarmSet && !isAlarmTriggered && (
            <div className="flex items-center justify-center gap-2 text-sm text-cyan-400 bg-cyan-950/30 border border-cyan-800/40 rounded-xl px-4 py-2.5 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
              </span>
              Alarm scheduled for <span className="font-mono font-bold text-cyan-300">{formattedHour}:{formattedMinute} {alarmPeriod}</span>
            </div>
          )}

          {/* Trigger Banner */}
          {isAlarmTriggered && (
            <div className="bg-red-950/70 border border-red-500/60 rounded-2xl p-4 text-center animate-bounce shadow-xl shadow-red-500/20">
              <h3 className="text-lg font-extrabold text-red-400 mb-1">⏰ ALARM RINGING! ⏰</h3>
              <p className="text-sm text-red-200 mb-3">
                The time is now <span className="font-mono font-bold">{formattedHour}:{formattedMinute} {alarmPeriod}</span>
              </p>
              <button
                onClick={handleDismissAlarm}
                className="w-full py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl shadow-lg shadow-red-600/40 transition-colors"
              >
                Dismiss Alarm
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}