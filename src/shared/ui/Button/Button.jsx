import clsx from "clsx";
import React from "react";

export const Button = ({
  variant,
  text,
  Icon,
  condition,
  children,
  ...props
}) => {
  const transitionStyles = "transition-colors linear duration-300";

  const variants = {
    primary: `h-[44px] text-light-white bg-light-orange rounded-md ${transitionStyles}hover:bg-dark-orange`,
    primary_big: `w-full h-[52px] px-[24px] bg-light-orange rounded-md sm:px-[16px] sm:py-[12px] sm:h-[44px] ${transitionStyles} hover:bg-dark-orange`,
    secondary: `rounded-md border border-super-light-violet text-super-light-violet h-[44px] ${transitionStyles} hover:border-light-violet hover:text-light-violet`,
    tag: `flex items-center justify-center w-full h-9 px-3 py-2 rounded-xs ${transitionStyles} ${condition}`,
  };

  return (
    <button
      className={clsx(
        "flex items-center justify-center w-full gap-2",
        variants[variant]
      )}
      type={props.type === undefined ? "button" : "submit"}
      {...props}
    >
      {Icon && Icon}
      <span className="font-bold text-md">{text}</span>
      {children}
    </button>
  );
};
