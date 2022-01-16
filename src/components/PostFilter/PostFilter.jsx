import React, { useState } from 'react';
import Select from '../UI/Select';
import Input from '../UI/Input';
import classes from './PostFilter.module.css';

export function PostFilter({ items, setItems }) {
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    if (sort === 'title') {
      setItems([...items].sort((a, b) => a.title.localeCompare(b.title)));
    } else if (sort === 'title-reverse') {
      setItems([...items].sort((a, b) => b.title.localeCompare(a.title)));
    }
  };

  return (
    <div className={ classes.post__filter }>
      <Select
        disabled={ !items.length }
        value={ selectedSort }
        onChange={ sortPosts }
        defaultValue='Sort'
        options={ [
          { value: 'title', name: 'Sorting (A to Z)' },
          { value: 'title-reverse', name: 'Sorting (Z to A)' },
        ] }
      />
      <Input
        value={ searchQuery }
        onChange={ e => setSearchQuery(e.target.value) }
        type='text'
        placeholder='Search...'
      />
    </div>
  );
}
