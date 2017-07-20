import React, {Component} from 'react';

import WelcomeCard from '../components/WelcomeCard';
import routes from '../routes';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <WelcomeCard
        navigate={navigate}
      />
    );
  }
}