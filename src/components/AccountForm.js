import React, {Component} from 'react';
import {ScrollView, View, AsyncStorage} from 'react-native';
import {Button, Card} from 'react-native-material-ui';
import TextField from 'react-native-md-textinput';

export const STORAGE_ACCOUNT = '@accounts';

export default class AccountForm extends React.Component {
	state = {
		name: '',
		token: ''
	};

	saveAccount = async () => {
		const {name, token, existingAccounts} = this.state;
		let accounts = await AsyncStorage.getItem(STORAGE_ACCOUNT);

        if (accounts) {
            accounts = JSON.parse(accounts);
        } else {
            accounts = [];
        }

		accounts.push({name, token});

		try {
			await AsyncStorage.setItem(STORAGE_ACCOUNT, JSON.stringify(accounts));
			this.props.navigate('settings');
		} catch (error) {}
	};

	cancel = () => {
		this.props.navigate('settings');
	};

	render() {
		return (
			<ScrollView>
				<Card>
					<View style={styles.card}>
						<TextField
							style={styles.input}
							label={'Name of Device'}
							highlightColor={'#0099cc'}
							onChangeText={name => this.setState({name})}
							value={this.state.name}
						/>
						<TextField
							style={styles.input}
							label={'Token'}
							highlightColor={'#0099cc'}
							onChangeText={token => this.setState({token})}
							value={this.state.token}
						/>
						<Button primary text="Save" raised onPress={() => this.saveAccount()} />
						<Button text="Load" onPress={() => this.load()} />
						<Button text="Cancel" onPress={() => this.cancel()} />
					</View>
				</Card>
			</ScrollView>
		);
	}
}

const styles = {
	card: {
		paddingRight: 20,
		paddingLeft: 20
	}
};
