"use client";

import { useState } from "react";
import { BaseInput } from "../BaseInput/BaseInput";
import { IconButton } from "../../IconButton/IconButton";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

export const PasswordInput = ({ ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="relative">
      <BaseInput {...props} type={isPasswordVisible ? "text" : "password"} />

      <IconButton
        className="absolute top-1/2 right-[18px] -translate-y-1/2"
        icon={isPasswordVisible ? FaRegEyeSlash : FaRegEye}
        onClick={() => setIsPasswordVisible((prev) => !prev)}
        size={16}
        aria-label={isPasswordVisible ? "Приховати пароль" : "Показати пароль"}
      />
    </div>
  );
};
