import { useField } from "formik";
import { ComponentPropsWithoutRef, useRef } from "react";

export type InputProps = ComponentPropsWithoutRef<"input"> & {
  name: string;
  prefix?: string;
  suffix?: React.ReactNode;
  label?: string;
};

export const Input = ({ prefix, suffix, label, ...props }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [field] = useField(props);

  return (
    <div className="flex flex-col">
      {label ? (
        <label
          htmlFor={props.id || props.name}
          className="mb-4 font-bold text-gray-400"
        >
          {label}
        </label>
      ) : null}
      <div
        onClick={() => inputRef.current?.focus()}
        className="flex flex-row items-center gap-4 rounded-lg border-2 border-teal-400 p-4 text-black dark:text-white"
      >
        {prefix ? (
          <span className="select-none text-sm text-gray-400">{prefix}</span>
        ) : null}
        <input
          {...props}
          {...field}
          ref={inputRef}
          className="flex-1 bg-transparent outline-none"
        />
        {suffix ? suffix : null}
      </div>
    </div>
  );
};
