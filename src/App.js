import React from 'react';
import { Provider } from 'react-redux';

import Store from './Store';

const App = () => (
  <Provider store={Store} >
    <main>
      <h1>Football Team Manager App</h1>
    </main>
  </Provider>
)

export default App;
