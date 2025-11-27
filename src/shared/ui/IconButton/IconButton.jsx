import clsx from "clsx";

export const IconButton = ({
  icon: Icon,
  size = 20,
  className = "",
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
        className={
          "fill-light-grey transition-colors duration-300 group-hover:fill-light-white"
        }
        size={size}
      />
      {children}
    </button>
  );
};
