import React from "react";

function FormRow({ type, name, value, handleChange, labelText, disabled }) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input"
        disabled={disabled || ""}
      />
    </div>
  );
}

export default FormRow;
