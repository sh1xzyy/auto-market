import Image from "next/image";

export const VehicleTypeImage = ({ item }) => {
  return (
    <div className="relative w-[132px] h-[88px] mb-2 lg:mb-4">
      <Image className="object-cover" src={item.image} alt={item.label} fill />
    </div>
  );
};
