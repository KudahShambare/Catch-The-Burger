module.exports = {
  globDirectory: './',
  globPatterns: [
    '**/*.{jpeg,mp3,html,wav,json,md,js,css,mp4}'
  ],
  swDest: 'sw.js',
  ignoreURLParametersMatching: [
    /^utm_/,
    /^fbclid$/
  ],
  maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10MB max file size to cache
};
