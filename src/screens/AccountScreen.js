import React, {Component} from 'react';
import {Button} from 'react-native-material-ui';
import {View} from 'react-native';

import AccountForm from '../components/AccountForm';

export default class AccountScreen extends React.Component {
	render() {
        const {navigate} = this.props.navigation;
		return (
			<View>
                <AccountForm navigate={navigate}></AccountForm>
			</View>
		);
	}
}
