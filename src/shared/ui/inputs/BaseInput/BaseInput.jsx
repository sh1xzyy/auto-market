import { forwardRef } from "react";

export const BaseInput = forwardRef(({ labelText, Icon, ...props }, ref) => {
  return (
    <label>
      {labelText && (
        <span className="block mb-1 text-md font-bold">{labelText}</span>
      )}
      <div>
        <input
          className="px-[18px] h-14 border border-super-grey rounded-md w-full sm:px-4 sm:py-3 sm:h-11 sm:text-md transition-colors linear duration-300 hover:border-dark-white"
          ref={ref}
          {...props}
        />

        {Icon && Icon}
      </div>
    </label>
  );
});

BaseInput.displayName = "BaseInput";
