import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Card} from 'react-native-material-ui';
import TextField from 'react-native-md-textinput';

export default class AccountForm extends React.Component {
	state = {
		name: '',
		token: ''
	};

	saveAccount = () => {
		const {name, token} = this.state;
		console.log(name, token);
	};

	render() {
		const {name, token} = this.state;
		return (
			<ScrollView>
				<Card>
					<View style={styles.card}>
						<TextField
							style={styles.input}
							label={'Name of Device'}
							highlightColor={'#0099cc'}
							onChangeText={name => this.setState({name})}
						/>
						<TextField
							style={styles.input}
							label={'Token'}
							highlightColor={'#0099cc'}
							onChangeText={token => this.setState({token})}
						/>
						<Button text="Save" onPress={() => this.saveAccount()} />
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
