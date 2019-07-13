import React from 'react';
import { Provider } from 'react-redux';

import Store from './Store';
import Players from './components/Players';

const App = () => (
  <Provider store={Store} >
    <main>
      <h1>Football Team Manager</h1>
      <Players/>
    </main>
  </Provider>
)

export default App;
