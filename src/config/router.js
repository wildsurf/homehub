import {TabNavigator, StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import DataScreen from '../screens/DataScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AccountScreen from '../screens/AccountScreen';

export const Settings = StackNavigator(
	{
		settings: {
			screen: SettingsScreen
		},
		account: {
			screen: AccountScreen
		}
	},
	{
		mode: 'modal',
		headerMode: 'none'
	}
);

export const Tabs = TabNavigator({
	data: {
		screen: DataScreen,
		navigationOptions: {
			title: 'Data',
			tabBarIcon: ({tintColor}) => <Icon name="list" size={35} color={tintColor} />
		}
	},
	settings: {
		screen: Settings,
		navigationOptions: {
			title: 'Settings',
			tabBarIcon: ({tintColor}) => <Icon name="settings" size={35} color={tintColor} />
		}
	}
});
