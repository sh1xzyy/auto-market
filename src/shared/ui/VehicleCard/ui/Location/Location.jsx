import { IoLocationOutline } from "react-icons/io5";

export const Location = ({ location }) => {
  return (
    <div className="flex items-center gap-1 text-sm text-dark-grey">
      <IoLocationOutline size={16} />
      {location ? (
        <>
          <span>{location.index}</span>
          <span>{location.city}</span>
        </>
      ) : (
        "Without location"
      )}
    </div>
  );
};
