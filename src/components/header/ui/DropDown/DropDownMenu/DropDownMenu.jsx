import clsx from "clsx";
import { TiArrowSortedUp } from "react-icons/ti";

export const DropDownMenu = ({ variant, children }) => {
  const wrapperVariants = {
    main: "w-[570px] p-[18px] left-1/2 -translate-x-1/2",
  };

  const iconClass = {
    main: "left-1/2 -translate-x-1/2",
  };

  return (
    <div
      className={clsx(
        "absolute h-auto top-[70px] rounded-lg bg-background-light-black z-10 dropDownAnimation",
        wrapperVariants[variant]
      )}
    >
      {children}
      <TiArrowSortedUp
        className={clsx(
          "absolute -top-6 text-background-light-black",
          iconClass[variant]
        )}
        size={40}
      />
    </div>
  );
};
