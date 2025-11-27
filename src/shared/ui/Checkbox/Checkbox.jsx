import clsx from "clsx";
import { forwardRef } from "react";
import { GrFormCheckmark } from "react-icons/gr";

export const Checkbox = forwardRef(
  ({ Icon, text, value, onChange, variant, children, ...props }, ref) => {
    const variants = {
      base: "cursor-pointer gap-[7px]",
      primary: "inline-flex col-span-2 items-center",
      secondary: "grid grid-cols-[auto_auto]",
    };

    return (
      <label className={`${variants["base"]} ${variants[variant]}`}>
        <input
          ref={ref}
          className="visually-hidden"
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          {...props}
        />
        <div
          className={clsx(
            "flex justify-center items-center w-5 h-5 rounded-xs border border-dark-grey transition-colors linear duration-300",
            value && "bg-light-violet border-0"
          )}
        >
          {value && <GrFormCheckmark size={20} />}
        </div>
        <div className="flex gap-0.5">
          <span className="font-bold text-md leading-5">
            {text ? text : children && children}
          </span>
          {Icon && Icon}
        </div>
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
