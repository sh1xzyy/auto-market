"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

export const GoBackButton = () => {
  const router = useRouter();

  return (
    <button
      className="flex items-center gap-1 py-4 hover:underline"
      type="button"
      onClick={() => router.back()}
    >
      <FaArrowLeft size={16} />
      <span className="text-md text-dark-grey font-bold">
        Zurück zu den Suchergebnissen
      </span>
    </button>
  );
};
