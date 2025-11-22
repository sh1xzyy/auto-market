import clsx from "clsx";
import Link from "next/link";

export const IconLink = ({ href, Icon, className, ...props }) => {
  return (
    <Link
      href={href}
      className={clsx("group transition-colors duration-300", className)}
      {...props}
    >
      {Icon && Icon}
    </Link>
  );
};
