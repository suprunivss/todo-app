import React, { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import classes from './PostForm.module.css';

function PostFormComponent({ onCreatePost }) {
  const [post, setPost] = useState({ title: '' });
  const [disabled, setDisabled] = useState(true);

  function onAddNewPost(event) {
    event.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };

    onCreatePost(newPost);
    setDisabled(true);
    setPost({ title: '' });
  }

  const onFilterPosts = ({ target }) => {
    setPost({ title: target.value });
    setDisabled(!target.value);
  };

  return (
    <form className={ classes.post }>
      <Input
        value={ post.title }
        type="text"
        onChange={ onFilterPosts }
      />
      <Button
        type="submit"
        disabled={ disabled }
        onClick={ onAddNewPost }
      >
        + Add Item
      </Button>
    </form>
  );
}

export const PostForm = React.memo(PostFormComponent);
