import clsx from "clsx";

export const ContentCard = ({ children, variant }) => {
  const classByVariant = {
    base: "p-4 bg-background-light-black border-t border-b border-grey lg:border lg:rounded-lg",
    primary: "lg:p-[24px]",
  };

  return (
    <div className={clsx(classByVariant.base, classByVariant[variant])}>
      {children}
    </div>
  );
};
