import React from 'react';
import Select from '../UI/Select';
import classes from './PostSort.module.css';

function PostSortComponent({ posts, sortOption, sortPosts }) {
  return (
    <div className={ classes.post }>
      <Select
        disabled={ !posts.length }
        value={ sortOption }
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

export const PostSort = React.memo(PostSortComponent)

