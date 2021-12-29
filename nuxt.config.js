export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  target:'static',
	head: {
		title: 'sports AI Hub',
		meta: [
			{ charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no' },
			{ hid: 'description', name: 'description', content: '' },
      { hid: 'format-detection', content: 'telephone=no, address=no, email=no' },
		],
		link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '~/assets/css/line-awesome.css' }],
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: ['~/assets/css/swiper.css','~/assets/css/slick.css','~/assets/css/slick-theme.css','~/assets/css/style.css'],
	// Global CSS (https://go.nuxtjs.dev/config-js)
	//javascript: ['~/assets/js/main.js','~/assets/js/vendor/jquery.min.js','~/assets/js/vendor/bootstrap.min.js'],
  script:[
    {type:"text/javascript", src:"'~/assets/js/main.js",  body: true , ssr: false},
    {type:"text/javascript", src:"https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"},
      {type:"text/javascript", src:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"}
  ],

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
