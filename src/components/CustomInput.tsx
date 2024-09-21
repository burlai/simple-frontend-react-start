import { useImperativeHandle, forwardRef, useRef } from "react";

export type CustomInputHandle = {
  focus: () => void;
  clear: () => void;
  setValue: () => void;
};

export const CustomInput = forwardRef<CustomInputHandle>((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      },
      clear: () => {
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      },
      setValue: () => {
        if (inputRef.current) {
          inputRef.current.value = "some text";
        }
      },
    }),
    []
  );

  return <input ref={inputRef} type="text" />;
});
