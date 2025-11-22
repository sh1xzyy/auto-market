import Image from "next/image";
import Link from "next/link";

export const DropDownItemMain = ({ item: { thumb, moreInfo } }) => {
  return (
    <>
      <Image
        className="rounded-md object-cover"
        src={thumb.src}
        width={160}
        height={105}
        alt={thumb.alt}
        loading="eager"
      />
      <Link
        className="block font-medium -ml-[9px] mt-[9px] p-[9px] text-md text-dark-grey transition linear duration-300 hover:text-dark-white hover:underline"
        href={moreInfo.src}
      >
        {moreInfo.label}
      </Link>
    </>
  );
};
