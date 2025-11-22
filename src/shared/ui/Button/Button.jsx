import clsx from "clsx";
import React from "react";

export const Button = ({ variant, text, Icon, ...props }) => {
  const variants = {
    primary:
      "gap-[7px] h-[36px] text-light-white bg-light-orange rounded-md transition-colors linear duration-300 hover:bg-dark-orange",
    secondary:
      "gap-[8px] rounded-md border border-super-light-violet text-super-light-violet h-[44px] transition-colors linear duration-300 hover:border-light-violet hover:text-light-violet",
  };

  return (
    <button
      className={clsx(
        "flex items-center justify-center w-full",
        variants[variant]
      )}
      {...props}
    >
      {Icon && <Icon width={16} height={16} />}
      <span>{text}</span>
    </button>
  );
};
