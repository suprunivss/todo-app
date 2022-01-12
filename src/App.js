import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [items, setItems] = useState([
    { id: 1, title: 'Купить гвозди'},
    { id: 2, title: 'Купить молоток'},
  ]);

  const createPost = (newPost) => {
    setItems([...items, newPost])
  }

  const removePost = (post) => {
    setItems(items.filter(item => item.id !== post.id))
  }

  return (
    <div className="App container">
      <PostForm create={createPost}/>
      {items.length !== 0
        ? <PostList remove={removePost} items={items}/>
        : <h2 style={{textAlign: 'center', margin: 30, fontSize: 30}}>Todo List Empty</h2>
      }
    </div>
  );
}

export default App;
