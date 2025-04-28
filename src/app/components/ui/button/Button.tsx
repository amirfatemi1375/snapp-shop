import React from "react";
import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.model";

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = "button",
  className = styles["btnColor"],
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={` ${styles.btn} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
