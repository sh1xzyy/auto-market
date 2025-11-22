import Link from "next/link";

export const DropDownSubItem = ({ item: { src, label, isNew } }) => {
  return (
    <li>
      <div className="flex items-center">
        <Link
          className="block font-medium text-md p-[9px] transition linear duration-300 hover:text-dark-grey hover:underline"
          href={src}
        >
          {label}
        </Link>
        {isNew && (
          <span className="font-bold text-[12px] rounded-md px-[9px] py-0.5 bg-light-blue">
            NEU
          </span>
        )}
      </div>
    </li>
  );
};
