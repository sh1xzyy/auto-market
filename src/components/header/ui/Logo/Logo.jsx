import Link from "next/link";

export const Logo = () => {
  return (
    <Link className="font-black tracking-md text-lg" href="/">
      Auto<span className="text-light-orange">Market</span>
    </Link>
  );
};
