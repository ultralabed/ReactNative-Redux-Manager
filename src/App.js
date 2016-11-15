import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDdkeyJhBUM9Z3OUiY3cAmsS1UwtSH1ziI',
      authDomain: 'manager-443ae.firebaseapp.com',
      databaseURL: 'https://manager-443ae.firebaseio.com',
      storageBucket: 'manager-443ae.appspot.com',
      messagingSenderId: '858458307799'
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
