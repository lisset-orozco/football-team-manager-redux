import { createStore } from 'redux';

import dataPlayers from './faker/players.json'

const initialState = {
  players: dataPlayers,
  titular_players: [],
  substitute_players: []
};

const reducerManager = (state = initialState, action) => {
  return state;
};

export default createStore(reducerManager);
