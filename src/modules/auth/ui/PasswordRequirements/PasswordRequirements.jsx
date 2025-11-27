"use client";

import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import { GrFormCheckmark } from "react-icons/gr";

const PASSWORD_REQUIREMENTS = [
  "Min. 8 Zeichen",
  "Buchstaben",
  "Zahlen oder Sonderzeichen !$%?-_+#",
];

export const PasswordRequirements = () => {
  const { watch } = useFormContext();
  const password = watch("password");

  return (
    <div className="mb-[18px]">
      <ul className="grid grid-cols-[max-content_auto] gap-y-[9px] gap-x-[18px]">
        {PASSWORD_REQUIREMENTS.map((label, i) => {
          const isValid =
            (i === 0 && password.length >= 8) ||
            (i === 1 && /[A-Za-z]/.test(password)) ||
            (i === 2 && /[!$%?\-_\+#]/.test(password));

          return (
            <li className={clsx("flex items", i === 2 && "col-span-2")} key={i}>
              <div
                className={clsx(
                  "flex items-center justify-center w-[15px] h-[15px] border border-dark-grey rounded-[50%] mr-[7px] transition-colors linear duration-300",
                  isValid && "bg-light-green border-0"
                )}
              >
                {isValid && (
                  <GrFormCheckmark color="var(--color-black)" size={20} />
                )}
              </div>
              <span className="text-md text-light-grey">{label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
