import { forwardRef } from "react";

const Input = forwardRef(
  ({ value, name, onChange, placeholder, type, ...props }, ref) => {
    return (
      <>
        <input
          ref={ref}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          {...props}
        />
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;
