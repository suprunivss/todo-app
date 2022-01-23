import React, { useCallback, useEffect, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostSort from './components/PostSort';
import PostFilter from './components/PostFilter';

function App() {
  const [posts, setPosts] = useState([]);
  const [filterString, setFilterString] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const getLocalStorageItem = JSON.parse(localStorage.getItem('item'));
    if (getLocalStorageItem !== null) {
      setPosts(getLocalStorageItem);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(posts));
  }, [posts]);

  const onCreatePost = useCallback((newPost) => {
    setPosts((prevPosts) => ([...prevPosts, newPost]));
    setFilterString('');
  }, [setPosts, setFilterString]);

  const onRemovePost = (post) => {
    setPosts(posts.filter(({ id }) => id !== post.id));
    setFilterString('');
    setSortOption('');
  };
  const filteredPosts = posts.filter(({ title }) => title.toLowerCase().includes(filterString.toLowerCase()));

  return (
    <div className="App post container">
      <PostForm onCreatePost={ onCreatePost }/>
      <PostSort
        sort={ sortOption }
        setSort={ setSortOption }
        items={ posts }
        setItems={ setPosts }/>
      <PostFilter
        filterString={ filterString }
        setFilterString={ setFilterString }
      />
      { posts.length
        ? <PostList remove={ onRemovePost } items={ filteredPosts }/>
        : <h2 className="post__empty">Todo List Empty</h2>
      }
    </div>
  );
}

export default App;
