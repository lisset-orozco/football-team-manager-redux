import { createStore } from 'redux';

const initialState = {
  players: [],
  titular_players: [],
  substitute_players: []
};

const reducerManager = (state = initialState, action) => {
  return state;
};

export default createStore(reducerManager);
