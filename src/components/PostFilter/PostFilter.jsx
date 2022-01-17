import React from 'react';
import Select from '../UI/Select';
import Input from '../UI/Input';
import classes from './PostFilter.module.css';

export function PostFilter({ items, setItems, filter, setFilter }) {
  const sortPosts = (sort) => {
    setFilter({...filter, sort: sort});
    if (sort === 'title') {
      setItems([...items].sort((a, b) => a.title.localeCompare(b.title)));
    } else if (sort === 'title-reverse') {
      setItems([...items].sort((a, b) => b.title.localeCompare(a.title)));
    }
  };

  const filterPost = (event) => {
    setFilter({ ...filter, query: event.target.value })
  }

  return (
    <div className={ classes.post__filter }>
      <Select
        disabled={ !items.length }
        value={ filter.sort }
        onChange={ sortPosts }
        defaultValue='Sort'
        options={ [
          { value: 'title', name: 'Sorting (A to Z)' },
          { value: 'title-reverse', name: 'Sorting (Z to A)' },
        ] }
      />
      <Input
        value={ filter.query }
        onChange={filterPost}
        type='text'
        placeholder='Search...'
      />
    </div>
  );
}
