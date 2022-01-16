import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

function App() {
  const [items, setItems] = useState([
    { id: 1, title: 'Купить гвозди' },
    { id: 2, title: 'Купить молоток' },
  ]);

  const createPost = (newPost) => {
    setItems([...items, newPost]);
  };

  const removePost = (post) => {
    setItems(items.filter(item => item.id !== post.id));
  };

  return (
    <div className='App post container'>
      <PostForm create={ createPost }/>
      <PostFilter items={ items } setItems={ setItems }/>
      { items.length
        ? <PostList remove={ removePost } items={ items }/>
        : <h2 className='post__empty' >Todo List Empty</h2>
      }
    </div>
  );
}

export default App;
