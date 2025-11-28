import { routes } from "@/shared/constants/routes";
import { DefaultLink } from "@/shared/ui/Link/DefaultLink";
import { GiPriceTag } from "react-icons/gi";
import { IoCarSportOutline } from "react-icons/io5";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { TfiWallet } from "react-icons/tfi";

export const SpecialOfferCard = ({ item, openIndex }) => {
  const iconStyle = "var(--color-super-light-violet) min-h-12 min-w-12";

  const icons = [
    <GiPriceTag className={iconStyle} key="price tag" />,
    <TfiWallet className={iconStyle} key="wallet" />,
    <MdEnergySavingsLeaf className={iconStyle} key="energy savings" />,
    <IoCarSportOutline className={iconStyle} key="sport outline" />,
  ];
  return (
    <div className="max-w-[260px] flex flex-col gap-y-4 p-4 bg-dark-blue rounded-lg">
      {icons[openIndex]}

      <h3 className="text-lg font-bold">{item.title}</h3>
      <p className="text-md font-medium">{item.description}</p>
      <DefaultLink
        variant="primary_big"
        text="Mehr Angebote"
        href={routes.hotDeals}
      />
    </div>
  );
};
