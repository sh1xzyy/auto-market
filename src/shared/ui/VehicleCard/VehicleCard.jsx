import { RiParkingBoxLine } from "react-icons/ri";
import Link from "next/link";
import { IconButton } from "../IconButton/IconButton";
import { VehicleImage } from "./ui/VehicleImage/VehicleImage";
import { Price } from "./ui/Price/Price";
import Specs from "./ui/Specs/Specs";
import { Location } from "./ui/Location/Location";

export const VehicleCard = ({ item }) => {
  return (
    <div className="relative w-full max-w-[260px]">
      <IconButton
        icon={RiParkingBoxLine}
        iconClassName="var(--color-super-light-violet)"
        size={16}
        className="absolute flex items-center justify-center top-[7px] right-[7px] w-8 h-8 bg-black rounded-[50%]"
        onClick={() => console.log("added to favorite")}
      />
      <Link href="/vehicles/details">
        <VehicleImage item={item} />
        <div className="flex flex-col gap-2">
          <span className="font-bold">{item?.title}</span>
          <Price item={item} />
          <Specs item={item} />
          {item?.location && <Location location={item.location} />}
        </div>
      </Link>
    </div>
  );
};

export default VehicleCard;
