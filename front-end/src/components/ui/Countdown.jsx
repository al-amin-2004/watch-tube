"use client";

import React, { useEffect, useState } from "react";

export const Countdown = ({ comingDate }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        if (!comingDate || isNaN(new Date(comingDate).getTime())) return;

        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = new Date(comingDate).getTime() - now;

            if(difference <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)) ,
                    hours:Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes:Math.floor((difference / 1000 / 60) % 60),
                    seconds:Math.floor((difference / 1000) % 60),
                })
            }
        }

        updateCountdown();

        const interval = setInterval(updateCountdown, 1000)
        return () => clearInterval(interval);

    }, [comingDate])


  const timeBox = (value, label) => (
    <div className="flex items-start">
      <h2 className="text-5xl font-bold text-white">
        {String(value).padStart(2, "0")}
      </h2>
      <label className="text-xs mt-2.5 text-text-secondary rotate-[270deg]">
        {label}
      </label>
    </div>
  );

  return (
    <div className="inline-flex bg-surface rounded-2xl py-2.5 px-5 border-2 border-border gap-4">
      {timeBox(timeLeft.days, "Days")}
      {timeBox(timeLeft.hours, "Hrs")}
      {timeBox(timeLeft.minutes, "Min")}
      {timeBox(timeLeft.seconds, "Sec")}
    </div>
  );
};
