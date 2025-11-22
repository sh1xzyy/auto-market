import clsx from "clsx";
import { DropDownItemMain } from "../DropDownItemMain/DropDownItemMain";
import { DropDownItemList } from "../DropDownItemList/DropDownItemList";

export const DropDownMainList = ({ list }) => {
  return (
    <ul className="flex gap-[18px]">
      {list.map((item, i) => {
        return (
          <li key={i}>
            <span
              className={clsx(
                "block text-sm text-dark-grey",
                i !== 0 && "px-[9px]",
                i === 0 && "mb-[9px]"
              )}
            >
              {item.title}
            </span>
            {i === 0 ? (
              <DropDownItemMain item={item} />
            ) : (
              <DropDownItemList list={item.list} />
            )}
          </li>
        );
      })}
    </ul>
  );
};
