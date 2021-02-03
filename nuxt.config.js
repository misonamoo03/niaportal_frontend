export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  target:'static',
	head: {
		title: 'niaportal-frontend',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		script: [
			{
				src: 'https://code.jquery.com/jquery-1.12.4.js',
				type: 'text/javascript',
				async: true,
			},
		],
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: ['~/assets/css/default.css', '~/assets/css/style.css'],
	// Global CSS (https://go.nuxtjs.dev/config-js)
	javascript: ['~/assets/js/custom.js'],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
	],

	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {
		withCredentials: true,
	},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
		transpile: [
			"vee-validate/dist/rules"	// nuxt JS의 vee-validate 기본 설정
		  ]
	},
};
