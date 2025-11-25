import clsx from "clsx";
import { forwardRef } from "react";

const radioList = [
  {
    id: "buy",
    value: "buy",
    label: "Kaufen",
  },
  {
    id: "lease",
    value: "lease",
    label: "Leasen",
  },
];

export const PaymentMethodRadio = forwardRef(
  ({ value, onChange, ...props }, ref) => {
    return (
      <>
        <span className="block font-bold text-md mb-1">Zahlungsart</span>

        <div
          className="flex justify-between w-full border border-grey rounded-md"
          role="group"
        >
          {radioList.map((radio) => {
            const isChecked = value === radio?.value;

            return (
              <label
                key={radio?.id}
                className={clsx(
                  "m-auto w-full text-center p-[9px] cursor-pointer border-r border-grey last:border-0",
                  isChecked && "shadow-card"
                )}
              >
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
                <span className="text-md">{radio?.label}</span>
              </label>
            );
          })}
        </div>
      </>
    );
  }
);

PaymentMethodRadio.displayName = "PaymentMethodRadio";
