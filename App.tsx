// Use next.js page for the mobile app
import { DripsyProvider, SafeAreaView } from 'dripsy';
import React from 'react';
import AppIndex from './src/pages';
import { theme } from './src/theme/theme';

export default function App() {
	return (
		<DripsyProvider theme={theme}>
			<SafeAreaView>
				<AppIndex />
			</SafeAreaView>
		</DripsyProvider>
	);
}
