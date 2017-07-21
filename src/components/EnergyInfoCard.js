import React, {Component} from 'react';
import {Card, Button} from 'react-native-material-ui';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AccountScreen extends React.Component {
	render() {
		const {name, devices} = this.props.accountInfo;
		return (
			<Card>
				<View style={styles.card}>
					{devices.map((d, idx) =>
						<View style={styles.device} key={idx}>
							<View style={styles.name}>
								<Text>
									{d.name}
								</Text>
							</View>
							<View style={styles.energy}>
								<Text>
									{d.energy} kW
								</Text>
							</View>
						</View>
					)}
					<Text>
						{name}
					</Text>
				</View>
			</Card>
		);
	}
}

const styles = {
	card: {
		padding: 10,
		backgroundColor: '#ddd'
	},
	device: {
		flexDirection: 'row'
	},
	name: {
		flex: 4,
        
	},
	energy: {
		flex: 1,
	}
};
