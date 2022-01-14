import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Select from './components/UI/Select';

function App() {
  const [items, setItems] = useState([
    { id: 1, title: 'Купить гвозди'},
    { id: 2, title: 'Купить молоток'},
  ]);

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setItems([...items, newPost]);
    setSelectedSort('')
  }

  const removePost = (post) => {
    setItems(items.filter(item => item.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    if(sort === 'title') {
      setItems([...items].sort((a,b) => a.title.localeCompare(b.title)))
    } else if (sort === 'title-reverse') {
      setItems([...items].sort((a,b) => b.title.localeCompare(a.title)))
    }
  }

  return (
    <div className="App container">
      <PostForm create={createPost}/>
      <div>
        <Select
          disabled={!items.length}
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Sort'
          options={[
            {value: 'title', name: 'Sorting (A to Z)'},
            {value: 'title-reverse', name: 'Sorting (Z to A)'},
          ]}
        />
      </div>
      {items.length
        ? <PostList remove={removePost} items={items}/>
        : <h2 style={{textAlign: 'center', margin: 30, fontSize: 30}}>Todo List Empty</h2>
      }
    </div>
  );
}

export default App;
