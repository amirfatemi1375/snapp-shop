import React from 'react';
import styles from './Button.module.scss';    

type ButtonProps= {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?:boolean;
}
const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button', className = styles['btnColor'],disabled=false }) => {
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