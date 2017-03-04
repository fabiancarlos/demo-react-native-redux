import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

function mapStateToProps(state) { return {user: state.userReducers.user }; }
function mapDispatchToProps(dispatch) { return bindActionCreators(Actions, dispatch); }

class Login extends Component {

  onLoginButtonPress(username){
    console.log("PROPS >>", this.props);

    this.props.login({
      username: username,
      password: 'adminadmin'
    });
  }

  render() {

    return (
      <View style={styles.container}>

        <Text>REDUX DEMO</Text>

        {
          !this.props.user.loggedIn &&
            <TouchableHighlight onPress={ () => { this.onLoginButtonPress('admin') } }>
              <Text>Log In</Text>
            </TouchableHighlight>
        }
        {
          this.props.user.loggedIn &&
            <TouchableHighlight onPress={ () => { this.onLoginButtonPress('teste') } }>
              <Text>Logout</Text>
            </TouchableHighlight>
        }
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
