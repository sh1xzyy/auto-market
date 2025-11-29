import clsx from "clsx";

export const VehicleTypeInfo = ({ item }) => {
  return (
    <div className="flex gap-2 items-center">
      <div
        className={clsx(
          "flex items-center justify-center rounded-md w-10 h-10",
          item?.type === "electro" ? "bg-light-blue" : "bg-grey"
        )}
      >
        {item.icon}
      </div>
      <div className="flex flex-col">
        <span className="font-bold">{item.label}</span>
        <span className="text-sm text-dark-grey">{item.subtitle}</span>
      </div>
    </div>
  );
};
