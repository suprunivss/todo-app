import React, { useEffect, useMemo, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

function App() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('item')));
  }, []);

  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(items));
  }, [items]);

  const filterPost = useMemo(() => {
    if (filter.query) {
      return [...items].filter(item => item.title.toLowerCase().includes(filter.query.toLowerCase()));
    }
    return items;
  }, [items, filter.query]);

  const createPost = (newPost) => {
    setItems((prevItems) => ([...prevItems, newPost]));
    setFilter({ sort: '', query: '' });
  };

  const removePost = (post) => {
    setItems(items.filter(item => item.id !== post.id));
    setFilter({ sort: '', query: '' });
  };

  return (
    <div className="App post container">
      <PostForm create={ createPost }/>
      <PostFilter
        filter={ filter }
        setFilter={ setFilter }
        items={ items }
        setItems={ setItems }/>
      { items.length
        ? <PostList remove={ removePost } items={ filterPost }/>
        : <h2 className="post__empty">Todo List Empty</h2>
      }
    </div>
  );
}

export default App;
