import clsx from "clsx";

export const IconButton = ({
  icon: Icon,
  size = 20,
  className = "",
  iconClassName = "group-hover:fill-light-white",
  children,
  ...props
}) => {
  return (
    <button
      className={clsx("group transition-colors duration-300", className)}
      type="button"
      {...props}
    >
      <Icon
        className={clsx(
          "fill-light-grey transition-colors duration-300",
          iconClassName
        )}
        size={size}
      />
      {children}
    </button>
  );
};
