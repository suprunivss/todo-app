import React, { useEffect, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostSort from './components/PostSort';
import PostFilter from './components/PostFilter';

function App() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [postsFiltering, setPostsFiltering] = useState('')

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('item')));
  }, []);

  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(items));
  }, [items]);

  const createPost = (newPost) => {
    setItems((prevItems) => ([...prevItems, newPost]));
    setFilter('');
    setSort('');
  };

  const removePost = (post) => {
    setItems(items.filter(item => item.id !== post.id));
    setFilter('');
    setSort('');
  };

  return (
    <div className="App post container">
      <PostForm create={ createPost }/>
      <PostSort
        sort={ sort }
        setSort={ setSort }
        items={ items }
        setItems={ setItems }/>
      <PostFilter
        setPostsFiltering={setPostsFiltering}
        items={items}
        filter={filter}
        setFilter={setFilter}
      />
      { items.length
        ? <PostList remove={ removePost } items={ postsFiltering }/>
        : <h2 className="post__empty">Todo List Empty</h2>
      }
    </div>
  );
}

export default App;
