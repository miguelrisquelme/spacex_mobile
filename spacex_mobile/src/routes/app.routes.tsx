import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './../pages/Home';
import Rockets from './../pages/Rockets';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
	return(
		<AppStack.Navigator>
			<AppStack.Screen name="Home" component={Home} options={{headerShown: false,}}></AppStack.Screen>
			<AppStack.Screen name="Rockets" component={Rockets}></AppStack.Screen>
		</AppStack.Navigator>
	);
}

export default AppRoutes;