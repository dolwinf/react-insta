import React from 'react';
import TabNavigator from './screens/Tabnavigator';
import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);




class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <TabNavigator />
      </Provider>
    );
  }
}

export default App;


