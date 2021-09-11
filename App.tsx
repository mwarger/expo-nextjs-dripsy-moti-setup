// Use next.js page for the mobile app
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Link, useRouting } from 'expo-next-react-navigation';

import { DripsyProvider, View, Text, Button } from 'dripsy';
import { StyleSheet } from 'react-native';
import AppIndex from './src/pages';
import { theme } from './src/theme/theme';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import Profile from './src/pages/profile';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<DripsyProvider theme={theme}>
				<Stack.Navigator>
					<Stack.Screen
						name='home'
						component={AppIndex}
						options={{
							title: 'Home',
						}}
					/>
					<Stack.Screen name='profile' component={Profile} />
				</Stack.Navigator>
			</DripsyProvider>
		</NavigationContainer>
	);
}
