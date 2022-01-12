import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <h4>{ props.index + 1 }.</h4>
        { "\u00A0" }
        <p>{ props.item }</p>
      </div>
      <MyButton>Delete</MyButton>
    </div>
  );
};

export default PostItem;