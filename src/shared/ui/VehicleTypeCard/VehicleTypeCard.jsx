import clsx from "clsx";
import Link from "next/link";
import { VehicleTypeImage } from "./ui/VehicleTypeImage/VehicleTypeImage";
import { VehicleTypeInfo } from "./ui/VehicleTypeInfo/VehicleTypeInfo";

export const VehicleTypeCard = ({ item }) => {
  return (
    <Link href={item.href}>
      <div
        className={clsx(
          "flex flex-col items-center p-3 rounded-lg lg:p-4",
          item.type === "electro" ? "bg-dark-blue" : "bg-background-dark-black"
        )}
      >
        <VehicleTypeImage item={item} />
        <VehicleTypeInfo item={item} />
      </div>
    </Link>
  );
};
