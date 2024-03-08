import React, { useState } from "react";
import { Eye, EyeClose } from "../assets";

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: string;
  password?: boolean;
  onClick?: () => void;
  postition?: "center";
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  password,
  postition,
  onClick,
  icon,
  ...rest
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [filled, setFilled] = useState<boolean>(false);
  const [passwordActive, setPassword] = useState<boolean>(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    setFilled(e.target.value !== "");
  };

  return (
    <div className="relative w-full">
      <div className={`flex items-center`}>
        <input
          {...rest}
          id={label}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`${postition === "center" && "text-center"} ${password && !passwordActive && "password-hide"} w-full appearance-none rounded-md border px-3 py-3 leading-tight text-gray-700 focus:outline-none ${focused || filled ? "border-color2 " : ""}`}
        />
        {icon && (
          <span
            onClick={() => {
              setPassword(!passwordActive);
              onClick && onClick();
            }}
            className="absolute inset-y-0 right-0 z-10 flex cursor-pointer items-center pr-3 "
          >
            {password ? (
              <img src={passwordActive ? Eye : EyeClose} alt="icon" className="w-6" />
            ) : (
              <img src={icon} alt="icon" className="w-6" />
            )}
          </span>
        )}
      </div>
      <label
        htmlFor={label}
        className={`absolute left-3 cursor-text ${
          focused || filled ? "text-color3 -top-2 bg-white px-1 text-xs" : "text-color3 top-3"
        } transition-all duration-300`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
