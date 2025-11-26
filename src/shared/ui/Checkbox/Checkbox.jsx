import { forwardRef } from "react";
import { GrFormCheckmark } from "react-icons/gr";

export const Checkbox = forwardRef(
  ({ Icon, text, value, onChange, ...props }, ref) => {
    return (
      <label className="col-span-2 inline-flex items-center gap-[7px] cursor-pointer">
        <input
          ref={ref}
          className="visually-hidden"
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          {...props}
        />
        <div className="flex justify-center items-center w-5 h-5 rounded-xs border border-dark-grey">
          {value && <GrFormCheckmark size={20} />}
        </div>
        <div className="flex gap-0.5">
          <span className="font-bold text-md">{text}</span>
          {Icon && Icon}
        </div>
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
