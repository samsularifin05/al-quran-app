/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { FloatingLabelInput } from "../../../components";

const InputOtpComponent: React.FC = () => {
  const inputRefs: React.RefObject<HTMLInputElement>[] = [
    useRef<HTMLInputElement>(null)!,
    useRef<HTMLInputElement>(null)!,
    useRef<HTMLInputElement>(null)!,
    useRef<HTMLInputElement>(null)!,
  ];

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  const focusNextInput = (index: number) => {
    if (index < inputRefs.length - 1 && inputRefs[index + 1]?.current) {
      inputRefs[index + 1].current!.focus();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = event.target;
    if (value.length === event.target.maxLength && index < inputRefs.length - 1) {
      focusNextInput(index);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === "Backspace" && index > 0 && !event.currentTarget.value) {
      inputRefs[index - 1].current?.focus();
    }
  };

  return (
    <div className="flex flex-row gap-2">
      {inputRefs.map((ref, index) => (
        <FloatingLabelInput
          key={index}
          type="tel"
          position="center"
          label=""
          maxLength={1}
          inputRef={ref}
          onChange={e => handleInputChange(e, index)}
          onKeyDown={e => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default InputOtpComponent;
