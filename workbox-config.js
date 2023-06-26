module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{jpeg,mp3,html,wav,json,md,js,css,mp4}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};