import React, {Component} from 'react';
import {Card, Button} from 'react-native-material-ui';
import {Text} from 'react-native';

export default class WelcomeCard extends Component {
	render() {
		const {navigate} = this.props;
		return (
			<Card style={style.card}>
				<Text style={style.heading}>Welcome</Text>
				<Text style={style.text}>To get started, add an account to your list of accounts.</Text>
				<Button
					onPress={() => navigate('settings')}
					style={{...style.text, ...style.link}}
					text="Add an account"
				/>
			</Card>
		);
	}
}

const style = {
	card: {
		justifyContent: 'center',
		alignItems: 'center',
        marginTop: 20,
		padding: 20
	},
	heading: {
		textAlign: 'center',
		alignItems: 'center',
		fontSize: 20,
		paddingTop: 10
	},
	text: {
		textAlign: 'justify',
		margin: 10
	},
	link: {
		fontWeight: 'bold',
		color: 'blue'
	}
};
