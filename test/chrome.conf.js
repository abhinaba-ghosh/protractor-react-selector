exports.config = {
	directConnect: true,
	specs: ['./spec.js'],
	directConnect: true,
	capabilities: {
		browserName: 'chrome',
		chromeOptions: {
			args: ['--headless', 'show-fps-counter=true'],
		},
		ignoreProtectedModeSettings: true,
		platform: 'ANY',
	},

	plugins: [
		{
			path: '../',
		},
	],
};
