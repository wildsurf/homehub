import React, {Component} from 'react';
import {Button} from 'react-native-material-ui';
import {View} from 'react-native';

import AccountForm from '../components/AccountForm';

export default class AccountScreen extends React.Component {
	render() {
		return (
			<View>
                <AccountForm></AccountForm>
			</View>
		);
	}
}
