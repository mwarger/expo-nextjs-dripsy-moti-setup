// @generated: @expo/next-adapter@2.1.52
import { H1 } from 'dripsy';
import { MotiView } from 'moti';
import React from 'react';

export default function App() {
	return (
		<MotiView
			from={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{
				opacity: 0,
			}}
		>
			<H1
				sx={{
					color: 'text', // #000 from theme.colors
					fontSize: 2, // 24px from theme.fontSizes
				}}
			>
				Hello world!
			</H1>
		</MotiView>
	);
}
