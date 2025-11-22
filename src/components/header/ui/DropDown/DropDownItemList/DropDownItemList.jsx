import { DropDownSubItem } from "../DropDownSubItem/DropDownSubItem";

export const DropDownItemList = ({ list }) => {
  return (
    <ul>
      {list.map((item, i) => (
        <DropDownSubItem key={i} item={item} />
      ))}
    </ul>
  );
};
