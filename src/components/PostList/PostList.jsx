import React from 'react';
import PostItem from '../PostItem';

export function PostList(props) {
  return (
    <div>
      { props.items.map((post, index) => {
        return <PostItem remove={ props.remove } post={ post } index={ index + 1 } key={ post.id }/>;
      }) }
    </div>
  );
}
