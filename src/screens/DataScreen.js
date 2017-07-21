import React, {Component} from 'react';
import {AsyncStorage, View, Text} from 'react-native';

import {STORAGE_ACCOUNT} from '../components/AccountForm';
import WelcomeCard from '../components/WelcomeCard';
import EnergyInfoCard from '../components/EnergyInfoCard';
import {getCurrentValuesSummary} from '../services/efergyService';

export default class DataScreen extends React.Component {
	state = {
		accountInfos: [],
		loading: true
	};

    async componentDidMount() {
        this.reloadAccountInfos();
    }

	async componentDidUpdate(prevProps) {
        const {currentRoute} = this.props.screenProps;
        const {currentRoute: prevRoute} = prevProps.screenProps;
        if (currentRoute === 'data' && prevRoute !== 'data') {
            this.reloadAccountInfos();
        }
	}

	async reloadAccountInfos() {
        const accountInfos = [];
		let accounts = await AsyncStorage.getItem(STORAGE_ACCOUNT);

		if (accounts) {
			accounts = JSON.parse(accounts);
		} else {
			accounts = [];
		}

		for (let i = 0; i < accounts.length; i++) {
            const acc = accounts[i];
            const info = await getCurrentValuesSummary(acc.token);
			accountInfos.push({
				name: acc.name,
				devices: info.map(i => ({
                    name: i.sid,
                    energy: i.data[0][Object.keys(i.data[0])[0]],
                    units: i.units,
                    age: i.age
                }))
			});
        }

		this.setState({
			accountInfos,
			loading: false
		});
	}

	render() {
		const {navigate} = this.props.navigation;
		const {accountInfos, loading} = this.state;
		if (!loading && !accountInfos.length) {
			return <WelcomeCard navigate={navigate} />;
		}
		return (
			<View>
				{accountInfos && accountInfos.map((info, idx) => <EnergyInfoCard key={idx} accountInfo={info} />)}
			</View>
		);
	}
}
