import React, {Component} from 'react';
import {Card, Button} from 'react-native-material-ui';
import {Text, View} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SettingsScreen extends React.Component {
	onAddNewAccount = () => {
		const {navigate} = this.props.navigation;
        navigate('data');
	};

	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#f3f3f3'}}>
				{/* Rest of the app comes ABOVE the action button component !*/}
				<ActionButton buttonColor="rgba(231,76,60,1)" onPress={this.onAddNewAccount} />
			</View>
		);
	}
}

const styles = {
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
	},
	actionButtonIcon: {
		fontSize: 20,
		height: 22,
		color: 'white'
	}
};
