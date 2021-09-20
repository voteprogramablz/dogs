import React from "react";
import styles from "./Input.module.css"

const Input = ({ label, type, name }) => {
  console.log(styles);
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input className={styles.input} id={name} name={name} type={type} />
      <p className={styles.error}>Error</p>
    </div>
  );
};

export default Input;
