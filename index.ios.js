/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Login from './app/components/Login';
import userReducers from './app/reducers/user';

let store = createStore(combineReducers({userReducers}));

class App extends Component{
  render(){
    return(
      <Login/>
    );
  }
};

export default class TestReactRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestReactRedux', () => TestReactRedux);
