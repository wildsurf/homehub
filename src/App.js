import {StackNavigator} from 'react-navigation';

import routes from './routes';
import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreen';

export default StackNavigator({
	[routes.home]: {screen: HomeScreen},
	[routes.account]: {screen: AccountScreen}
});
