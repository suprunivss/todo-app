import React, { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import classes from './PostForm.module.css';

export function PostForm({ create }) {
  const [post, setPost] = useState({ title: '' });
  const [disabled, setDisabled] = useState(true);

  function addNewPost(e) {
    e.preventDefault();

    const newPost = {
      ...post, id: Date.now(),
    };

    create(newPost);
    setDisabled(true);
    setPost({ title: '' });
  }

  return (
    <form className={ classes.post__add }>
      <Input
        value={ post.title }
        type="text"
        onChange={ e => {
          setPost({ title: e.target.value });
          setDisabled(!e.target.value);
        } }
      />
      <Button
        type="submit"
        disabled={ disabled }
        onClick={ addNewPost }
      >
        + Add Item
      </Button>
    </form>
  );
}
