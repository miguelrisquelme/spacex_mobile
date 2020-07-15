import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/index';

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<Routes/>
		</NavigationContainer>
	);
}

export default App;