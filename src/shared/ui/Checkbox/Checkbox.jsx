import { useForm } from "react-hook-form";
import { GrFormCheckmark } from "react-icons/gr";

const Checkbox = ({ Icon, text }) => {
  const { isElectro } = useForm();
  const isChecked = isElectro;

  return (
    <>
      <label className="col-span-2 inline-flex items-center gap-[7px] font-bold text-md cursor-pointer">
        <input
          className="visually-hidden"
          type="checkbox"
          name="isElectro"
          checked={isElectro}
        />
        <div className="flex justify-center items-center w-5 h-5 rounded-xs border border-dark-grey">
          {isChecked && <GrFormCheckmark size={20} />}
        </div>
        {text}
        {Icon && Icon}
      </label>
    </>
  );
};

export default Checkbox;
