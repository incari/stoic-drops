"use client";
import { useEffect, useRef } from "react";

export const PatternInterruption: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        } else {
          entry.target.classList.remove("animate-fadeIn");
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="text-center py-12 px-4"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Did you know that 90% of leaders use Stoic principles to make better
        decisions?
      </h2>
      <p className="text-gray-600 text-xl">
        Explore how Stoicism can elevate your decision-making skills.
      </p>
    </div>
  );
};
