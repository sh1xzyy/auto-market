import Link from "next/link";

export const DefaultLink = ({ variant, href, Icon, text, ...props }) => {
  const centeredStyles = "flex items-center justify-center w-full";

  const variants = {
    primary: `${centeredStyles} h-[36px] px-[12px] font-bold rounded-md text-[14px] bg-light-violet transition linear duration-300 hover:bg-dark-violet`,
    secondary: `${centeredStyles} gap-2 rounded-md h-[44px] text-[16px] bg-light-orange transition-colors linear duration-300 hover:bg-dark-orange`,
    default: "group block p-[9px]",
  };

  return (
    <Link href={href} className={variants[variant]} {...props}>
      {Icon && <Icon size={16} />}
      {text && <span>{text}</span>}
    </Link>
  );
};
