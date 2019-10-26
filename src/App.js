import React from 'react';

import './App.css';

import Toolbar from './components/toolbar/Toolbar';
import PostList from './components/postslist/PostList';

function App(){
  return (
    <>
      <Toolbar />
      <PostList />
    </>
  );  
}

export default App;