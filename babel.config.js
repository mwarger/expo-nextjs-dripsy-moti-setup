// @generated: @expo/next-adapter@2.1.52
// Learn more: https://docs.expo.dev/guides/using-nextjs/

module.exports = function (api) {
	api.cache(true);

	return {
		presets: ['@expo/next-adapter/babel'],
		plugins: [
			'@babel/plugin-proposal-class-properties',
			'react-native-reanimated/plugin',
		],
		overrides: [
			{
				test: './node_modules/dripsy/*',
				plugins: ['@babel/plugin-transform-react-jsx'],
			},
		],
	};
};
