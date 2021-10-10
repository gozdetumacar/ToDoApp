import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Gemunu Libre']
  }
});

function App() {

  return (
    <div className="container">
      <TodoList />
    </div>
  );
}

export default App;
