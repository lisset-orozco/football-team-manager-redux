import React from 'react';
import { Provider } from 'react-redux';

import Store from './Store';
import Players from './components/Players';
import SelectedTeam from './components/SelectedTeam';

const App = () => (
  <Provider store={Store} >
    <main>
      <h1>Football Team Manager</h1>
      <Players/>
      <SelectedTeam/>
    </main>
  </Provider>
)

export default App;
