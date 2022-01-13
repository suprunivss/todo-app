import React from 'react';
import classes from './Button.module.css';

export function Button({ children, ...props }) {
  return (
    <button { ...props } className={ classes.Btn }>
      { children }
    </button>
  );
};
