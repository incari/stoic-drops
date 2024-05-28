import React from "react";

const InputLabel = ({
  displayLabel,
  label,
}: {
  displayLabel: boolean;
  label: string;
}) => {
  return (
    <div
      className={`text-left
            opacity-0 transition-opacity duration-300 
            ${!displayLabel ? "opacity-0" : "opacity-100"}`}
    >
      &nbsp;{!displayLabel ? "" : label}
    </div>
  );
};

export default InputLabel;
