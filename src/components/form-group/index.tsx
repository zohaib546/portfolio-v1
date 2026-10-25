import { ChangeEvent } from "react";
import { BiError } from "react-icons/bi";

interface IFormGroup {
  required?: boolean;
  type: "text" | "email" | "textarea";
  placeholder: string;
  id: string;
  autocomplete?: "off" | "on";
  name: string;
  error?: string;
  onChange?: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
}

const FormGroup = ({
  required,
  type,
  placeholder,
  id,
  autocomplete,
  name,
  error,
  onChange,
}: IFormGroup) => {
  return (
    <div className="flex flex-col gap-2">
      {/* <label htmlFor={id} className="form__label">
        {label} {required && <span className="text-[#D17B5D]">*</span>}
      </label> */}
      {type === "textarea" ? (
        <textarea
          className={`form__input min-h-[120px] ${error ? "form__input--error" : ""}`}
          placeholder={placeholder}
          id={id}
          autoComplete={autocomplete}
          name={name}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          className={`form__input ${error ? "form__input--error" : ""}`}
          type={type}
          placeholder={placeholder}
          id={id}
          autoComplete={autocomplete}
          name={name}
          onChange={onChange}
        />
      )}
      {error && (
        <div className="font-dm-mono flex items-center gap-1 text-xs text-[#D17B5D]">
          <BiError className="mb-[2px] text-sm" /> {error}
        </div>
      )}
    </div>
  );
};

export default FormGroup;
