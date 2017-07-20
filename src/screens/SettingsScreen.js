import React, {Component} from 'react';
import {Card, Button} from 'react-native-material-ui';
import {Text, View, AsyncStorage} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import {STORAGE_ACCOUNT} from '../components/AccountForm';
import AccountInfo  from '../components/AccountInfo';

export default class SettingsScreen extends React.Component {
    state = {
        accounts: []
    };

	async componentDidMount() {
		const accounts = await AsyncStorage.getItem(STORAGE_ACCOUNT);
        if (accounts) {
            this.setState({
                accounts: JSON.parse(accounts)
            });
        }
	}

	onAddNewAccount = () => {
		const {navigate} = this.props.navigation;
		navigate('account');
	};

	render() {
        const {accounts} = this.state;
		return (
			<View style={{flex: 1, backgroundColor: '#f3f3f3'}}>
                {accounts && accounts.map((acc, idx) => <AccountInfo account={acc} key={idx} />)}
				{/* Rest of the app comes ABOVE the action button component !*/}
				<ActionButton buttonColor="rgba(231,76,60,1)" onPress={this.onAddNewAccount} />
			</View>
		);
	}
}
