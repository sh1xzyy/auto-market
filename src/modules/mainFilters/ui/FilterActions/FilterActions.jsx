"use client";

import Link from "next/link";
import { RiResetLeftFill } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";

export const FilterActions = ({ item: { href }, reset }) => {
  const buttonStyles =
    "flex items-center justify-center gap-[7px] w-full h-9 text-light-white transition-colors linear duration-300 hover:text-light-grey";

  return (
    <>
      <button className={buttonStyles} type="button" onClick={() => reset()}>
        <RiResetLeftFill size={18} />
        <span className="font-bold text-md">Zurücksetzen</span>
      </button>
      <Link href={href} className={buttonStyles}>
        <VscSettings size={18} />
        <span className="font-bold text-md">Weitere Filter</span>
      </Link>
    </>
  );
};
