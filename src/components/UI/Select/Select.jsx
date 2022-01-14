import React from 'react';
import classes from './Select.module.css';

export function Select({options, defaultValue, value, onChange,disabled}) {
  return (
    <select
      className={classes.Select}
      disabled={disabled}
      value={value}
      onChange={event => onChange(event.target.value)}
    >
      <option disabled value="">{defaultValue}</option>
      {options.map(option =>
        <option key={option.value} value={option.value}>
          {option.name}
        </option>)}
    </select>
  );
};
