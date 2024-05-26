import React, { useEffect } from "react";

interface TransitionOverlayProps {
  onAnimationEnd: () => void;
  direction: "forward" | "backward";
}
export const TransitionOverlay: React.FC<TransitionOverlayProps> = ({
  onAnimationEnd,
  direction,
}) => {
  useEffect(() => {
    const handleAnimationEnd = () => {
      onAnimationEnd();
    };

    const overlay = document.querySelector(".transition-overlay");
    overlay?.addEventListener("animationend", handleAnimationEnd);

    return () => {
      overlay?.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [onAnimationEnd]);

  return (
    <div className={`transition-overlay ${direction}`}>
      <div className="curtain top"></div> {/* New line */}
      <div className="curtain bottom"></div> {/* New line */}
    </div>
  );
};
