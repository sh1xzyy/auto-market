"use client";

import clsx from "clsx";

export const Tabs = ({ activeIndex, setActiveIndex }) => {
  const baseClass =
    "w-full h-[54px] font-bold border-b border-grey transition-colors linear duration-300";

  const buttonClass = {
    left: `${baseClass} border-r md:rounded-tl-lg`,
    right: `${baseClass} md:rounded-tr-lg`,
    active: "text-light-orange bg-background-light-black border-b-0",
    inactive: "bg-black",
  };

  const buttons = ["Einloggen", "Registrieren"];

  return (
    <div className="flex items-center justify-between">
      {buttons.map((text, i) => (
        <button
          className={clsx(
            buttonClass[i === 0 ? "left" : "right"],
            activeIndex === i ? buttonClass["active"] : buttonClass["inactive"]
          )}
          type="button"
          onClick={() => setActiveIndex(i)}
          key={i}
        >
          {text}
        </button>
      ))}
    </div>
  );
};
