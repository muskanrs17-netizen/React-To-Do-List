import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todosAppState');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todosAppState', serializedState);
  } catch (err) {
  }
};

const persistedState = loadState();

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;