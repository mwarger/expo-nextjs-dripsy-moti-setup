// @generated: @expo/next-adapter@2.1.52
// Learn more: https://docs.expo.dev/guides/using-nextjs/

module.exports = {
	presets: ['@expo/next-adapter/babel'],
	plugins: ['@babel/plugin-proposal-class-properties'],
	overrides: [
		{
			test: './node_modules/dripsy/*',
			plugins: ['@babel/plugin-transform-react-jsx'],
		},
	],
};
