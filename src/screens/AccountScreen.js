import React, {Component} from 'react';
import {Button} from 'react-native-material-ui';

import routes from '../routes';

export default class AccountScreen extends React.Component {
  static navigationOptions = {
    title: 'Account',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        text="Go back to Home"
        onPress={() =>
          navigate(routes.home)
        }
      />
    );
  }
}