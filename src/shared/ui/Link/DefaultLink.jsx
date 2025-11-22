import clsx from "clsx";
import Link from "next/link";

export const DefaultLink = ({ variant, href, text }) => {
  const variants = {
    primary:
      "h-[36px] w-full px-2md font-bold rounded-md bg-light-violet transition linear duration-300 hover:bg-dark-violet",
  };
  return (
    <Link
      href={href}
      className={clsx("flex items-center justify-center", variants[variant])}
    >
      <span className="text-md">{text}</span>
    </Link>
  );
};
