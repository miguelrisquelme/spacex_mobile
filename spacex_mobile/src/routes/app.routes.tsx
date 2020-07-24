import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './../pages/Home';
import Rockets from './../pages/Rockets';
import Dragons from './../pages/Dragons';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
	return(
		<AppStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#2f2e41',
				  },
				headerTintColor: '#F9A826',
			}}
		>
			<AppStack.Screen name="Home" component={Home} options={{headerShown: false,}}></AppStack.Screen>
			<AppStack.Screen name="Rockets" component={Rockets}></AppStack.Screen>
			<AppStack.Screen name="Dragons" component={Dragons}></AppStack.Screen>
		</AppStack.Navigator>
	);
}

export default AppRoutes;