import React, {Component} from 'react';
import {Card} from 'react-native-material-ui';
import {Text} from 'react-native';

export default class AccountScreen extends React.Component {
	render() {
        const {name, token} = this.props.account;
		return (
			<Card>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.token}>{token}</Text>
			</Card>
		);
	}
}

const styles = {
    name: {
        fontSize: 14
    },
    token: {
        fontSize: 20
    }
}