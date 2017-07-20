import React, {Component} from 'react';
import {Tabs} from './config/router';
import {COLOR, ThemeProvider} from 'react-native-material-ui';
import {View} from 'react-native';

const uiTheme = {
	palette: {
		primaryColor: COLOR.green500
	},
	toolbar: {
		container: {
			height: 50
		}
	}
};

class App extends React.Component {
	render() {
		return (
			<ThemeProvider uiTheme={uiTheme}>
				<Tabs />
			</ThemeProvider>
		);
	}
}

export default App;
