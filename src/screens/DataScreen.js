import React, {Component} from 'react';

import WelcomeCard from '../components/WelcomeCard';

export default class DataScreen extends React.Component {
	render() {
		const {navigate} = this.props.navigation;
		return <WelcomeCard navigate={navigate} />;
	}
}
