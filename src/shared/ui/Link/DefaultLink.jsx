import clsx from "clsx";
import Link from "next/link";

export const DefaultLink = ({ variant, href, Icon, text }) => {
  const variants = {
    primary:
      "h-[36px] px-[12px] font-bold rounded-md text-[14px] bg-light-violet transition linear duration-300 hover:bg-dark-violet",
    secondary:
      "gap-2 rounded-md h-[44px] text-[16px] bg-light-orange transition-colors linear duration-300 hover:bg-dark-orange",
  };
  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center justify-center w-full",
        variants[variant]
      )}
    >
      {Icon && <Icon width={16} height={16} />}
      <span>{text}</span>
    </Link>
  );
};
