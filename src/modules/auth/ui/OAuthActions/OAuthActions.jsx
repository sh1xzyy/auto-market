"use client";

import { DiApple } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";

const OAuthActions = ({ activeIndex }) => {
  const buttonClass = {
    base: "flex items-center justify-center gap-2sm py-2lg px-xl border-2 border-super-light-violet h-[56px] rounded-md text-super-violet sm:px-lg sm:py-2md sm:h-[44px] transition-colors linear duration-300 hover:border-light-violet",
  };

  const endOfTextByIndex = activeIndex === 0 ? "anmelden" : "registrieren";

  const buttons = [
    {
      Icon: <FcGoogle size={18} />,
      text: `Mit Google ${endOfTextByIndex}`,
      onClick: () => console.log(this.text),
    },
    {
      Icon: <DiApple color="var(--color-light-white)" size={18} />,
      text: `Mit Apple ${endOfTextByIndex}`,
      onClick: () => console.log(this.text),
    },
  ];

  return (
    <div className="flex flex-col gap-md mb-md">
      {buttons.map(({ Icon, text, onClick }, i) => (
        <button
          className={buttonClass["base"]}
          type="button"
          onClick={onClick}
          key={i}
        >
          {Icon}
          <span className="font-bold sm:text-md">{text}</span>
        </button>
      ))}
    </div>
  );
};

export default OAuthActions;
