"use client";

import { FC, memo } from "react";
import CountUp from "react-countup";

// Define the interface for props with default optional values
interface ICounterProps {
  start: number; // Starting value for the count
  end: number; // Ending value for the count
  prefix?: string; // Optional prefix before the number (e.g., '$', '€', etc.)
  suffix?: string; // Optional suffix after the number (e.g., 'items', 'years', etc.)
  description: string; // Description text below the counter
}

const Counter: FC<ICounterProps> = ({
  start,
  end,
  prefix = "", // Default to empty string if no prefix is provided
  suffix = "", // Default to empty string if no suffix is provided
  description,
}) => {
  return (
    <div className="shadow-mainShadow text-center p-5 rounded-2xl bg-white dark:bg-secondary dark:shadow-none">
      {/* CountUp component used to animate the number change */}
      <CountUp
        start={start}
        end={end}
        prefix={prefix}
        suffix={suffix}
        duration={5} // Adding duration to control animation speed
        className="text-3xl text-primary font-nunito font-black"
        aria-live="polite" // Ensure screen readers announce the number changes
      />

      {/* Description text with color adjustments for light/dark modes */}
      <p className="text-black/70 dark:text-white/70 text-sm mt-2">
        {description}
      </p>
    </div>
  );
};

export default memo(Counter);
