import React from 'react';
import Header from './components/header/Header';
import  "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header items={[ 'About Us', 'News', 'Our Director' ]}/>
    </div>
  );
};

export default App;
