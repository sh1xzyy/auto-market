import clsx from "clsx";
import { forwardRef } from "react";

const radioList = [
  {
    id: "brutto",
    name: "pricing",
    value: "brutto",
    label: "Brutto",
    type: "radio",
  },
  {
    id: "netto",
    name: "pricing",
    value: "netto",
    label: "Netto",
    type: "radio",
  },
];

export const PricingRadio = forwardRef(({ value, onChange, ...props }, ref) => {
  return (
    <>
      <span className="block font-bold text-md mb-2">Preisangabe</span>

      <div className="flex gap-2.5" role="group">
        {radioList.map((radio) => {
          const isChecked = value === radio?.value;

          return (
            <label key={radio?.id} className="flex">
              <input
                ref={ref}
                className="visually-hidden"
                type="radio"
                checked={isChecked}
                value={radio?.value}
                onChange={() => onChange(radio?.value)}
                id={radio?.id}
                {...props}
              />
              <div
                className={clsx(
                  "flex w-[15px] h-[15px] rounded-[50%] border border-light-white",
                  isChecked &&
                    "border-none bg-light-white shadow-[inset_0px_0px_5px_5px_var(--color-dark-violet)]"
                )}
              ></div>
              <span className="pl-1 text-md">{radio?.label}</span>
            </label>
          );
        })}
      </div>
    </>
  );
});

PricingRadio.displayName = "PricingRadio";
