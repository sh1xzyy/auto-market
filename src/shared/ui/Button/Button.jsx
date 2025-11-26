import clsx from "clsx";
import React from "react";

export const Button = ({ variant, text, Icon, ...props }) => {
  const variants = {
    primary:
      "h-[36px] text-light-white bg-light-orange rounded-md transition-colors linear duration-300 hover:bg-dark-orange",
    secondary:
      "rounded-md border border-super-light-violet text-super-light-violet h-[44px] transition-colors linear duration-300 hover:border-light-violet hover:text-light-violet",
  };

  return (
    <button
      className={clsx(
        "flex items-center justify-center w-full gap-2",
        variants[variant]
      )}
      {...props}
    >
      {Icon && Icon}
      <span className="font-bold text-md">{text}</span>
    </button>
  );
};
