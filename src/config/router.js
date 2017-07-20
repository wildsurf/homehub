import {TabNavigator, StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import DataScreen from '../screens/DataScreen';
import SettingsScreen from '../screens/SettingsScreen';

export const Tabs = TabNavigator({
	data: {
		screen: DataScreen,
		navigationOptions: {
			title: 'Data',
			tabBarIcon: ({tintColor}) => <Icon name="rocket" size={35} color={tintColor} />
		}
	},
	settings: {
		screen: SettingsScreen,
		navigationOptions: {
			title: 'Settings',
			tabBarIcon: ({tintColor}) => <Icon name="settings" size={35} color={tintColor} />
		}
	}
});
