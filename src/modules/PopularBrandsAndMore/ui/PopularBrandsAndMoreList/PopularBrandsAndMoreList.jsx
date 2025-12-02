import Link from "next/link";
import { POPULAR_BRANDS_AND_MORE } from "../../temporary/popularBrandsAndMore";
import { IoIosArrowDown } from "react-icons/io";

export const PopularBrandsAndMoreList = () => {
  return (
    <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-y-6">
      {POPULAR_BRANDS_AND_MORE?.map(({ brand, list }, i) => (
        <li key={i}>
          <h3 className="text-md font-bold mb-2">{brand}</h3>
          <ul className="flex flex-col gap-1">
            {list?.map(({ href, model }, i) => (
              <li key={i}>
                <Link className="group flex items-center" href={href}>
                  <IoIosArrowDown
                    className="-rotate-90 mr-1"
                    color="var(--color-dark-grey)"
                    size={16}
                  />
                  <span className="font-bold transition-colors linear duration-300 group-hover:text-dark-grey group-hover:underline">
                    {model}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
