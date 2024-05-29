"use client";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

export const PatternInterruption: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations();

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
      className="text-center py-12 px-4 opacity-0"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        {t("why_subscribe.leader_insight")}
      </h2>
      <p className="text-gray-600 text-xl">
        {t("why_subscribe.stoicism_benefit")}
      </p>
    </div>
  );
};
