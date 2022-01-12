import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '' });

  function addNewPost(e) {
    e.preventDefault();
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({ title: '' });
  }

  return (
    <form className="post__add">
      <MyInput
        value={post.title}
        type="text"
        onChange={e => setPost({ title: e.target.value })}
      />
      <MyButton type='submit' onClick={addNewPost}>+ Add Item</MyButton>
    </form>
  );
};

export default PostForm;