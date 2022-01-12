import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = ({ index, post, remove }) => {
  return (
    <div className="post">
      <div className="post__content">
        <h4>{ index }.</h4>
        { "\u00A0" }
        <p>{ post.title }</p>
      </div>
      <MyButton onClick={() => remove(post)}>Delete</MyButton>
    </div>
  );
};

export default PostItem;