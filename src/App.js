import React, { useMemo, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

function App() {
  const [items, setItems] = useState([
    { id: 1, title: 'Купить гвозди' },
    { id: 2, title: 'Купить молоток' },
  ]);
  const [filter, setFilter] = useState({ sort: '', query: '' });

  const createPost = (newPost) => {
    setItems([...items, newPost]);
    setFilter({ sort: '', query: '' });
  };

  const removePost = (post) => {
    setItems(items.filter(item => item.id !== post.id));
    setFilter({ sort: '', query: '' });
  };

  const filterPost = useMemo(() => {
    if (filter.query) {
      return [...items].filter(item => item.title.toLowerCase().includes(filter.query.toLowerCase()))
    }
    return items
  }, [items, filter.query])

  return (
    <div className='App post container'>
      <PostForm create={ createPost }/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
        items={ items }
        setItems={ setItems }/>
      { items.length
        ? <PostList remove={ removePost } items={ filterPost }/>
        : <h2 className='post__empty' >Todo List Empty</h2>
      }
    </div>
  );
}

export default App;
