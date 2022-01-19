import React from 'react';
import Select from '../UI/Select';
import classes from './PostSort.module.css';

export function PostSort({ items, setItems, sort, setSort }) {
  const sortPosts = (value) => {
    setSort(value);
    if (value === 'title') {
      setItems([...items].sort((a, b) => a.title.localeCompare(b.title)));
    } else if (value === 'title-reverse') {
      setItems([...items].sort((a, b) => b.title.localeCompare(a.title)));
    }
  };

  return (
    <div className={ classes.post__sort }>
      <Select
        disabled={ !items.length }
        value={ sort }
        onChange={ sortPosts }
        defaultValue='Sort'
        options={ [
          { value: 'title', name: 'Sorting (A to Z)' },
          { value: 'title-reverse', name: 'Sorting (Z to A)' },
        ] }
      />
    </div>
  );
}
