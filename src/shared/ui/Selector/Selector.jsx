import { IconButton } from "../IconButton/IconButton";
import { CustomSelector } from "./ui/CustomSelector/CustomSelector";

export const Selector = ({ item }) => {
  return (
    <>
      <label
        className="flex items-center gap-[7px] font-bold text-md mb-1"
        htmlFor={item?.id}
      >
        {item?.label}
        {item?.labelIcon && (
          <IconButton
            icon={item?.labelIcon}
            size={16}
            onClick={() => console.log("some drop down menu")}
            aria-label={item?.ariaLabel}
          />
        )}
      </label>
      <CustomSelector name={item?.name} id={item?.id} placeholder="Beliebig" />
    </>
  );
};
