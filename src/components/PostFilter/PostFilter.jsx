import React, { useMemo } from 'react';
import Input from '../UI/Input';
import classes from './PostFilter.module.css';

export function PostFilter({ items, filter, setFilter, setPostsFiltering }) {
  const filterPosts = useMemo(() => {
    if (filter) {
      return [...items].filter(item => item.title.toLowerCase().includes(filter.toLowerCase()));
    }
    return items;
  }, [items, filter]);

  setPostsFiltering(filterPosts);

  return (
    <div className={ classes.post__filter }>
      <Input
        value={ filter }
        onChange={ (event) => setFilter(event.target.value) }
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}
