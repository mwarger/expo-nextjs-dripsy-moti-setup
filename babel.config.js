module.exports = function (api) {
	// Detect web usage (this may change in the future if Next.js changes the loader)
	const isWeb = api.caller(
		caller =>
			caller &&
			(caller.name === 'babel-loader' ||
				caller.name === 'next-babel-turbo-loader')
	);

	return {
		presets: [
			isWeb && 'next/babel',
			[
				'babel-preset-expo',
				{
					web: { useTransformReactJsxExperimental: true },
				},
			],
		].filter(Boolean),
		plugins: [
			['@babel/plugin-transform-flow-strip-types'],
			['@babel/plugin-proposal-class-properties', { loose: true }],
			['@babel/plugin-proposal-private-methods', { loose: true }],
			['@babel/plugin-proposal-private-property-in-object', { loose: true }],
			'react-native-reanimated/plugin',
		],
	};
};
