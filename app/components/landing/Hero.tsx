import { useState, useRef, useEffect } from "react";
import SignUp from "./SignUp";
import { UserInfoForm } from "./UserInfoForm";
import { TransitionOverlay } from "./TransitionOverlay";
import "./style.css";

const Hero: React.FC = () => {
  const [showSignUp, setShowSignUp] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<
    "forward" | "backward"
  >("forward");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTransition = (direction: "forward" | "backward") => {
    setTransitionDirection(direction);
    setTransitioning(true);
  };

  const handleAnimationEnd = () => {
    setTransitioning(false);
    setShowSignUp(transitionDirection === "backward");
  };

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const height = container.scrollHeight;
      container.style.height = `${height}px`;
    }
  }, [showSignUp]);

  return (
    <section className="w-full max-w-screen-lg m-auto">
      <div className="text-center py-10 px-4 flex flex-col relative">
        <div
          className="component-container"
          ref={containerRef}
        >
          {showSignUp ? (
            <SignUp onComplete={() => handleTransition("forward")} />
          ) : (
            <UserInfoForm onComplete={() => handleTransition("backward")} />
          )}
          {transitioning && (
            <TransitionOverlay
              onAnimationEnd={handleAnimationEnd}
              direction={transitionDirection}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export { Hero };
