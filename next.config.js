// @ts-check
const { withExpo } = require('@expo/next-adapter');
const withFonts = require('next-fonts');
// @ts-ignore
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
	'moti',
	'@motify/core',
	'@motify/components',
	'react-native-reanimated',
	'dripsy',
	'@dripsy/core',
	'react-native-web',
	'expo-next-react-navigation',
]);

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {};

module.exports = withPlugins(
	[withTM, withFonts, withImages, [withExpo, { projectRoot: __dirname }]],
	nextConfig
);
