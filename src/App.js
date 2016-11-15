import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            hi
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;