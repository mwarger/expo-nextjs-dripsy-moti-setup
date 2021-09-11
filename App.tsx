// Use next.js page for the mobile app
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Link, useRouting } from 'expo-next-react-navigation';

import { DripsyProvider, View, Text, Button } from 'dripsy';
import { StyleSheet } from 'react-native';
// import AppIndex from './src/pages';
import { theme } from './src/theme/theme';
import { createStackNavigator } from '@react-navigation/stack';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 20,
		margin: 20,
	},
});

export function Home() {
	const { navigate } = useRouting();
	return (
		<>
			<View style={styles.container}>
				<Text style={styles.text}>Home Screen 🥳</Text>
				<Link style={{ color: 'green' }} routeName='Profile'>
					Click to go to profile
				</Link>
				<Button
					title='👈 Go back'
					onPress={() => {
						navigate({ routeName: 'Profile' });
					}}
				/>
			</View>
		</>
	);
}

export function Profile() {
	// const { goBack } = useRouting();

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Profile! 🏋️‍♀️</Text>
			<Button title='👈 Go back' onPress={() => console.log('pressed')} />
		</View>
	);
}

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<DripsyProvider theme={theme}>
				<Stack.Navigator>
					<Stack.Screen name='Home' component={Home} />
					<Stack.Screen name='Profile' component={Profile} />
				</Stack.Navigator>
			</DripsyProvider>
		</NavigationContainer>
	);
}
