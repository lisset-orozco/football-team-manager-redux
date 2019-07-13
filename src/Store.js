import { createStore } from 'redux';

import dataPlayers from './faker/players.json'

const initialState = {
  players: dataPlayers,
  titular_players: [],
  substitute_players: []
};

const reducerManager = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TITULAR':
      return {
        ...state,
        titular_players: state.titular_players.concat(action.player),
        players: state.players.filter(p => p.id !== action.player.id)
      }

    case 'ADD_SUBSTITUTE':
      return {
        ...state,
        substitute_players: state.substitute_players.concat(action.player),
        players: state.players.filter(p => p.id !== action.player.id)
      }
    
    case 'REMOVE_TITULAR':
      return {
        ...state,
        players: state.players.concat(action.player),
        titular_players: state.titular_players.filter(p => p.id !== action.player.id)
      }

    default:
      return {
        ...state
      }
  }
};

export default createStore(reducerManager);
