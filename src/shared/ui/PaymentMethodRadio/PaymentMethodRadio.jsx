"use client";

import clsx from "clsx";
import { useFormContext } from "react-hook-form";

const radioList = [
  {
    id: "payment_method_cash",
    name: "payment_method",
    value: "cash",
    label: "Kaufen",
  },
  {
    id: "payment_method_finance",
    name: "payment_method",
    value: "finance",
    label: "Leasen",
  },
];

export const PaymentMethodRadio = () => {
  const { watch } = useFormContext();
  const payment_method = watch("payment_method");

  return (
    <>
      <span className="block font-bold text-md mb-1">Zahlungsart</span>

      <div
        className="flex justify-between w-full border border-grey rounded-md"
        role="group"
      >
        {radioList.map((radio) => {
          const isChecked = payment_method === radio?.value;
          return (
            <label
              key={radio?.id}
              className={clsx(
                "m-auto w-full text-center p-[9px] cursor-pointer border-r border-grey last:border-0",
                isChecked && "shadow-card"
              )}
            >
              <input
                className="visually-hidden"
                type="radio"
                value={radio?.value}
                name="payment_method"
                id={radio?.id}
              />
              <span className="text-md">{radio?.label}</span>
            </label>
          );
        })}
      </div>
    </>
  );
};
