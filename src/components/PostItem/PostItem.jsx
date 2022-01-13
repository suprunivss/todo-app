import React from 'react';
import Button from '../UI/Button';
import classes from './PostItem.module.css';

export function PostItem({ index, post, remove }) {
  return (
    <div className={ classes.post }>
      <div className={ classes.post__content }>
        <h4>{ index }.</h4>
        { "\u00A0" }
        <p>{ post.title }</p>
      </div>
      <Button onClick={() => remove(post)}>Delete</Button>
    </div>
  );
};
