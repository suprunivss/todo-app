import React from 'react';
import classes from './Input.module.css';

export function Input(props) {
  return (
    <input className={classes.Input} {...props}/>
  );
};
