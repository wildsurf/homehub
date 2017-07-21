import React, {Component} from 'react';
import {Tabs} from './config/router';
import {COLOR, ThemeProvider} from 'react-native-material-ui';
import {View} from 'react-native';

const uiTheme = {
	palette: {
		primaryColor: COLOR.blue400
	},
	toolbar: {
		container: {
			height: 50
		}
	}
};

function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

class App extends React.Component {
    state = {
        currentRoute: null
    };

    updateCurrentState = (prevState, currentState) => {
        const prevRoute = getCurrentRouteName(prevState);
        const currentRoute = getCurrentRouteName(currentState);
        if (prevRoute !== currentRoute) {
            this.setState({
                currentRoute
            });
        }
    };

	render() {
        const {currentRoute} = this.state;
		return (
			<ThemeProvider uiTheme={uiTheme}>
				<Tabs onNavigationStateChange={this.updateCurrentState} screenProps={{currentRoute}} />
			</ThemeProvider>
		);
	}
}

export default App;
