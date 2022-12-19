import React from "react";

import styles from "../CommonInput/InputField.module.scss"

export const InputField = ({ value, label, placeholder, type, onChange }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <div className={styles.form}>
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        className={styles["input-wrapper"]}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export const MinInput = ({value, label, placeholder, type, onChange}) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <div className={styles["form-wrapper"]}>
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        className={styles["min-input"]}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}
