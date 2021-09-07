export const theme = {
	colors: {
		text: '#000',
		background: '#fff',
		primary: 'tomato',
	},
	// set 0 first, then double for consistent nested spacing
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	fontSizes: [16, 20, 24, 32],
	text: {
		h1: {
			fontSize: 2, // this is 24px, taken from `fontSize` above
		},
		p: {
			fontSize: 0, // & this is 16px, taken from `fontSize` above
		},
	},
};
