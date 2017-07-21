import React, {Component} from 'react';
import {Card, Button} from 'react-native-material-ui';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AccountScreen extends React.Component {
	render() {
		const {account: {name, token}, onRemove} = this.props;
		return (
			<Card>
				<View style={styles.card}>
					<Text style={styles.name}>
						{name}
					</Text>
					<Text style={styles.token}>
						{token}
					</Text>
					<Button onPress={() => onRemove()} style={styles.icon} icon="close" text="" />
				</View>
			</Card>
		);
	}
}

const styles = {
	card: {
		padding: 10
	},
	name: {
		fontSize: 14
	},
	token: {
		fontSize: 20
	},
	icon: {
		container: {
			position: 'absolute',
			right: -5,
			top: 5
		},
		text: {
			color: '#ddd'
		}
	}
};
