// @ts-check
const { withExpo } = require('@expo/next-adapter');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
	'dripsy',
	'@dripsy/core',
	'react-native-web',
]);

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {};

module.exports = withPlugins(
	[withTM, [withExpo, { projectRoot: __dirname }]],
	nextConfig
);
