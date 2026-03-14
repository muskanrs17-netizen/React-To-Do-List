import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import ToggleSwitch from './components/ToggleSwitch';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


function App() {
  const [backgroundOn, setBackgroundOn] = useState(false);

  const toggleBackground = () => {
    setBackgroundOn((prevBackgroundOn) => !prevBackgroundOn);
  };

  return (
    <div
      className={`bg-black-100 min-h-screen flex flex-col items-center justify-start ${
        backgroundOn ? 'bg-on' : 'bg-off'
      }`}
    >
      <Header />
      <AddTodo />
      <TodoList />
      <ToggleSwitch isOn={backgroundOn} handleToggle={toggleBackground} />
      <Footer />
    </div>
  );
}

export default App;

