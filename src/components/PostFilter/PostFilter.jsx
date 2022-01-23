import React from 'react';
import Input from '../UI/Input';
import classes from './PostFilter.module.css';

function PostFilterComponent({ filterString, setFilterString }) {
  return (
    <div className={ classes.post }>
      <Input
        value={ filterString }
        onChange={ ({ target }) => setFilterString(target.value) }
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}

export const PostFilter = React.memo(PostFilterComponent);
