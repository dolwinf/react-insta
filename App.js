import React from 'react';
import SwitchNavigator from './navigation/SwitchNavigator';
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
      <SwitchNavigator />
      </Provider>
    );
  }
}

export default App;


