import { View, Text, Button } from 'dripsy';
import { useRouting } from 'expo-next-react-navigation';
import React from 'react';
import { StyleSheet } from 'react-native';

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

export default function Profile() {
	const { goBack } = useRouting();

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Profile! 🏋️‍♀️</Text>
			<Button title='👈 Go back' onPress={() => goBack()} />
		</View>
	);
}
