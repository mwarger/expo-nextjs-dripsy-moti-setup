import { Button, Text, View } from 'dripsy';
import { AnimatePresence, MotiView } from 'moti';
import React, { useState } from 'react';

export default function App() {
	const [visible, setVisible] = useState(false);

	return (
		<View>
			<Button onPress={() => setVisible(!visible)} title='Toggle' />
			<AnimatePresence>
				{visible && (
					<MotiView
						from={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{
							opacity: 0,
						}}
					>
						<Text>Stuff</Text>
					</MotiView>
				)}
			</AnimatePresence>
		</View>
	);
}
